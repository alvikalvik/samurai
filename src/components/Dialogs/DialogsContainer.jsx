import Dialogs from './Dialogs';
import {
    addDialogMessage
} from '../../redux/dialogsReduser';
import {connect} from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {    
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

export default compose(
    connect(mapStateToProps, {
        addDialogMessage
    }),
    withAuthRedirect
)(Dialogs);