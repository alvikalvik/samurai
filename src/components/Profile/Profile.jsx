import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {    
    return (
        <>
            <ProfileInfo />            
            <MyPostsContainer
                store={props.store}                
            />
        </>
    );
}

export default Profile;