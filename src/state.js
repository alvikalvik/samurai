let rerenderEntireTree = () => {
    console.log(state);
};

const state = {
    profilePage: {        
        postsData: [
            {id: 1, message: "Hi, how are you?", likesCount: "15"},
            {id: 2, message: "Hello World!!!", likesCount: "13"},
            {id: 3, message: "And hello to you from the World!", likesCount: "99"},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "User1"},
            {id: 2, name: "User2"},
            {id: 3, name: "User3"},
            {id: 4, name: "User4"},
            {id: 5, name: "User5"},
        ],
        messagesData: [
            {id: 1, message: "1Lorem, ipsum dolor."},
            {id: 2, message: "2Lorem, ipsum."},
            {id: 3, message: "3Lorem ipsum dolor sit, amet consectetur adipisicing."},
            {id: 4, message: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Error?"},
        ],        
    },
    navbar: {
        friends: [
            {id: 1, name: "Friend1", img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"},
            {id: 2, name: "Friend2", img: "https://eyeandfaceclinic.ie/wp-content/uploads/2018/01/beautiful-face-clear-skin.jpg"},
            {id: 3, name: "Friend3", img: "https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg"},
            {id: 4, name: "Friend4", img: "https://www.topdoctors.co.uk/files/Image/large/9d5dbb894ed1236a95d634bb60e5c570.jpg"},
            {id: 5, name: "Friend5", img: "https://cdn.cliqueinc.com/posts/278702/best-face-moisturizers-278702-1553206520079-main.700x0c.jpg"},
        ],
    }
};

export const addPost = () => {    
    const newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: "0"
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (text) => {        
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
};

export let subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;