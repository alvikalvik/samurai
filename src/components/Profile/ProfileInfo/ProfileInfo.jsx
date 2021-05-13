import {profileTopImg, profileTextInfo} from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <>
            <img className={profileTopImg} src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752" alt="Profile top" />
            <div className={profileTextInfo}>
                ava + descr
			</div>            
        </>
    );
}

export default ProfileInfo;