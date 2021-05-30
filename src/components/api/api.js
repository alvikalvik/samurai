import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0c893310-d8b0-4dbc-a8b5-cc663939eec1"
    }
});

export const usersAPI = {
    getUsers(usersCountOnPage = 1, currentPage = 10) {
        return instance.get(`users?count=${usersCountOnPage}&page=${currentPage}`)
            .then(response => response.data);
    }
};

export const profileAPI = {
    getProfileData(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    }
        
};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
};

export const followAPI = {
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
};


