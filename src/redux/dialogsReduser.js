const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReduser = (state, action) => {
    switch (action.type) {        
        case ADD_DIALOG_MESSAGE:
            const newMessage = {
                id: 6,
                message: state.newMessageText,                    
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;            
            return state;
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

export default dialogsReduser;