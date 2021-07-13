import { authAPI, securityAPI } from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
const SET_ISFETCHING = 'SET_ISFETCHING';
const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {        
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAutorized: false,
    isFetching: false,
    loginErrorMessage: '',
    captchaUrl: null as string | null,
};

type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
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
                isFetching: false,
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

type UserDataType = {
    id: number
    email: string   
    login: string
    password?: string
    rememberMe?: boolean
    isAutorized?: boolean
}
type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: UserDataType
}
export const setUserData = (data: UserDataType): SetUserDataActionType => ( {
    type: SET_USER_DATA,
    data
} );

type ClearUserDataActionType = {
    type: typeof CLEAR_USER_DATA
}
export const clearUserData = (): ClearUserDataActionType => ( {
    type: CLEAR_USER_DATA,    
} );

type SetIsFetchingActionType = {
    type: typeof SET_ISFETCHING,
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
    type: SET_ISFETCHING,
    isFetching
});

type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL,
    captchaUrl: string | null
}
export const setCaptchaUrl = (captchaUrl: string | null): SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
});

type SetLoginErrorMessageActionType = {
    type: typeof SET_LOGIN_ERROR_MESSAGE,
    loginErrorMessage: string
}
export const setLoginErrorMessage = (loginErrorMessage: string): SetLoginErrorMessageActionType => ({
    type: SET_LOGIN_ERROR_MESSAGE,
    loginErrorMessage
});

export const checkAuthMe = () => (dispatch: any) => {    
    dispatch(setIsFetching(true));
    return authAPI.authMe()
        .then( (data: any) => {    
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data));                
            }             
        })
        .catch( (err: any) => console.log(err))
        .finally( () => {
            dispatch(setIsFetching(false));
        });
    
}

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
) => (dispatch: any) => {        
    dispatch(setIsFetching(true));    
    authAPI.login(email, password, rememberMe, captcha)
        .then( (data: any) => {    
            if (data.resultCode === 0) {
                dispatch(setUserData({
                    email,
                    password,
                    rememberMe,
                    id: data.data.userId,
                    isAutorized: true,                    
                } as UserDataType));
                dispatch(setLoginErrorMessage(''));
            } else {   
                if (data.resultCode === 10) {
                    securityAPI.getCaptchaUrl()
                        .then( (data: any) => {
                            dispatch(setCaptchaUrl(data.url));
                        })
                        .catch( (err: any) => console.log(err))
                }             
                dispatch(setLoginErrorMessage(data.messages[0]));
            }              
        })
        .catch( (err: any) => console.log(err))
        .finally( () => {
            dispatch(setIsFetching(false));            
        });
}

export const logout = () => (dispatch: any) => {            
    dispatch(setIsFetching(true));    
    authAPI.logout()
        .then( (data: any) => {    
            if (data.resultCode === 0) {
                dispatch(clearUserData());
                dispatch(setLoginErrorMessage(''));
            } else {                
                dispatch(setLoginErrorMessage(data.messages[0]));
                alert(`Sorry, Logout is unsuccessful. Error message: ${data.messages[0] || 'Unknown error'}.  Please write us about this to email: suppurt@us.com`);
            }              
        })
        .catch( (err: any) => console.log(err))
        .finally( () => {
            dispatch(setIsFetching(false));            
        });
}


export default authReducer;