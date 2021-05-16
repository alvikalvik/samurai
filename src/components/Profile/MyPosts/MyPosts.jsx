import React from 'react';
import {myPosts, myPostsTitle, myPostsForm, newPostTextarea, newPostBtn} from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../state';

const MyPosts = ({postsData, newPostText, dispatch}) => {

    let textarea = React.createRef();

    const handleTextChange = () => {
        const text = textarea.current.value;
        const action = updateNewPostTextActionCreator(text);        
        dispatch(action);       
    };

    const addNewPost = (evt) => {
        evt.preventDefault();
        const action = addPostActionCreator();
        dispatch(action);  
    };

    let postsElements = postsData
        .map( ({message, likesCount}) => <Post message={message} likesCount={likesCount} />);

    return (
        <div className={myPosts}>
            <h3 className={myPostsTitle}>My posts</h3>
            <form className={myPostsForm} onSubmit={addNewPost}>
                <textarea
                    name="newpost"
                    id="newpost"
                    className={newPostTextarea}
                    placeholder="Write new message here"
                    ref={textarea}
                    value={newPostText}
                    onChange={handleTextChange}
                />

                <button                    
                    className={newPostBtn}
                >
                    Add post
                </button>
            </form>
            <div>
                {postsElements}                              
            </div>
        </div>     
    );
}

export default MyPosts;