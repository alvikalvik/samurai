import { authAPI, securityAPI } from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
const SET_ISFETCHING = 'SET_ISFETCHING';
const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {        
    id: null,
    login: null,
    email: null,
    isAutorized: false,
    isFetching: false,
    loginErrorMessage: '',
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:             
            return {
                ...state,
                ...action.data,
                isAutorized: true
            };        
        case CLEAR_USER_DATA:             
            return { 
                ...state,               
                id: null,
                login: null,
                email: null,
                isAutorized: false,
                isFetching: false
            };        
        case SET_ISFETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            };      
        case SET_LOGIN_ERROR_MESSAGE: 
            return {
                ...state,
                loginErrorMessage: action.loginErrorMessage
            };
        case SET_CAPTCHA_URL: 
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };      
        default:
            return state;
    }    
};

export const setUserData = (data) => ( {
    type: SET_USER_DATA,
    data
} );

export const clearUserData = () => ( {
    type: CLEAR_USER_DATA,    
} );

export const setIsFetching = (isFetching) => ({
    type: SET_ISFETCHING,
    isFetching
});

export const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
});

export const setLoginErrorMessage = (loginErrorMessage) => ({
    type: SET_LOGIN_ERROR_MESSAGE,
    loginErrorMessage
});

export const checkAuthMe = () => (dispatch) => {    
    dispatch(setIsFetching(true));
    return authAPI.authMe()
        .then( data => {    
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data));                
            }             
        })
        .catch(err => console.log(err))
        .finally( () => {
            dispatch(setIsFetching(false));
        });
    
}

export const login = (
    email,
    password,
    rememberMe,
    captcha,
) => (dispatch) => {        
    dispatch(setIsFetching(true));    
    authAPI.login(email, password, rememberMe, captcha)
        .then( data => {    
            if (data.resultCode === 0) {
                dispatch(setUserData({
                    email,
                    password,
                    rememberMe,
                    id: data.data.userId,
                    isAutorized: true,                    
                }));
                dispatch(setLoginErrorMessage(''));
            } else {   
                if (data.resultCode === 10) {
                    securityAPI.getCaptchaUrl()
                        .then(data => {
                            dispatch(setCaptchaUrl(data.url));
                        })
                        .catch(err => console.log(err))
                }             
                dispatch(setLoginErrorMessage(data.messages[0]));
            }              
        })
        .catch(err => console.log(err))
        .finally( () => {
            dispatch(setIsFetching(false));            
        });
}

export const logout = () => (dispatch) => {            
    dispatch(setIsFetching(true));    
    authAPI.logout()
        .then( data => {    
            if (data.resultCode === 0) {
                dispatch(clearUserData());
                dispatch(setLoginErrorMessage(''));
            } else {                
                dispatch(setLoginErrorMessage(data.messages[0]));
                alert(`Sorry, Logout is unsuccessful. Error message: ${data.messages[0] || 'Unknown error'}.  Please write us about this to email: suppurt@us.com`);
            }              
        })
        .catch(err => console.log(err))
        .finally( () => {
            dispatch(setIsFetching(false));            
        });
}


export default authReducer;