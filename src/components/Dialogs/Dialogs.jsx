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
    return (
        <div className={dialogs}>
            <div className={dialogsBar}>
                <Dialog name="User1" id = "1" />
                <Dialog name="User2" id = "2" />
                <Dialog name="User3" id = "3" />
                <Dialog name="User4" id = "4" />
                <Dialog name="User5" id = "5" />               
                
            </div>
            <div className={dialogsDivider}></div>
            <div className={dialogsMessages}>
                <Message message="Lorem, ipsum dolor."/>
                <Message message="Lorem, ipsum."/>
                <Message message="Lorem ipsum dolor sit, amet consectetur adipisicing."/>
                <Message message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error?"/>                
            </div>
        </div>
    );
}

export default Dialogs;