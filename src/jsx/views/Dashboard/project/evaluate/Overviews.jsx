import { Formik } from "formik";
import i18next from 'i18next';
import { connect, useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import * as Yup from "yup";
import GetContentLanguage from "../../../../../utils/GetContentLanguage";
import { addReviewAction } from './../../../../../store/actions/ReviewAction';
import FormikControl from './../../../../components/Forms/Formik/FormikControl';


const Overviews = (props) => {
    const dispatch = useDispatch();
    const language = i18next.language

    const overQuestions = props.overquestion
    const t = props.t

    const initialValues = (listQuestion) => {
        let obj = {}
        listQuestion.forEach((question) => {
            question.content.forEach((controls) => {
                obj[controls.name] = ''
            })
        })
        return obj
    }


    const validationSchema = (listQuestion) => {
        const shape = {};
        listQuestion.forEach((question) => {
            question.content.forEach((controls) => {
                if (controls.required === 'Y') {
                    shape[controls.name] = Yup.string().required("Please enter a answer for this question")
                }
            })
        })
        return Yup.object().shape(shape);
    }

    const onSubmit = (values) => {

        const listanswer = [];
        const jlistData = Object.entries(values);

        jlistData.forEach(([key, value]) => {
            const jobject = { "qstcd": key, "answer": value }
            listanswer.push(jobject)
        })

        const postData = {
            username: props.username,
            projectid: props.projectid,
            reviewid: "",
            reviewtype: props.reviewtype,
            reviewdata: {
                answerdata: listanswer
            }
        }
        Swal.fire({
            title: `${t('questionsubmit')}`,
            html: `${t('questionsubmitdetail')}`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${t('submitreview')}`,
            cancelButtonText: `${t('cancel')}`,
        }).then((result) => {
            if (result.value) {
                dispatch(addReviewAction(postData, props.action));
            }
        });

    }

    return (
        <div className="pt-3">
            <div className="settings-form">
                <Formik
                    initialValues={initialValues(overQuestions)}
                    validationSchema={validationSchema(overQuestions)}
                    onSubmit={(values) => { onSubmit(values) }}
                >
                    {({
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-primary pb-5">{t('overviewtitle')}</h3>
                            {overQuestions.map((groups, index) => (
                                <div key={index}>
                                    {groups.group && <h4 className="text-primary pb-3 pt-3" >{GetContentLanguage(language, groups.group)}</h4>}
                                    {groups.content.map((controls, index) => {
                                        var label = GetContentLanguage(language, controls.label)
                                        return (
                                            <div key={index} >
                                                <FormikControl
                                                    control={controls.control}
                                                    type={controls.type}
                                                    label={label}
                                                    name={controls.name}
                                                    className="form-control"
                                                    onBlur={handleBlur} />
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                            <button className="btn btn-primary mt-5" type="submit">{t('submitreview')}</button>
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
        reviewresponses: state.reviewresponses
    }
}

export default connect(mapStateToProps, null)(Overviews)