import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReduser';

const MyPostsContainer = (props) => {   
    
    const postsData = props.store.getState().profilePage.postsData;
    const newPostText = props.store.getState().profilePage.newPostText;   

    const updateNewPostText = (text) => {        
        const action = updateNewPostTextActionCreator(text);        
        props.store.dispatch(action);       
    };

    const addPost = () => {        
        const action = addPostActionCreator();
        props.store.dispatch(action);  
    };

    return (
        <MyPosts
            updateNewPostText={updateNewPostText}
            addPost={addPost}
            postsData={postsData}
            newPostText={newPostText}
        />
    );
}

export default MyPostsContainer;