import { ErrorMessage, Field } from 'formik'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TextError from './TextError'

const DatePicker = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className='form-group' key={name}>
            <label htmlFor={name}>{label}</label>
            <div className="input-group">
                <Field name={name} {...rest}>
                    {({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (
                            <DateView
                                id={name}
                                {...field}
                                {...rest}
                                showTimeSelect
                                dateFormat="dd/MM/yyyy HH:mm:ss"
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                            />
                        )
                    }}
                </Field>
                <ErrorMessage component={TextError} name={name} />
            </div>
        </div>
    )
}

export default DatePicker