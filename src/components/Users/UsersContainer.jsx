import {Component} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    unfollow,    
    getUsers
} from '../../redux/usersReduser';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class UsersContainer extends Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.usersCountOnPage, this.props.currentPage);
    }    

    handlePageClick = (e, i) => {        
        e.preventDefault();
        this.props.getUsers(this.props.usersCountOnPage, i);
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
    const {
        users,
        usersCountOnPage,
        currentPage,
        totalCount,
        isFetching,
        followingInProgress,
    } = state.usersPage;
    
    return {
        users,
        usersCountOnPage,
        currentPage,
        totalCount,
        isFetching,
        followingInProgress,
    };
};

const UsersContainerWithAuthRedirect = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
    follow,
    unfollow,    
    getUsers
})(UsersContainerWithAuthRedirect);