import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import {
    setUserProfile,
} from '../../redux/profileReduser';
import { withRouter } from 'react-router';


class ProfileContainer extends Component {  
    componentDidMount() {        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.a; // !!! Change in future
        }        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then( response => {                
                this.props.setUserProfile(response.data);
            })
            .catch(err => console.log('Could not fetch data' + err));
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

export default connect(mapStateToProps, {setUserProfile})(ProfileWithRouter);