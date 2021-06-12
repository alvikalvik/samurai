import { usersAPI, followAPI } from "../components/api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_ISFETCHING = 'SET_USERS_ISFETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

const initialState = {        
    users: [],    
    usersCountOnPage: 100,
    currentPage: 1,
    totalCount: 0,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( u => {
                    return u.id === action.userId
                        ? {...u, followed: true}
                        : u;
                })
            };
        case UNFOLLOW: 
        return {
                ...state,
                users: state.users.map( u => {
                    return u.id === action.userId
                        ? {...u, followed: false}
                        : u;
                })
            };      
        case SET_USERS: 
            return {
                ...state,
                // users: [...state.users, ...action.users],                
                users: action.data.items,
                totalCount: action.data.totalCount               
            };
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage
            };      
        case SET_USERS_ISFETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            };      
        case SET_FOLLOWING_IN_PROGRESS:            
            return {
                ...state,
                followingInProgress: action.isAddingToArray
                    ? [...state.followingInProgress, action.userId ]
                    : state.followingInProgress.filter( item => item !== action.userId)
            };      
        default:
            return state;
    }    
};

//ActionCreators
export const followSuccess = (userId) => ( {
    type: FOLLOW,
    userId
} );
export const unfollowSuccess = (userId) => ( {
    type: UNFOLLOW,
    userId
} );
export const setUsers = (data) => ({
    type: SET_USERS,
    data
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setIsFetching = (isFetching) => ({
    type: SET_USERS_ISFETCHING,
    isFetching
});
export const setFollowingInProgress = (isAddingToArray, userId) => ({
    type: SET_FOLLOWING_IN_PROGRESS,
    isAddingToArray,
    userId
});

//ThunkCreators
export const requestUsers = (usersCountOnPage, currentPage) => (dispatch) => {    
    dispatch(setIsFetching(true));
    usersAPI.requestUsers(usersCountOnPage, currentPage)
        .then( data => {                
            dispatch(setUsers(data));
            dispatch(setCurrentPage(currentPage));            
        })
        .catch(err => console.log(err))
        .finally( () => {
            dispatch(setIsFetching(false));
        });
}
export const follow = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
        followAPI.followUser(userId)        
            .then( data => { 
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }             
            })
            .catch(err => console.log(err))
            .finally( () => {
                dispatch(setFollowingInProgress(false, userId));
            });
}
export const unfollow = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
        followAPI.unfollowUser(userId)        
            .then( data => { 
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }             
            })
            .catch(err => console.log(err))
            .finally( () => {
                dispatch(setFollowingInProgress(false, userId));
            });
}

export default usersReducer;