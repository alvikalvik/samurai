import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0c893310-d8b0-4dbc-a8b5-cc663939eec1"
    }
});

export const usersAPI = {
    requestUsers(usersCountOnPage = 1, currentPage = 10) {
        return instance.get(`users?count=${usersCountOnPage}&page=${currentPage}`)
            .then(response => response.data);
    }
};

export const profileAPI = {
    getProfileData(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getProfileStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data);
    },
    setProfileStatus(status) {
        return instance.put(`/profile/status`, { status })
            .then(response => response.data);
    },
    savePhoto(photo) {        
        let formData = new FormData();
        formData.append(`image`, photo);
        return instance.put(`/profile/photo`, formData)
            .then(response => {                
                return response.data
            });
    },
        
};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        })
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    },
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


