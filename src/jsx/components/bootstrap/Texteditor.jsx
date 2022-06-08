import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

const Texteditor = (props) => {
    const { label, name } = props
    return (
        <div className='form-group' key={name}>
            <label htmlFor={name}>{label}</label>
            <div className="input-group">
                <Field
                    id={name}
                    name={name}
                    render={({ field, form }) => {
                        return (
                            <>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={field.value}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        form.setFieldValue(name, data)
                                    }}

                                    onReady={editor => {
                                        // Insert the toolbar before the editable area.
                                        editor.ui.getEditableElement().parentElement.insertBefore(
                                            editor.ui.view.toolbar.element,
                                            editor.ui.getEditableElement(),
                                        );
                                    }}
                                />
                            </>
                        )
                    }}
                />
                <ErrorMessage component={TextError} name={name} />
            </div>
        </div>
    )
}
export default Texteditor