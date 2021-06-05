import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememerMe: false
            }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                        />
                    </div>
                    <div>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                        />
                    </div>   
                    <div>
                        <label>
                            <Field
                                type="checkbox"
                                name="rememerMe"                        
                            />
                            Remember me
                        </label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Login
                        </button>
                    </div>    
                </Form>
            )}
        </Formik>
    </div>
);

export default Login;