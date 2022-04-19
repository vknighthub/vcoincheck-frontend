import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError'

const RadioButtonHorizontal = (props) => {
    const { label, name, options, answer, ...rest } = props;
    
    return (
        <div className="form-group" key={name}>
            <label>{label}</label>
            <div className="form-control-input" >
                <Field name={name} {...rest}>
                    {({ field }) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <label className='radio-inline mr-3'>
                                        <input
                                            className='mr-1'
                                            type='radio'
                                            id={option.value}
                                            {...field}
                                            {...rest}
                                            value={option.value}
                                            checked={field.value === option.value || answer === option.value  ? true : false}
                                            />
                                        <label htmlFor={option.value}>{option.key}</label>
                                    </label>
                                </React.Fragment>
                            );
                        });
                    }}
                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    )
}

export default RadioButtonHorizontal