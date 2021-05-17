import Dialogs from './Dialogs';
import {addDialogMessageCreator, updateNewDialogMessageTextCreator} from '../../redux/dialogsReduser';

const DialogsContainer = (props) => {    

    const dialogsData = props.store.getState().dialogsPage.dialogsData;    

    const messagesData = props.store.getState().dialogsPage.messagesData;

    const newMessageText = props.store.getState().dialogsPage.newMessageText;

    const addNewMessage = () => {       
        const action = addDialogMessageCreator();
        props.store.dispatch(action);
    };
    const updateNewDialogMessage = (text) => {        
        const action = updateNewDialogMessageTextCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs
            dialogsData={dialogsData}
            messagesData={messagesData}
            newMessageText={newMessageText}
            addNewMessage={addNewMessage}
            updateNewDialogMessage={updateNewDialogMessage}
        />
    );
}

export default DialogsContainer;