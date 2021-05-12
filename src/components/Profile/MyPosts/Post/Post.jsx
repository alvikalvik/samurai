import styles from './Post.module.css';

const {post} = styles;

const Post = ({message, likesCount}) => {
    return (        
        <div className={post}>
            <img src="https://eyeandfaceclinic.ie/wp-content/uploads/2018/01/beautiful-face-clear-skin.jpg" alt="avatar" />
            <div>
                {message}
                <br /><span>likes: {likesCount}</span>
            </div>            
        </div>                 
    );
}

export default Post;