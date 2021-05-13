import {NavLink} from 'react-router-dom';
import styles from './Dialogs.module.css';

const {dialogs, dialogsBar, dialogsDivider, dialogsMessages, dialog, dialogActive, messageClass} = styles;

const Dialog = ({name, id}) => {
    return (
        <div className={dialog + ' ' + dialogActive}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

const Message = ({message}) => {
    return (
        <div className={messageClass}>{message}</div>
    );
};

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