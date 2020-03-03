import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// Jana Scheuble

function Signin(props) {
    return(
        <div className='signin'>
        <h1>Sign in</h1>
        <Form>
            <label>Email: 
                <Field type='text' name='email' placeholder='Email Address' onChange={props.handleChange} value={props.values.email} />
            </label>
            {props.touched.email && props.errors.email && (<p className='errrors'>{props.errors.email}</p>)}
            <label>Password:
                <Field type='password' name='password' placeholder='Password' onChange={props.handleChange} value={props.values.password} />
            </label>
            {props.touched.password && props.errors.password && (<p className='errors'>{props.errors.password}</p>)}
            <button type='submit'>Sign in</button>
        </Form>
        <p>Don't have an account? <Link to='/signup'>Register here</Link></p>
        </div>
    );
}

const FormikSignIn = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || '',
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required('Please provide a valid e-mail address'),
        password: Yup.string().min(8).required('Password must exceed 8 characters')
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        console.log(values);
        Axios.post('', values)
        .then(res => {
            console.log('success', res);
            setStatus(res);
            resetForm();
        })
        .catch(err => console.log(err));
    }
})(Signin);

export default FormikSignIn;