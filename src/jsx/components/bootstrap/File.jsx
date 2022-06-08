import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const File = (props) => {
    const { label, name, defaultValue, source, disabled, ...rest } = props

    const imageHandlerFile = (names, form) => {
        const preview = document.getElementById('img-' + names);
        const file = document.querySelector('input[name=base-' + names + ']').files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            preview.src = reader.result;
            form.setFieldValue(names, preview.src)
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className='form-group mb-5' key={name}>
            <label htmlFor={name}>{label}</label>
            <div className='custom-file'>
                <Field name={name} {...rest}>
                    {({ field, form }) => {
                        return (
                            <React.Fragment>
                                {!disabled &&
                                    <>
                                        <input
                                            id={field.name}
                                            type="text"
                                            className="form-control"
                                            {...field}
                                            {...rest}
                                            hidden
                                        />
                                        <input
                                            type="file"
                                            className="form-control custom-file-input"
                                            id={`val-${field.name}`}
                                            name={`base-${field.name}`}
                                            accept="image/*"
                                            capture="camera"
                                            onChange={() => {
                                                imageHandlerFile(field.name, form)
                                            }}
                                        />
                                        <label className='custom-file-label'>Choose file</label>
                                    </>
                                }
                                <img id={`img-${field.name}`} className="img-fluid pb-5" width={150} alt="" src={source} />

                            </React.Fragment>
                        );
                    }}
                </Field>
                <ErrorMessage component={TextError} name={name} />
            </div>

        </div>
    )
}

export default File

