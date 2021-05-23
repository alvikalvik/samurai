import Dialogs from './Dialogs';
import {
    addDialogMessage,
    updateNewDialogMessageText
} from '../../redux/dialogsReduser';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {    
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

const DialogsContainer = connect(mapStateToProps, {
    addDialogMessage,
    updateNewDialogMessageText
})(Dialogs);

export default DialogsContainer;