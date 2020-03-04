import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

import data from '../PrefData';

// Jana Scheuble

function Preferences(props) {
    return(
        <div className='preferences'>
        <h1>What can we help you with?</h1>
        <Form onSubmit={props.handleSubmit}>
            <label>I would like to improve my
                <Field component='select' name='effect' value={props.values.effect}>
                    <option>Please Choose One</option>
                    {data.effects.map((e, i) => {
                        return <option key={i} value={e} label={e} />
                    })}
                </Field>
            </label>
            <label>I would like to treat my 
                <Field component='select' name='condition' value={props.values.condition}>
                    <option>Please Choose One</option>
                    {data.conditions.map((e, i) => {
                        return <option key={i} value={e} label={e}/>
                    })}
                </Field>
            </label>
            <label>Other
                <Field type='text' name='other' placeholder='search by symptom' />
            </label>
            <button type='submit'>Continue</button>
        </Form>
        </div>
    );
}

const FormikPreferences = withFormik({
    mapPropsToValues({ effect, condition }) {
        return {
            effect: effect || false,
            condition: condition || false,
            other: ''
        };
    },
    validationSchema: Yup.object().shape({
        effect: Yup.boolean(),
        condition: Yup.boolean(),
        other: Yup.string().matches(/^[a-z]+$/)
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
})(Preferences);

export default FormikPreferences;