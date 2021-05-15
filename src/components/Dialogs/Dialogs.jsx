import styles from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';

const {dialogs, dialogsBar, dialogsDivider, dialogsMessages} = styles;

const Dialogs = ({state}) => {    

    const dialogsElements = state.dialogsData
        .map( ({id, name}) => <Dialog name={name} id={id} />);    

    const messagesElements = state.messagesData
        .map( ({id, message}) => <Message message={message} />);

    return (
        <div className={dialogs}>
            <div className={dialogsBar}>
                {dialogsElements}
            </div>
            <div className={dialogsDivider}></div>
            <div className={dialogsMessages}>
                {messagesElements}                               
            </div>
        </div>
    );
}

export default Dialogs;