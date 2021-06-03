import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateProfileStatus={props.updateProfileStatus}
            />            
            <MyPostsContainer />
        </>
    );
}

export default Profile;