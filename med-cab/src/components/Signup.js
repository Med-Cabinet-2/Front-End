import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import { withFormik, Form, Field, yupToFormErrors } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth"

import { Link } from 'react-router-dom';
import { T } from '../App'



//Frances Hansen
const Signup = ({ touched, errors, canRedirect, setCanRedirect }) => {

  if (canRedirect) { return <Redirect to="/dashboard" /> }

  return (
    <T.Up>
      <T.H1>Sign Up</T.H1>
      <Form>
        <label>
          Username:
           <Field type='text' name='username' placeholder='Username' />
          {touched.username && errors.username && (
            <p>{errors.username}</p>
          )}
        </label>

        <label>
          Email:
             <Field type='email' name='email' placeholder='Email' />
          {touched.email && errors.email && (
            <p>{errors.email}</p>
          )}
        </label>

        <label>
          Password:
             <Field type='password' name='password' placeholder='Password' />
        </label>

        <label className='TOS'>
          TOS
              <Field
            type="checkbox"
            name="TOS"

          />
          {touched.TOS && errors.TOS && (
            <p>{errors.TOS}</p>
          )}
        </label>

        <button>Register</button>

        <p>Already have an account? <Link to='/'>Click here</Link> to sign in!</p>

      </Form>
    </T.Up>
  )

}

export default withFormik({
  mapPropsToValues: props => ({
    username: props.username || '',
    email: props.email || '',
    password: props.password || '',
    TOS: false,
    setCanRedirect: props.setCanRedirect
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().min(3).required('Please provide a valid username'),
    email: Yup.string().email().required('Please provide a valid e-mail address'),
    TOS: Yup.bool().oneOf([true], "Must agree to TOS")
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    let setCanRedirect = values.setCanRedirect
    console.log(values);
    let pushObject = {
      username: values.username,
      email: values.email,
      password: values.password
    }
    axiosWithAuth()
      .post('/api/users/register', pushObject)
      .then(res => {
        window.localStorage.setItem('token', res.data.token);
        // navigate the user to ed1t (whatever landing page)
        setStatus(res)
        resetForm()
        setCanRedirect(true)

      })
      .catch(err => console.log(err));


    // axios
    //   .post('', values)
    //   .then(res => {
    //     console.log('SUCCESS!', res);
    //     setStatus(res);
    //     resetForm();

    //   })
    //   .catch(err => console.log(`ERROR: ${err}`))
  }


})(Signup);
