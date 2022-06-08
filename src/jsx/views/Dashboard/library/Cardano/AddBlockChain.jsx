import { Formik } from "formik";
import * as Yup from "yup";
import { addReviewAction, loadingToggleAction } from '../../../../../store/actions/ReviewAction';
import { useDispatch, connect } from 'react-redux';
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { UserDetails } from "../../../../../store/selectors/AuthSelectors";
import { withTranslation, useTranslation } from 'react-i18next';

const overviewSchema = Yup.object().shape({
    title: Yup.string()
        .required("Please enter a title"),
    introduction: Yup.string()
        .required("Please enter a brief introduction"),
    illustration: Yup.string()
        .required("Please enter a type of illustration"),
    content: Yup.string()
        .required("Please enter a content"),
});

const AddBlockChain = (props) => {

    const [content, setContent] = useState('');
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        const postData = {
            title: props.title,
            name: '',
            projectid: props.projectid,
            reviewid: "",
            reviewtype: props.reviewtype,
            reviewdata: values,
            username: props.username
        }
        dispatch(loadingToggleAction(true));
        dispatch(addReviewAction(postData, props.action));
    }

    return (
        <div className="pt-3">
            <div className="settings-form">
                <Formik
                    initialValues={{
                        title: "",
                        introduction: "",
                        illustration: "",
                        content: "",
                    }}
                    validationSchema={overviewSchema}
                    onSubmit={(values,) => { onSubmit(values) }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-primary pb-5 text-center">{t('addblockchaintitle')}</h2>
                            <div
                                className={`form-group ${values.title
                                    ? errors.title
                                        ? "is-invalid"
                                        : "is-valid"
                                    : ""
                                    }`}
                            >
                                <label>{t('title')}</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="val-title"
                                        placeholder={t('title')}
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                    />
                                    <div
                                        id="val-title-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    >
                                        {errors.title && errors.title}
                                    </div>

                                    <div
                                        id="val-title-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    />
                                </div>
                            </div>

                            <div
                                className={`form-group ${values.ecosystem
                                    ? errors.ecosystem
                                        ? "is-invalid"
                                        : "is-valid"
                                    : ""
                                    }`}
                            >
                                <label>{t('briefintro')}</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="val-introduction"
                                        placeholder={t('ecosystem')}
                                        name="introduction"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.introduction}
                                    />
                                    <div
                                        id="val-introduction-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    >
                                        {errors.introduction && errors.introduction}
                                    </div>

                                    <div
                                        id="val-introduction-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    />
                                </div>
                            </div>

                            <div
                                className={`form-group ${values.illustration
                                    ? errors.illustration
                                        ? "is-invalid"
                                        : "is-valid"
                                    : ""
                                    }`}
                            >
                                <label>{t('illustration')}</label>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="form-control custom-file-input"
                                        id="val-illustration"
                                        name="illustration"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.illustration}
                                    />
                                    <label className='custom-file-label'>{t('choosefile')}</label>
                                    <div
                                        id="val-illustration-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    >
                                        {errors.illustration && errors.illustration}
                                    </div>

                                    <div
                                        id="val-illustration-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    />
                                </div>
                            </div>

                            <div
                                className={`form-group ${values.content
                                    ? errors.content
                                        ? "is-invalid"
                                        : "is-valid"
                                    : ""
                                    }`}
                            >
                                <label>{t('content')}</label>
                                <div className="summernote">
                                    <Editor
                                        initialValue="<p>This is the initial content of the editor</p>"
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
                                        onEditorChange={(content) => setContent(content)}
                                        content={content}
                                        disabled={false}
                                        name="content"
                                    />
                                    <div
                                        id="val-content-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    >
                                        {errors.content && errors.content}
                                    </div>

                                    <div
                                        id="val-content-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    />
                                </div>
                            </div>

                            <button className="btn btn-primary" type="submit">{t('submit')}</button>
                            <br />
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        reviewresponses: state.reviewresponses,
        users : UserDetails(state)
    }
}

export default withTranslation()(connect(mapStateToProps, null)(AddBlockChain))