import { Editor } from "@tinymce/tinymce-react";
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

const Texteditor = (props) => {
    const { label, name, contents, ...rest } = props
    return (
        <div className='form-group' key={name}>
            <label htmlFor={name}>{label}</label>
            <div className="summernote">
                <Field
                    id={name}
                    name={name}
                    render={({ form }) => {
                        return (
                            <>
                                <Editor
                                    init={{
                                        height: 500,
                                        menubar: true,
                                        plugins: [
                                            "advlist autolink lists link image code charmap print preview anchor",
                                            "searchreplace visualblocks code fullscreen",
                                            "insertdatetime media table paste code help wordcount",
                                        ],
                                        toolbar:
                                            "undo redo | formatselect | code |link | image | bold italic backcolor | alignleft aligncenter alignright alignjustify |  \n" +
                                            "bullist numlist outdent indent | removeformat | help ",
                                        content_style: 'body { color: #7e7e7e }'
                                    }}
                                    onEditorChange={(content) => {
                                        form.setFieldValue(name, content)
                                    }}
                                    initialValue={contents}
                                    name={name}
                                    {...rest}
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