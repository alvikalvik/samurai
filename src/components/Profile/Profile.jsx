import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profileState, addPost, updateNewPostText}) => {    
    return (
        <>
            <ProfileInfo />            
            <MyPosts
                postsData={profileState.postsData}
                newPostText={profileState.newPostText}
                addPost={addPost}
                updateNewPostText={updateNewPostText} />
        </>
    );
}

export default Profile;