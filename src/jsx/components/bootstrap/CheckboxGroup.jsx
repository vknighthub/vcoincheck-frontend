import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function CheckboxGroup(props) {
    const { name, options, ...rest } = props
    return (
        <>
            <Field id={name} name={name}>
                {({ field }) => {
                    return options.map((option) => {
                        return (
                            <div className='form-check form-check-inline' key={option.key}>
                                <label className='form-check-label'>
                                    <input
                                        type='checkbox'
                                        {...field}
                                        {...rest}
                                        value={option.value}
                                        className="form-check-input"
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </label>
                            </div>
                        )
                    })
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </>
    )
}

export default CheckboxGroup