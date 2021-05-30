import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import {
    getProfile,
} from '../../redux/profileReduser';
import { withRouter } from 'react-router';

class ProfileContainer extends Component {  
    componentDidMount() {        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.a; // !!! Change in future
        } 
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }

        return (
            <>
                <Profile profile={this.props.profile}/>
            </>
        );
    }    
}

const mapStateToProps = (state) => {
    const {
        profile
    } = state.profilePage;
    
    return {
        profile,
        a: 2
    };
};

const ProfileWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(ProfileWithRouter);