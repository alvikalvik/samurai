const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {        
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: "15"},
        {id: 2, message: "Hello World!!!", likesCount: "13"},
        {id: 3, message: "And hello to you from the World!", likesCount: "99"},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:                         
            const newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: "0"
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };      
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.text,
            };      
        default:
            return state;
    }    
};

export const addPost = () => ( {type: ADD_POST} );
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});

export default profileReducer;