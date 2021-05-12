import MyPosts from './MyPosts/MyPosts';
import {profile_top_img} from './Profile.module.css';

const Profile = () => {
    return (
        <>
            <img className={profile_top_img} src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752" alt="Profile top" />
            <div>
                ava + descr
			</div>
            <MyPosts />
        </>
    );
}

export default Profile;