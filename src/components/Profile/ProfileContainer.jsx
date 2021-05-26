import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import {
    setUserProfile,
} from '../../redux/profileReduser';


class ProfileContainer extends Component {  
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.a}`)
            .then( response => {                
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);