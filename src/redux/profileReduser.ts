import { profileAPI } from "../components/api/api";
import { PostDataType, UserProfileType, UserProfilePhotosType } from "../Types/types";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO';
const SET_PROFILE_EDITMODE = 'SET_PROFILE_EDITMODE';
const SET_PROFILE_ISFETCHING = 'SET_PROFILE_ISFETCHING';


type InitialStateType = {        
    postsData: PostDataType[],
    profile: UserProfileType | null,
    status: string,
    editMode: boolean,
    isFetching: boolean,
    newPostText: string
}
const initialState: InitialStateType = {        
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: "15"},
        {id: 2, message: "Hello World!!!", likesCount: "13"},
        {id: 3, message: "And hello to you from the World!", likesCount: "99"},
    ],
    profile: null,
    status: '',
    editMode: false,
    isFetching: false,
    newPostText: '',
};

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:                         
            const newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: "0"
            };
            // !!! move to thunk in future !!!
            setTimeout(() => {                    
                action.setSubmitting(false);
                action.resetForm();
            }, 400);
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }; 
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile,
            };      
        case SET_PROFILE_STATUS:             
            return {
                ...state,
                status: action.status,
            };      
        case SET_PROFILE_PHOTO:             
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                } as UserProfileType
            };      
        case SET_PROFILE_EDITMODE:             
            return {
                ...state,
                editMode: action.editMode
            };      
        case SET_PROFILE_ISFETCHING:             
            return {
                ...state,
                isFetching: action.isFetching
            };      
        default:
            return state;
    }    
};

type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText: string,
    setSubmitting: any,
    resetForm: any
}
export const addPost = (newPostText: string, setSubmitting: any, resetForm: any): AddPostActionType => ({
    type: ADD_POST,
    newPostText,
    setSubmitting,
    resetForm
} );

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: UserProfileType
}
export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile
});

type SetProfileStatusActionType = {
    type: typeof SET_PROFILE_STATUS,
    status: string
}
export const setProfileStatus = (status: string): SetProfileStatusActionType => ({
    type: SET_PROFILE_STATUS,
    status
});

type SetProfilePhotoActionTyte = {
    type: typeof SET_PROFILE_PHOTO,
    photos: UserProfilePhotosType
}
export const setProfilePhoto = (photos: UserProfilePhotosType): SetProfilePhotoActionTyte => ({
    type: SET_PROFILE_PHOTO,
    photos
});

type SetEditModeActionType = {
    type: typeof SET_PROFILE_EDITMODE,
    editMode: boolean
}
export const setEditMode = (editMode: boolean): SetEditModeActionType => ({
    type: SET_PROFILE_EDITMODE,
    editMode
});

type SetIsFetchingActionType = {
    type: typeof SET_PROFILE_ISFETCHING,
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
    type: SET_PROFILE_ISFETCHING,
    isFetching
});

export const getProfile = (userId: number) => (dispatch: any) => {    
    profileAPI.getProfileData(userId)
            .then( (data: any) => {                
                dispatch(setUserProfile(data));
            })
            .catch( (err: any) => console.log(err));
}

export const getProfileStatus = (userId: number) => (dispatch: any) => {    
    profileAPI.getProfileStatus(userId)
            .then( (status: any) => {                 
                if (status !== '') {                              
                    dispatch(setProfileStatus(status));
                }
            })
            .catch( (err: any) => console.log(err));
}

export const updateProfileStatus = (status: any) => (dispatch: any) => {        
    profileAPI.setProfileStatus(status)
            .then( (data: any) => {                
                if (data.resultCode === 0) {
                    dispatch(setProfileStatus(status));
                }
            })
            .catch( (err: any) => console.log(err));
}

export const savePhoto = (evt: any) => (dispatch: any) => {
    const photo = evt.target.files[0];
    profileAPI.savePhoto(photo)
            .then( (data: any) => {                
                if (data.resultCode === 0) {
                    dispatch(setProfilePhoto(data.data.photos));
                }
            })
            .catch( (err: any) => console.log(err));
}

export const saveProfileFields = (userId: number, values: any) => (dispatch: any) => {
    dispatch(setIsFetching(true));
    
    profileAPI.saveFields(userId, values)
            .then( (data: any) => {                
                if (data.resultCode === 0) {
                    dispatch(getProfile(userId));
                }
            })
            .catch( (err: any) => console.log(err))
            .finally( () => {
                dispatch(setIsFetching(false));
                dispatch(setEditMode(false));
            });
}

export default profileReducer;