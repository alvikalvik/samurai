import { profileAPI } from "../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

const initialState = {        
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: "15"},
        {id: 2, message: "Hello World!!!", likesCount: "13"},
        {id: 3, message: "And hello to you from the World!", likesCount: "99"},
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:                         
            const newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: "0"
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };      
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.text,
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
        default:
            return state;
    }    
};

export const addPost = () => ( {type: ADD_POST} );
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const setProfileStatus = (status) => ({
    type: SET_PROFILE_STATUS,
    status
});

export const getProfile = (userId) => (dispatch) => {    
    profileAPI.getProfileData(userId)
            .then( data => {                
                dispatch(setUserProfile(data));
            })
            .catch(err => console.log(err));
}

export const getProfileStatus = (userId) => (dispatch) => {    
    profileAPI.getProfileStatus(userId)
            .then( status => {                 
                if (status !== '') {                              
                    dispatch(setProfileStatus(status));
                }
            })
            .catch(err => console.log(err));
}

export const updateProfileStatus = (status) => (dispatch) => {        
    profileAPI.setProfileStatus(status)
            .then( data => {                
                if (data.resultCode === 0) {
                    dispatch(setProfileStatus(status));
                }
            })
            .catch(err => console.log(err));
}

export default profileReducer;