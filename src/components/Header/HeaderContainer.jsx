import {Component} from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {
    setUserData,
    setIsFetching,
} from '../../redux/authReduser';




class HeaderContainer extends Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then( response => {    
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data);
                }      
                
                this.props.setIsFetching(false);                
            });
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
    
}

const mapStateToProps = (state) => {
    // const {
    //     id,
    //     login,
    //     email,
    //     isAutorized,
    //     isFetching,
    // } = state.auth;
    
    // return {
    //     id,
    //     login,
    //     email,
    //     isAutorized,
    //     isFetching,
    // };
    return {...state.auth};
};

export default connect(mapStateToProps, {setUserData, setIsFetching})(HeaderContainer);