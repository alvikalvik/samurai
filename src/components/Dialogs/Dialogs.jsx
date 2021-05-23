import styles from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';

const {
    dialogs,
    dialogsBar,
    dialogsDivider,
    dialogsMessages,
    messagesTitle,
    dialogsForm,
    newMessageTextarea,
    newMessageBtn
} = styles;

const Dialogs = (props) => {    

    const dialogsElements = props.dialogsData
        .map( ({id, name}) => <Dialog name={name} id={id} key={id} />);    

    const messagesElements = props.messagesData
        .map( ({id, message}) => <Message message={message} key={id} />);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addDialogMessage();
    };
    const handleTextChange = (evt) => {
        const text = evt.target.value;
        props.updateNewDialogMessageText(text);
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
                <form className={dialogsForm} onSubmit={handleSubmit}>
                    <textarea
                        name="newmessage"
                        id="newmessage"
                        className={newMessageTextarea}
                        placeholder="Write new message here"                    
                        value={props.newMessageText}
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