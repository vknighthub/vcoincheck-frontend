import { Formik } from "formik";
import { useTranslation, withTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import slug from "slug";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { loadingToggleAction } from '../../../../store/actions/ReviewAction';
import { UserDetails } from "../../../../store/selectors/AuthSelectors";
import GetLanguageofpost from "../../../../utils/GetLanguageofpost";
import FormikControl from "../../../components/Forms/Formik/FormikControl";
import { postLibraryAction } from './../../../../store/actions/LibraryAction';
import listCategory from './MOCK_LIBRARY.json';


const AddLibrary = (props) => {

    const { t } = useTranslation();

    const initialValues = (listField) => {
        let obj = {}
        listField.forEach((controls) => {
            obj[controls.name] = controls.answer
        })
        return obj
    }

    const validationSchema = (listField) => {
        const shape = {};
        listField.forEach((controls) => {
            if (controls.required === 'Y') {
                shape[controls.name] = Yup.string().required(`${t('employeeinforequired')}`)
            }
        })
        return Yup.object().shape(shape);
    }

    const history = useHistory()
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        
        const postData = {
            title: values.title,
            name: slug(values.title, '-'),
            image: values.illustration,
            summary: values.briefintro,
            content: values.content,
            category: values.category,
            username: props.users.username,
            lang: values.languageofpost,
        }
        Swal.fire({
            icon: "question",
            title: `${t('questionsubmit')}`,
            html: `${t('submitapostlibrary')}`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${t('submit')}`,
            cancelButtonText: `${t('cancel')}`,
        }).then((result) => {
            if (result.value) {
                dispatch(loadingToggleAction(true));
                dispatch(postLibraryAction(postData, history, 'blockchain-knowledge'));
            }
        });
    }

    const getListCategory = (list) => {
        const listCategory = [];
        listCategory.push({ "key": `${t('selectcategory')}`, "value": '' })
        list.forEach((key) => {
            const jobject = { "key": key.description, "value": key.librarycd }
            listCategory.push(jobject)
        })
        return listCategory
    }

    const dropdownOptionsCategory = getListCategory(listCategory)
    const dropdownOptionsLanguageofpost = GetLanguageofpost(t)

    const library_field = [
        {
            "name": "languageofpost",
            "label": `${t('languageofpost')}`,
            "control": "select",
            "type": "",
            "styles": "",
            "rows": 1,
            "required": "Y",
            "answer": [],
            "disabled": false,
            "classname": "form-control",
            "options": dropdownOptionsLanguageofpost
        },
        {
            "name": "category",
            "label": `${t('category')}`,
            "control": "select",
            "type": "",
            "styles": "",
            "rows": 1,
            "required": "Y",
            "answer": [],
            "disabled": false,
            "classname": "form-control",
            "options": dropdownOptionsCategory
        },
        {
            "name": "title",
            "label": `${t('title')}`,
            "control": "input",
            "type": "text",
            "styles": "",
            "rows": 1,
            "required": "Y",
            "answer": "",
            "disabled": false,
            "classname": "form-control"
        },
        {
            "name": "briefintro",
            "label": `${t('briefintro')}`,
            "control": "input",
            "type": "textarea",
            "styles": "",
            "rows": 8,
            "required": "Y",
            "answer": "",
            "disabled": false,
            "classname": "form-control"
        },
        {
            "name": "illustration",
            "label": `${t('illustration')}`,
            "control": "file",
            "type": "",
            "styles": "",
            "rows": 1,
            "required": "Y",
            "answer": "",
            "disabled": false,
            "classname": "form-control"
        },
        {
            "name": "content",
            "label": `${t('content')}`,
            "control": "input",
            "type": "texteditor",
            "styles": "",
            "rows": 1,
            "required": "Y",
            "answer": "",
            "disabled": false,
            "classname": "form-control"
        }
    ]

    return (
        <div className="pt-3">
            <div className="settings-form">
                <Formik
                    initialValues={initialValues(library_field)}
                    validationSchema={validationSchema(library_field)}
                    onSubmit={(values,) => { onSubmit(values) }}
                >
                    {({
                        handleSubmit,
                        errors
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-primary pb-5 text-center">{t('addblockchaintitle')}</h2>
                            {library_field.map((controls, index) => (
                                <div key={index}>
                                    <FormikControl
                                        control={controls.control}
                                        type={controls.type}
                                        label={controls.label}
                                        name={controls.name}
                                        className={controls.classname}
                                        rows={controls.rows}
                                        options={controls.options}
                                        required={controls.required}
                                    />
                                </div>
                            ))}
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
        users: UserDetails(state)
    }
}

export default withTranslation()(connect(mapStateToProps, null)(AddLibrary))