import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { Redirect } from "react-router-dom"
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { T } from '../App'

// Jana Scheuble


function Signin(props) {
    console.log(props)

    if (props.canRedirect) { return <Redirect to="/mainpage" /> }

    return (
        <div className=''>
            <T.H1>Sign in</T.H1>
            <T.In>
                <Form style={{ width: '25%' }}>
                    <label>Email:
                <Field type='text' name='email' placeholder='Email Address' onChange={props.handleChange} value={props.values.email} />
                    </label>
                    {props.touched.email && props.errors.email && (<p className='errrors'>{props.errors.email}</p>)}
                    <label>Password:
                <Field type='password' name='password' placeholder='Password' onChange={props.handleChange} value={props.values.password} />
                    </label>
                    {props.touched.password && props.errors.password && (<p className='errrors'>{props.errors.password}</p>)}
                    <button type='submit'>Sign in</button>
                </Form>
                <p>Don't have an account? <Link to='/main'>Register here</Link></p>
            </T.In>
        </div>
    );
}

const FormikSignIn = withFormik({


    mapPropsToValues({ email, password, setCanRedirect }) {
        return {
            email: email || '',
            password: password || '',
            setCanRedirect: setCanRedirect
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required('Please provide a valid e-mail address'),
        password: Yup.string().min(3).required('Password must exceed 3 characters')
    }),
    handleSubmit(values, { setStatus, resetForm }) {

        let setCanRedirect = values.setCanRedirect
        console.log("values from handleSubmit inside SignIn", values);
        axiosWithAuth()
            .post('/api/users/login', values)
            .then(res => {
                console.log("values inside .then", values)
                console.log("sign in response api", res)
                window.localStorage.setItem('token', res.data.token);
                window.localStorage.setItem('id', res.data.user.user_id);
                window.localStorage.setItem('email', values.email);
                window.localStorage.setItem('password', values.password);

                // navigate the user to ed1t (whatever landing page)
                setStatus(res)
                resetForm()
                setCanRedirect(true)
            })
            .catch(err => console.log(err));

        // Axios.post('', values)
        //     .then(res => {
        //         console.log('success', res);
        //         setStatus(res);
        //         resetForm();
        //     })
        //     .catch(err => console.log(err));
    }
})(Signin);

export default FormikSignIn;
