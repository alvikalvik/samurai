import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReduser';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {   
    
//     const postsData = props.store.getState().profilePage.postsData;
//     const newPostText = props.store.getState().profilePage.newPostText;   

//     const updateNewPostText = (text) => {        
//         const action = updateNewPostTextActionCreator(text);        
//         props.store.dispatch(action);       
//     };

//     const addPost = () => {        
//         const action = addPostActionCreator();
//         props.store.dispatch(action);  
//     };

//     return (
//         <MyPosts
//             updateNewPostText={updateNewPostText}
//             addPost={addPost}
//             postsData={postsData}
//             newPostText={newPostText}
//         />
//     );
// }

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            const action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {            
            const action = updateNewPostTextActionCreator(text);        
            dispatch(action);
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;