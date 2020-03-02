import React, {useState, useEffect} from "react";
import { withFormik, Form, Field, yupToFormErrors} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {T} from '../App'


//Frances Hansen
const Signup = ({touched, errors}) => {

     return (
       <div className='signup'>
         <T.H1>Sign Up</T.H1>
         <Form>
           <label>
             Username:
           <Field type='text' name='username' placeholder='Username'/>
             {touched.username && errors.username && (
               <p>{errors.username}</p>
             )}
             </label>

             <label>
               Email:
             <Field type='email' name='emailaddress' placeholder='Email'/>
             {touched.emailaddress && errors.emailaddress && (
               <p>{errors.emailaddress}</p>
             )}
             </label>

             <label>
               Password:
             <Field type='text' name='pw' placeholder='Password'/>
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

         </Form>
       </div>
     )

}

export default withFormik({
  mapPropsToValues: props => ({
      username: props.username || '',
      emailaddress: props.emailaddress || '',
      pw: props.pw || '',
      TOS: false,
    }),
    validationSchema: Yup.object().shape({
      username: Yup.string().min(3).required('Please provide a valid username'),
      emailaddress: Yup.string().email().required('Please provide a valid e-mail address'),
      TOS: Yup.bool().oneOf([true], "Must agree to TOS")
    }),
    handleSubmit: (values, {resetForm, setStatus }) => {
      axios
      .post('', values)
      .then(res => {
        console.log('SUCCESS!', res);
        setStatus(res);
        resetForm();

      })
      .catch(err => console.log(`ERROR: ${err}`))
    }
      

})(Signup);