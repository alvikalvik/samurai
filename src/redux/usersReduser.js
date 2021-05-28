const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_ISFETCHING = 'SET_ISFETCHING';

const initialState = {        
    users: [],    
    usersCountOnPage: 100,
    currentPage: 1,
    totalCount: 0,
    isFetching: false
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
        case SET_ISFETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            };      
        default:
            return state;
    }    
};

export const follow = (userId) => ( {
    type: FOLLOW,
    userId
} );
export const unfollow = (userId) => ( {
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
    type: SET_ISFETCHING,
    isFetching
});

export default usersReducer;