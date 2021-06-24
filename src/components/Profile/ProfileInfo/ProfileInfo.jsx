import {profileTopImg, profileTextInfo} from './ProfileInfo.module.css';
import avatar from '../../../assets/img/avatar.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateProfileStatus, isOwner, savePhoto}) => {    
    return (
        <>
            <img className={profileTopImg} src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752" alt="Profile top" />
            <div className={profileTextInfo}>
                <img src={profile.photos.large ?? avatar} alt="avatar"/>
                {isOwner
                    ? <div>
                        <input
                            type="file"
                            onChange={savePhoto}
                        />
                    </div>                    
                    : null
                }
                <div>Description: {profile.aboutMe ?? '---'}</div>
                ava + descr
                <ProfileStatus
                    status={status}
                    updateProfileStatus={updateProfileStatus}
                />
			</div>            
        </>
    );
}

export default ProfileInfo;