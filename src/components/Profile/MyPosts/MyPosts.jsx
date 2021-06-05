import React from 'react';
import {myPosts, myPostsTitle, myPostsForm, newPostTextarea, newPostBtn} from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const MyPosts = (props) => {  

    let postsElements = props.postsData
        .map( ({id, message, likesCount}) =>
            <Post key={id} message={message} likesCount={likesCount} />);

    return (
        <div className={myPosts}>
            <h3 className={myPostsTitle}>My posts</h3>
            <Formik
                initialValues={{ newpost: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.newpost) {
                    errors.newpost = 'Required';
                    } 
                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    props.addPost(values.newpost, setSubmitting, resetForm);                    
                    // setTimeout(() => {                    
                    //     setSubmitting(false);
                    // }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={myPostsForm}>
                        <Field
                            component="textarea"
                            name="newpost"
                            id="newpost"
                            className={newPostTextarea}
                            placeholder="Write new message here"
                        />
                        <ErrorMessage
                            name="newpost"
                            component="div"
                        />                    
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={newPostBtn}
                        >
                            Add post
                        </button>
                    </Form>
                )}
            </Formik>
            <div>
                {postsElements}                              
            </div>
        </div>     
    );
}

export default MyPosts;