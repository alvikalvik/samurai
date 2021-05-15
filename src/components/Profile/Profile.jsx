import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({state, addPost}) => {    
    return (
        <>
            <ProfileInfo />            
            <MyPosts
                postsData={state.postsData}
                addPost={addPost} />
        </>
    );
}

export default Profile;