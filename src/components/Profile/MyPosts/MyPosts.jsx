import {myPosts, myPostsTitle, myPostsForm, newPostTextarea, newPostBtn} from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={myPosts}>
            <h3 className={myPostsTitle}>My posts</h3>
            <form className={myPostsForm}>
                <textarea
                    name="newpost"
                    id="newpost"
                    className={newPostTextarea}
                    placeholder="Write new message here"
                />

                <button                    
                    className={newPostBtn}
                >
                    Add post
                </button>
            </form>
            <div>
                <Post message="Hi, how are you?" likesCount="15" />
                <Post message="Hello World!!!" likesCount="20" />                
            </div>
        </div>     
    );
}

export default MyPosts;