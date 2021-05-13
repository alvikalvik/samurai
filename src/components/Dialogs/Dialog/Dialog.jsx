import styles from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const {dialog, dialogActive} = styles;

const Dialog = ({name, id}) => {
    return (
        <div className={dialog + ' ' + dialogActive}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

export default Dialog;