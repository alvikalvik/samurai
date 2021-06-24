import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateProfileStatus={props.updateProfileStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />            
            <MyPostsContainer />
        </>
    );
}

export default Profile;