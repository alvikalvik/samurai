import MyPosts from './MyPosts';
import {
    addPost    
} from '../../../redux/profileReduser';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    };
};

const MyPostsContainer = connect(mapStateToProps, {
    addPost    
})(MyPosts);

export default MyPostsContainer;