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