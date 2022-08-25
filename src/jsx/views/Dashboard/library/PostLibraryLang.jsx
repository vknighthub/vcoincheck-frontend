import { Formik } from "formik";
import { useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { addLangLibraryAction } from '../../../../store/actions/LibraryAction';
import { loadingToggleAction } from '../../../../store/actions/ReviewAction';
import { UserDetails } from "../../../../store/selectors/AuthSelectors";
import GetLanguageofpost from "../../../../utils/GetLanguageofpost";
import FormikControl from "../../../components/Forms/Formik/FormikControl";
import { getLibraryByName } from './../../../../store/selectors/PostSelectors';
import GetContentLanguage from './../../../../utils/GetContentLanguage';
import listCategory from './MOCK_LIBRARY.json';


const PostLibraryLang = (props) => {
    const language = atob(props.match.params.language);

    const { t } = useTranslation();
    const { library } = props


    const title = GetContentLanguage(language.toLowerCase(), library.title)
    const summary = GetContentLanguage(language.toLowerCase(), library.summary)
    const image = library.image
    const contentresult = GetContentLanguage(language.toLowerCase(), library.content)

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
                shape[controls.name] = Yup.string().required(`${t('libraryinforequired')}`)
            }
        })
        return Yup.object().shape(shape);
    }

    const history = useHistory()
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const onSubmit = (values) => {

        const postData = {
            title: values.title,
            name: library.name,
            image: values.illustration,
            summary: values.briefintro,
            content: values.content,
            category: values.category,
            username: props.users.username,
            lang: values.languageofpost.toLowerCase(),
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
                dispatch(addLangLibraryAction(postData, history, 'library-management'));
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
            "answer": language,
            "disabled": true,
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
            "answer": library.catid,
            "disabled": true,
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
            "answer": title,
            "disabled": (!title || edit) ? false : true,
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
            "answer": summary,
            "disabled": (!summary || edit) ? false : true,
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
            "answer": image,
            "disabled": (!image || edit) ? false : true,
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
            "answer": contentresult,
            "disabled": (!contentresult || edit) ? false : true,
            "classname": "form-control"
        }
    ]

    const onEditLibrary = () => {
        setEdit(true)
    }

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
                        errors,
                        values
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
                                        disabled={controls.disabled}
                                        source={controls.answer}
                                        contents={controls.answer}
                                    />
                                </div>
                            ))}
                            {(!title || edit) &&
                                <button className="btn btn-primary" type="submit">{t('submit')}</button>
                            }
                            <br />
                        </form>
                    )}
                </Formik>
                {title && !edit &&
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={() => onEditLibrary()}
                    >
                        {t('edit')}
                    </button>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        reviewresponses: state.reviewresponses,
        users: UserDetails(state),
        library: getLibraryByName(state, atob(ownProps.match.params.name)),
    }
}


export default withTranslation()(connect(mapStateToProps, null)(PostLibraryLang))