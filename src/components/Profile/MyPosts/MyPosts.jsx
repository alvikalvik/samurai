import React from 'react';
import {myPosts, myPostsTitle, myPostsForm, newPostTextarea, newPostBtn} from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {    

    const handleTextChange = (evt) => {
        const text = evt.target.value;
        props.updateNewPostText(text);                      
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addPost();          
    };

    let postsElements = props.postsData
        .map( ({message, likesCount}) =>
            <Post message={message} likesCount={likesCount} />);

    return (
        <div className={myPosts}>
            <h3 className={myPostsTitle}>My posts</h3>
            <form className={myPostsForm} onSubmit={handleSubmit}>
                <textarea
                    name="newpost"
                    id="newpost"
                    className={newPostTextarea}
                    placeholder="Write new message here"                    
                    value={props.newPostText}
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