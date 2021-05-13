import styles from './Message.module.css';

const {messageClass} = styles;

const Message = ({message}) => {
    return (
        <div className={messageClass}>{message}</div>
    );
};

export default Message;