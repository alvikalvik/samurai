import {Component} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC} from '../../redux/usersReduser';
import * as axios from 'axios';

class UsersContainer extends Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${this.props.currentPage}`)
            .then( response => {                
                this.props.setUsers(response.data);
            });
    }    

    handlePageClick = (e, i) => {        
        e.preventDefault();        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${i}`)
            .then( response => {                
                this.props.setUsers(response.data);
                this.props.setCurrentPage(i);
            });
    }
    
    render() {
        return <Users
                    users={this.props.users}
                    usersCountOnPage={this.props.usersCountOnPage}
                    currentPage={this.props.currentPage}
                    totalCount={this.props.totalCount}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}                    
                    handlePageClick={this.handlePageClick}
                />
    }    
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);