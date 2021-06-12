import {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {    
    logout,
} from '../../redux/authReduser';
class HeaderContainer extends Component {   

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

export default connect(
    mapStateToProps,
    {logout}
)(HeaderContainer);