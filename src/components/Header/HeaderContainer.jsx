import {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {
    setUserData,
    setIsFetching,
} from '../../redux/authReduser';
import { authAPI } from '../api/api';
class HeaderContainer extends Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        authAPI.authMe()
            .then( data => {    
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data);
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