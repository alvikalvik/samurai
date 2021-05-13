import styles from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';

const {dialogs, dialogsBar, dialogsDivider, dialogsMessages} = styles;

const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: "User1"},
        {id: 2, name: "User2"},
        {id: 3, name: "User3"},
        {id: 4, name: "User4"},
        {id: 5, name: "User5"},
    ];

    const dialogsElements = dialogsData
        .map( ({id, name}) => <Dialog name={name} id={id} />);

    const messagesData = [
        {id: 1, message: "1Lorem, ipsum dolor."},
        {id: 2, message: "2Lorem, ipsum."},
        {id: 3, message: "3Lorem ipsum dolor sit, amet consectetur adipisicing."},
        {id: 4, message: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Error?"},
    ];

    const messagesElements = messagesData
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