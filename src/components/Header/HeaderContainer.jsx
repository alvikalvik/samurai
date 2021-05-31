import {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {
    checkAuthMe,
} from '../../redux/authReduser';
class HeaderContainer extends Component {
    componentDidMount() {
        this.props.checkAuthMe();
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

export default connect(
    mapStateToProps,
    {checkAuthMe}
)(HeaderContainer);