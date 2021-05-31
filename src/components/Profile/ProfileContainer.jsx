import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import {
    getProfile,
} from '../../redux/profileReduser';
import { Redirect, withRouter } from 'react-router';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {  
    componentDidMount() {        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.a; // !!! Change in future
        } 
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAutorized) {            
            return <Redirect to='/login' />
        }

        if (!this.props.profile) {
            return <Preloader />
        }

        return (
            <>
                <Profile
                    profile={this.props.profile}
                    isAutorized={this.props.isAutorized}
                />
            </>
        );
    }    
}

const mapStateToProps = (state) => {        
    
    return {
        profile: state.profilePage.profile,        
        a: 2,
    };
};

const ProfileWithRouter = withRouter(ProfileContainer);

const AuthRedirectComponent = withAuthRedirect(ProfileWithRouter);

export default connect(mapStateToProps, {getProfile})(AuthRedirectComponent);