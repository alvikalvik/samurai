import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import {
    getProfile,
    getProfileStatus,
    updateProfileStatus,
    savePhoto
} from '../../redux/profileReduser';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends Component { 
    actualizeProfileData = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {                        
            if (this.props.autorizedUserId) {
                userId = this.props.autorizedUserId;
            } else {
                this.props.history.push('/login');
                return
            }            
        } 
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }

    componentDidMount() {
        this.actualizeProfileData();
    }

    componentDidUpdate(prevProps) {        
        if (this.props.profile && prevProps.profile && this.props.profile.userId !== prevProps.profile.userId) {
            this.actualizeProfileData();
        }        
    }

    render() {                        
        if (!this.props.profile) {
            return <Preloader />
        }  

        return (
            <>
                <Profile
                    profile={this.props.profile}
                    isAutorized={this.props.isAutorized}
                    status={this.props.status}
                    updateProfileStatus={this.props.updateProfileStatus}
                    isOwner={this.props.profile.userId === this.props.autorizedUserId}
                    savePhoto={this.props.savePhoto}
                />
            </>
        );
    }    
}

const mapStateToProps = (state) => {        
    
    return {
        profile: state.profilePage.profile,  
        status: state.profilePage.status,
        autorizedUserId: state.auth.id,              
    };
};

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getProfileStatus,
        updateProfileStatus,
        savePhoto
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);