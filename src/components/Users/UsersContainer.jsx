import {connect} from 'react-redux';
import Users from './Users';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC} from '../../redux/usersReduser';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCountOnPage: state.usersPage.usersCountOnPage,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
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
        setUsers: (data) => {
            const action = setUsersAC(data);
            dispatch(action);
        },
        setCurrentPage: (currentPage) => {
            const action = setCurrentPageAC(currentPage);
            dispatch(action);
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;