import {connect} from 'react-redux';
import Users from './Users';
import {followAC, unfollowAC, setUsersAC} from '../../redux/usersReduser';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCountOnPage: state.usersPage.usersCountOnPage
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            const action = followAC(id);
            dispatch(action);
        },
        unfollow: (id) => {
            const action = unfollowAC(id);
            dispatch(action);
        },
        setUsers: (users) => {
            const action = setUsersAC(users);
            dispatch(action);
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;