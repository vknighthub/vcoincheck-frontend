import React from 'react'
import DatePicker from '../../bootstrap/DatePicker';
import File from '../../bootstrap/File';
import InputText from '../../bootstrap/InputText';
import RadioButtonHorizontal from '../../bootstrap/RadioButtonHorizontal'
import RadioButtonVertical from '../../bootstrap/RadioButtonVertical'
import Select from '../../bootstrap/Select';
import Texteditor from '../../bootstrap/Texteditor';
import Textarea from './../../bootstrap/Textarea';

const FormikControl = (props) => {
    const { control, type, styles, ...rest } = props
    switch (control) {
        case 'input':
            switch (type) {
                case 'text':
                    return <InputText {...rest} />
                case 'date':
                    return <DatePicker {...rest} />
                case 'textarea':
                    return <Textarea {...rest} />
                case 'texteditor': 
                    return <Texteditor {...rest} />
                default:
                    return null
            }
        case 'radio':
            switch (styles) {
                case 'horizontal':
                    return <RadioButtonHorizontal {...rest} />
                case 'vertical':
                    return <RadioButtonVertical {...rest} />
                default:
                    return null;
            }
        case 'select':
            return <Select {...rest} />
        case 'file':
            return <File {...rest} />
        default:
            return null;
    }
}

export default FormikControl