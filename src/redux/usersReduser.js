const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

const initialState = {        
    users: [],    
    usersCountOnPage: 100,
    currentPage: 1,
    totalCount: 0
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( u => {
                    return u.id === action.userId
                        ? {...u, isFollowed: true}
                        : u;
                })
            };
        case UNFOLLOW: 
        return {
                ...state,
                users: state.users.map( u => {
                    return u.id === action.userId
                        ? {...u, isFollowed: false}
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
        default:
            return state;
    }    
};

export const followAC = (userId) => ( {
    type: FOLLOW,
    userId
} );
export const unfollowAC = (userId) => ( {
    type: UNFOLLOW,
    userId
} );
export const setUsersAC = (data) => ({
    type: SET_USERS,
    data
});
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export default usersReducer;