import styles from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import {addDialogMessageCreator, updateNewDialogMessageTextCreator} from '../../redux/dialogsReduser';

const {dialogs, dialogsBar, dialogsDivider, dialogsMessages, messagesTitle, dialogsForm, newMessageTextarea, newMessageText, newMessageBtn} = styles;

const Dialogs = ({state, dispatch}) => {    

    const dialogsElements = state.dialogsData
        .map( ({id, name}) => <Dialog name={name} id={id} />);    

    const messagesElements = state.messagesData
        .map( ({id, message}) => <Message message={message} />);

    const addNewMessage = (evt) => {
        evt.preventDefault();
        const action = addDialogMessageCreator();
        dispatch(action);
    };
    const handleTextChange = (evt) => {
        const text = evt.target.value;
        const action = updateNewDialogMessageTextCreator(text);
        dispatch(action);
    };

    return (
        <div className={dialogs}>
            <div className={dialogsBar}>
                {dialogsElements}
            </div>
            <div className={dialogsDivider}></div>
            <div className={dialogsMessages}>
                <h3 className={messagesTitle}>Messages</h3>
                {messagesElements} 

                <h3 className={messagesTitle}>Add message</h3>
                <form className={dialogsForm} onSubmit={addNewMessage}>
                    <textarea
                        name="newmessage"
                        id="newmessage"
                        className={newMessageTextarea}
                        placeholder="Write new message here"                    
                        value={state.newMessageText}
                        onChange={handleTextChange}
                    />

                    <button                    
                        className={newMessageBtn}
                    >
                        Add message
                    </button>
                </form>                             
            </div>            
        </div>
    );
}

export default Dialogs;