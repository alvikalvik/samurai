const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
    _state: {
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
            newMessageText: '',       
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
    },

    getState() {
        return this._state;
    },

    _doSubscriberAction() {
        console.log(this._state);
    },

    subscribe(observer) {
        this._doSubscriberAction = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: 4,
                    message: this._state.profilePage.newPostText,
                    likesCount: "0"
                };
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._doSubscriberAction(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.text;
                this._doSubscriberAction(this._state);
                break;
            case ADD_DIALOG_MESSAGE:
                debugger;
                const newMessage = {
                    id: 6,
                    message: this._state.dialogsPage.newMessageText,                    
                };
                this._state.dialogsPage.messagesData.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._doSubscriberAction(this._state);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.text;
                this._doSubscriberAction(this._state);
                break;
            default:
                console.log(`Sorry, No appropriate action type for dispatch`);
          }
    },    
};

export const addPostActionCreator = () => ( {type: ADD_POST} );
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});

export const addDialogMessageCreator = () =>
    ( {type: ADD_DIALOG_MESSAGE} );
export const updateNewDialogMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});


export default store;
window.store = store;