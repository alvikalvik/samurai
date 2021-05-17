const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {        
        case ADD_DIALOG_MESSAGE: {
            const newState = JSON.parse(JSON.stringify(state));
            const newMessage = {
                id: 6,
                message: state.newMessageText,                    
            };
            newState.messagesData.push(newMessage);
            newState.newMessageText = '';
            return newState;
        }            
        case UPDATE_NEW_MESSAGE_TEXT: {
            const newState = JSON.parse(JSON.stringify(state));
            newState.newMessageText = action.text;            
            return newState;
        }            
        default:
            return state;
    }    
};

export const addDialogMessageCreator = () =>
    ( {type: ADD_DIALOG_MESSAGE} );
export const updateNewDialogMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});

export default dialogsReducer;