import { ErrorMessage, Field } from 'formik';
import React from 'react';
import GetContentLanguage from '../../../utils/GetContentLanguage';
import TextError from './TextError'

const RadioButtonHorizontal = (props) => {
    const { label, name, options, answer, language, ...rest } = props;

    return (
        <div className="form-group" key={name}>
            <label>{label}</label>
            <div className="form-control-input" >
                <Field name={name} {...rest}>
                    {({ field }) => {
                        return options.map((option, index) => {
                            var key = GetContentLanguage(language, option.key)
                            return (
                                <React.Fragment key={index}>
                                    <label className='radio-inline mr-3'>
                                        <input
                                            className='mr-1'
                                            type='radio'
                                            id={option.value}
                                            {...field}
                                            {...rest}
                                            value={option.value}
                                            checked={field.value === option.value || answer === option.value ? true : false}
                                        />
                                        <label className='ml-1' htmlFor={option.value}>{key}</label>
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