import styles from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
                <Formik
                    initialValues={{ newmessage: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.newmessage) {
                        errors.newmessage = 'Required';
                        } 
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {                        
                        props.addDialogMessage(values.newmessage, setSubmitting, resetForm);                    
                        // setTimeout(() => {                    
                        //     setSubmitting(false);
                        // }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={dialogsForm}>
                            <Field
                                component="textarea"
                                name="newmessage"
                                id="newmessage"
                                className={newMessageTextarea}
                                placeholder="Write new message here"
                            />
                            <ErrorMessage
                                name="newmessage"
                                component="div"
                            />                    
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={newMessageBtn}
                            >
                                Add message
                            </button>
                        </Form>
                    )}
                </Formik>                                            
            </div>            
        </div>
    );
}

export default Dialogs;