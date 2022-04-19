import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const InputText = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className='form-group' key={name}>
            <label htmlFor={name}>{label}</label>
            <div className='input-group'>
                <Field id={name} name={name} {...rest} />
                <ErrorMessage component={TextError} name={name} />
            </div>
        </div>
    )
}

export default InputText