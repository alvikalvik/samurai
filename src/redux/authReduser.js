import { authAPI } from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';
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


export default authReducer;