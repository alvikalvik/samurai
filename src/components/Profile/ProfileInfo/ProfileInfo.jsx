import {profileTopImg, profileTextInfo} from './ProfileInfo.module.css';
import avatar from '../../../assets/img/avatar.png';
import ProfileStatus from './ProfileStatus';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ProfileInfo = ({profile, status, updateProfileStatus, isOwner, savePhoto, editMode, setEditMode, isFetching, saveProfileFields}) => {            
    let profileFieldsInfo = null;
    
    if (editMode) {      
        profileFieldsInfo = (
            <> 
                <Formik
                    initialValues={{
                        aboutMe: profile.aboutMe ?? '',
                        fullName: profile.fullName ?? '',
                        lookingForAJob: profile.lookingForAJob ?? '',
                        lookingForAJobDescription: profile.lookingForAJobDescription ?? '',
                        facebook: profile.contacts.facebook ?? '',
                        github: profile.contacts.github ?? '', 
                        instagram: profile.contacts.instagram ?? '', 
                        mainLink: profile.contacts.mainLink ?? '', 
                        twitter: profile.contacts.twitter ?? '', 
                        vk: profile.contacts.vk ?? '', 
                        website: profile.contacts.website ?? '', 
                        youtube: profile.contacts.youtube ?? '', 
                    }}
                    validate={values => {                        
                        const errors = {}; 
                        const urlsToCheck =['facebook', 'github', 'instagram', 'mainLink', 'twitter', 'vk', 'website', 'youtube'];
                        
                        urlsToCheck.forEach( contact => {
                            if ( values[contact] && !/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi.test(values[contact]) ) {
                                errors[contact] = 'Invalid URL';
                            }
                        });
                       
                        return errors;
                    }}
                    onSubmit={(values) => {
                        saveProfileFields(profile.userId, values);                        
                    }}
                    >
                    {() => (
                        <Form>
                            <div>
                                About Me:
                                <Field type="text" name="aboutMe" />
                            </div>
                            <div>
                                Full name:
                                <Field type="text" name="fullName" />
                            </div>
                            <div>
                                Looking for a job:
                                <Field type="checkbox" name="lookingForAJob" />
                            </div>
                            <div>
                                Looking for a job description:
                                <Field type="text" name="lookingForAJobDescription" />
                            </div>
                            <div>
                                Contacts:
                                <div>
                                    Facebook:
                                    <Field type="text" name="facebook" />
                                    <ErrorMessage name="facebook" component="div" />
                                </div>
                                <div>
                                    Github:
                                    <Field type="text" name="github" />
                                    <ErrorMessage name="github" component="div" />
                                </div>
                                <div>
                                    Instagram:
                                    <Field type="text" name="instagram" />
                                    <ErrorMessage name="instagram" component="div" />
                                </div>
                                <div>
                                    MainLink:
                                    <Field type="text" name="mainLink" />
                                    <ErrorMessage name="mainLink" component="div" />
                                </div>
                                <div>
                                    Twitter:
                                    <Field type="text" name="twitter" />
                                    <ErrorMessage name="twitter" component="div" />
                                </div>
                                <div>
                                    VK:
                                    <Field type="text" name="vk" />
                                    <ErrorMessage name="vk" component="div" />
                                </div>
                                <div>
                                    Website:
                                    <Field type="text" name="website" />
                                    <ErrorMessage name="website" component="div" />
                                </div>
                                <div>
                                    Youtube:
                                    <Field type="text" name="youtube" />
                                    <ErrorMessage name="youtube" component="div" />
                                </div>
                            </div>
                            
                            <button type="submit" disabled={isFetching}>
                                Save
                            </button>
                        </Form>
                    )}
                </Formik>
            </>
        );
    } else {
        profileFieldsInfo = (
            <>
                <div>About Me: {profile.aboutMe}</div>
                <div>Full name: {profile.fullName}</div>
                <div>Looking for a job: {profile.lookingForAJob ? 'YES' : 'NO'}</div>
                <div>Looking for a job description: {profile.lookingForAJobDescription}</div>
                <div>
                    Contacts:
                    <div>Facebook: {profile.contacts.facebook}</div>
                    <div>Github: {profile.contacts.github}</div>
                    <div>Instagram: {profile.contacts.instagram}</div>
                    <div>MainLink: {profile.contacts.mainLink}</div>
                    <div>Twitter: {profile.contacts.twitter}</div>
                    <div>VK: {profile.contacts.vk}</div>
                    <div>Website: {profile.contacts.website}</div>
                    <div>Youtube: {profile.contacts.youtube}</div>
                </div>
                {isOwner
                    ? <button
                        onClick={() => setEditMode(true)}
                    >
                        Edit
                    </button>                    
                    : null
                }                
            </>
        );
        
    }
    
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

            {profileFieldsInfo}              
                
                
                
            <ProfileStatus
                status={status}
                updateProfileStatus={updateProfileStatus}
            />
			</div>            
        </>
    );
}

export default ProfileInfo;