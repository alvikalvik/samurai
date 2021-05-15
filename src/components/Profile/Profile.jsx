import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profileState, dispatch}) => {    
    return (
        <>
            <ProfileInfo />            
            <MyPosts
                postsData={profileState.postsData}
                newPostText={profileState.newPostText}
                dispatch={dispatch}
            />
        </>
    );
}

export default Profile;