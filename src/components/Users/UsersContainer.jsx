import {Component} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setIsFetchingAC} from '../../redux/usersReduser';
import * as axios from 'axios';

class UsersContainer extends Component {
    componentDidMount = () => {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${this.props.currentPage}`)
            .then( response => {                
                this.props.setUsers(response.data);
                this.props.setIsFetching(false);
            });
    }    

    handlePageClick = (e, i) => {        
        e.preventDefault(); 
        this.props.setIsFetching(true);       
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${i}`)
            .then( response => {                
                this.props.setUsers(response.data);
                this.props.setCurrentPage(i);
                this.props.setIsFetching(false);
            });
    }
    
    render() {        
        if(this.props.isFetching) {
            return <Preloader />;
        } else {
            return <Users
            users={this.props.users}
            usersCountOnPage={this.props.usersCountOnPage}
            currentPage={this.props.currentPage}
            totalCount={this.props.totalCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}                    
            handlePageClick={this.handlePageClick}
        />;
        }
    }    
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCountOnPage: state.usersPage.usersCountOnPage,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
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
        setIsFetching: (isFetching) => {
            const action = setIsFetchingAC(isFetching);
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);