import React from 'react';
import {myPosts, myPostsTitle, myPostsForm, newPostTextarea, newPostBtn} from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({postsData, newPostText, addPost, updateNewPostText}) => {

    let textarea = React.createRef();

    const handleTextChange = () => {
        const text = textarea.current.value;
        updateNewPostText(text);
    };

    const addNewPost = (evt) => {
        evt.preventDefault();                
        addPost();        
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