import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <Post message="Hi, how are you?" likesCount="15" />
                <Post message="Hello World!!!" likesCount="20" />                
            </div>
        </div>     
    );
}

export default MyPosts;