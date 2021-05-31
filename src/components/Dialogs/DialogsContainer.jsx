import Dialogs from './Dialogs';
import {
    addDialogMessage,
    updateNewDialogMessageText
} from '../../redux/dialogsReduser';
import {connect} from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {    
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

const DialogsWithAuthRedirect = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
    addDialogMessage,
    updateNewDialogMessageText
})(DialogsWithAuthRedirect);

export default DialogsContainer;