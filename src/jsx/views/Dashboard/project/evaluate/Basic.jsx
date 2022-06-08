/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import i18next from 'i18next';
import { connect, useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { addReviewAction, loadingToggleAction } from '../../../../../store/actions/ReviewAction';
import GetContentLanguage from "../../../../../utils/GetContentLanguage";
import FormikControl from "../../../../components/Forms/Formik/FormikControl";

const Basic = (props) => {

    const dispatch = useDispatch();
    const language = i18next.language
    const basicquestion = props.basicquestion
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

    const onSubmit = (listdata) => {

        const listanswer = [];
        const jlistData = Object.entries(listdata);

        jlistData.forEach(([key, value]) => {
            if (value === "") {
                value = "0";
            }
            const jobject = { "qstcd": key, "answer": value }
            listanswer.push(jobject)
        })

        const postData = {
            username: props.username,
            projectid: props.projectid,
            reviewtype: props.reviewtype,
            reviewdata: {
                answerdata: listanswer,
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
                dispatch(loadingToggleAction(true));
                dispatch(addReviewAction(postData, props.action));
            }
        });

    }

    return (
        <div className="my-post-content pt-3">
            <div className="settings-form">

                <Formik
                    initialValues={initialValues(basicquestion)}
                    onSubmit={(values) => { onSubmit(values) }}
                >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-primary pb-5">{t('overviewtitle')}</h3>
                            {basicquestion.map((groups, index) => (
                                <div key={index}>
                                    <h4 className="text-primary pb-3">{GetContentLanguage(language, groups.group)}</h4>
                                    {groups.content.map((controls) => {
                                        var label = GetContentLanguage(language, controls.label)
                                        return (
                                            <div key={index}>
                                                <FormikControl control={controls.control} styles={controls.styles} label={label} name={controls.name} options={controls.answer} component="input" language={language} />
                                                {controls.control === 'input' && <FormikControl control={controls.control} type={controls.type} label={label} name={controls.name} className="form-control" rows={controls.rows} />}
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                            <button className="btn btn-primary" type="submit">{t('submitreview')}</button>
                        </form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        reviewresponses: state.reviewresponses
    }
}

export default connect(mapStateToProps, null)(Basic);
;