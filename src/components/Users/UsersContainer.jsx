import {Component} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setIsFetching,
} from '../../redux/usersReduser';
import { usersAPI } from '../api/api';

class UsersContainer extends Component {
    componentDidMount = () => {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.usersCountOnPage, this.props.currentPage)
            .then( data => {                
                this.props.setUsers(data);
                this.props.setIsFetching(false);
            });
    }    

    handlePageClick = (e, i) => {        
        e.preventDefault(); 
        this.props.setIsFetching(true);  
        usersAPI.getUsers(this.props.usersCountOnPage, i) 
            .then( data => {                
                this.props.setUsers(data);
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
    const {
        users,
        usersCountOnPage,
        currentPage,
        totalCount,
        isFetching
    } = state.usersPage;
    
    return {
        users,
        usersCountOnPage,
        currentPage,
        totalCount,
        isFetching,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setIsFetching,
})(UsersContainer);