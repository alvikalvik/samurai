import {Component} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    unfollow,    
    requestUsers
} from '../../redux/usersReduser';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getTotalCount, getUsers, getUsersCountOnPage } from '../../redux/usersSelectors';

class UsersContainer extends Component {
    componentDidMount = () => {        
        this.props.requestUsers(this.props.usersCountOnPage, this.props.currentPage);
    }    

    handlePageClick = (e, i) => {        
        e.preventDefault();
        this.props.requestUsers(this.props.usersCountOnPage, i);
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
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}                    
                handlePageClick={this.handlePageClick}
                setFollowingInProgress={this.props.setFollowingInProgress}
        />;
        }
    }    
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        usersCountOnPage: getUsersCountOnPage(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,    
        requestUsers
    }),
    // withAuthRedirect
)(UsersContainer);