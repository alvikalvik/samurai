export const getUsers = (state) => {
    return state.usersPage.users
}

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
