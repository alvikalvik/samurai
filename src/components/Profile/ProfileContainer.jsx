import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import {
    getProfile,
    getProfileStatus,
    updateProfileStatus
} from '../../redux/profileReduser';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends Component {  
    componentDidMount() {
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
        updateProfileStatus
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);