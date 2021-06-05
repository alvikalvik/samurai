const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {        
        case ADD_DIALOG_MESSAGE:                         
            const newMessage = {
                id: 6,
                message: action.newMessageText,                    
            };
            // !!! move to thunk in future !!!
            setTimeout(() => {                    
                action.setSubmitting(false);
                action.resetForm();
            }, 400);
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: '',
            };                
        default:
            return state;
    }    
};

export const addDialogMessage = (newMessageText, setSubmitting,
    resetForm) =>
    ( {
        type: ADD_DIALOG_MESSAGE,
        newMessageText,
        setSubmitting,
        resetForm
    } );


export default dialogsReducer;