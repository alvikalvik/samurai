import { usersAPI, followAPI } from "../components/api/api";
import { UserType } from "../Types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_ISFETCHING = 'SET_USERS_ISFETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';


type InitialStateType = {        
    users: UserType[],    
    usersCountOnPage: number,
    currentPage: number,
    totalCount: number,
    isFetching: boolean,
    followingInProgress: number[], // array of followed userIds
}
const initialState = {        
    users: [],    
    usersCountOnPage: 100,
    currentPage: 1,
    totalCount: 0,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( (u: UserType) => {
                    return u.id === action.userId
                        ? {...u, followed: true}
                        : u;
                })
            };
        case UNFOLLOW: 
        return {
                ...state,
                users: state.users.map( (u: UserType) => {
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
type FollowSuccessActionType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ( {
    type: FOLLOW,
    userId
} );

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ( {
    type: UNFOLLOW,
    userId
} );

type SetUsersActionType = {
    type: typeof SET_USERS,
    data: any
}
export const setUsers = (data: any): SetUsersActionType => ({
    type: SET_USERS,
    data
});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

type SetIsFetchingActionType = {
    type: typeof SET_USERS_ISFETCHING,
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
    type: SET_USERS_ISFETCHING,
    isFetching
});

type SetFollowingInProgressActionType = {
    type: typeof SET_FOLLOWING_IN_PROGRESS,
    isAddingToArray: boolean,
    userId: number
}
export const setFollowingInProgress = (isAddingToArray: boolean, userId: number): SetFollowingInProgressActionType => ({
    type: SET_FOLLOWING_IN_PROGRESS,
    isAddingToArray,
    userId
});

//ThunkCreators
export const requestUsers = (usersCountOnPage: number, currentPage: number) => (dispatch: any) => {    
    dispatch(setIsFetching(true));
    usersAPI.requestUsers(usersCountOnPage, currentPage)
        .then( (data: any) => {                
            dispatch(setUsers(data));
            dispatch(setCurrentPage(currentPage));            
        })
        .catch( (err: any) => console.log(err))
        .finally( () => {
            dispatch(setIsFetching(false));
        });
}
export const follow = (userId: number) => (dispatch: any) => {
    dispatch(setFollowingInProgress(true, userId));
        followAPI.followUser(userId)        
            .then( (data: any) => { 
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }             
            })
            .catch( (err: any) => console.log(err))
            .finally( () => {
                dispatch(setFollowingInProgress(false, userId));
            });
}
export const unfollow = (userId: number) => (dispatch: any) => {
    dispatch(setFollowingInProgress(true, userId));
        followAPI.unfollowUser(userId)        
            .then( (data: any) => { 
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }             
            })
            .catch( (err: any) => console.log(err))
            .finally( () => {
                dispatch(setFollowingInProgress(false, userId));
            });
}

export default usersReducer;