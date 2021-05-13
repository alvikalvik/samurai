import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <>
            <ProfileInfo />            
            <MyPosts />
        </>
    );
}

export default Profile;