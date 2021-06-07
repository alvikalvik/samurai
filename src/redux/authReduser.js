import { authAPI } from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
const SET_ISFETCHING = 'SET_ISFETCHING';

const initialState = {        
    id: null,
    login: null,
    email: null,
    isAutorized: false,
    isFetching: false
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

export const checkAuthMe = () => (dispatch) => {    
    dispatch(setIsFetching(true));
    authAPI.authMe()
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
) => (dispatch) => {        
    dispatch(setIsFetching(true));    
    authAPI.login(email, password, rememberMe)
        .then( data => {    
            if (data.resultCode === 0) {
                dispatch(setUserData({
                    email,
                    password,
                    rememberMe,
                    id: data.data.userId,
                    isAutorized: true,                    
                }));
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
            }              
        })
        .catch(err => console.log(err))
        .finally( () => {
            dispatch(setIsFetching(false));            
        });
}


export default authReducer;