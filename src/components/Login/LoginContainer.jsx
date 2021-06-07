import {Component} from 'react';
import Login from './Login';
import {connect} from 'react-redux';
import {
    login,    
} from '../../redux/authReduser';
import { Redirect } from 'react-router';
class LoginContainer extends Component {  

    render() {
        if (this.props.isAutorized) {
            return <Redirect to="/" />
        }

        return (
            <Login
                login={this.props.login}
                isFetching={this.props.isFetching}
                loginErrorMessage={this.props.loginErrorMessage}
            />
        );
    }
    
}

const mapStateToProps = (state) => {
    const {        
        isAutorized,
        isFetching,
        loginErrorMessage
    } = state.auth;
    
    return {        
        isAutorized,
        isFetching,
        loginErrorMessage
    };
};

export default connect(
    mapStateToProps,
    {
        login,
    }
)(LoginContainer);