import { createSelector } from "reselect"

export const getUsersSimpleSelector = (state) => {
    return state.usersPage.users
}

// Test of reselect
// !!! Change in future !!!
export const getUsers =
    createSelector(getUsersSimpleSelector, (users) => {
        return users.filter( u => true); // fake users modifying
    });

export const getUsersCountOnPage = (state) => {
    return state.usersPage.usersCountOnPage
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
