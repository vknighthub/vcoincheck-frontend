/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import i18next from 'i18next';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { addReviewAction, loadingToggleAction } from '../../../../../store/actions/ReviewAction';
import GetContentLanguage from "../../../../../utils/GetContentLanguage";
import FormikControl from "../../../../components/Forms/Formik/FormikControl";

const Advanced = (props) => {
    const dispatch = useDispatch();
    const language = i18next.language
    const [showSuccess, setShowSuccess] = useState(false)
    const advanceQuestion = props.advancequestion
    const { project, reviewresponses } = props
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
                value = "a";
            }
            const jobject = { "qstcd": key, "answer": value }
            listanswer.push(jobject)
        })

        const postdata = {
            username: props.username,
            projectid: project.proid,
            reviewtype: props.reviewtype,
            reviewdata: {
                answerdata: listanswer,
            }
        }
        Swal.fire({
            title: `${t('questionsubmit')}`,
            html: `${t('submitadvancereview')}`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${t('submitreview')}`,
            cancelButtonText: `${t('cancel')}`,
        }).then((result) => {
            if (result.value) {
                dispatch(loadingToggleAction(true));
                dispatch(addReviewAction(postdata, setShowSuccess));
            }
        });

    }

    const handleNextStep = () => {
        props.action()
    }

    return (
        <div className="my-post-content pt-3">
            {!showSuccess ?
                <div className="settings-form">
                    <Formik
                        initialValues={initialValues(advanceQuestion)}
                        onSubmit={(values,) => { onSubmit(values) }}
                    >{({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <h3 className="text-primary pb-5">{t('overviewtitle')}</h3>
                            {advanceQuestion.map((groups, index) => (
                                <div key={index}>
                                    {groups.group && <h4 className="text-primary pb-3">{GetContentLanguage(language, groups.group)}</h4>}
                                    {groups.content.map((controls, index) => {
                                        var label = GetContentLanguage(language, controls.label)
                                        return (
                                            <div key={index}>
                                                <FormikControl control={controls.control} styles={controls.styles} label={label} name={controls.name} options={controls.answer} component="input" language={language} />
                                                {controls.control === 'input' && <FormikControl control={controls.control} type={controls.type} label={label} name={controls.name} className="form-control" rows={controls.rows} />}
                                            </div>)
                                    })}
                                </div>
                            ))}
                            <button className="btn btn-primary" type="submit">{t('submitreview')}</button>
                        </form>
                    )}
                    </Formik>
                </div>
                :
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="post-details">
                                <p className="mb-2 fs-24 text-success text-center">
                                    {t('submitprojectsuccesstitle')}
                                </p>
                                <div className="profile-personal-info mt-5">
                                    <h3 className="text-primary mb-4 text-center">
                                        {t('reviewinfo')}
                                    </h3>
                                    <div className="row mb-2" >
                                        <div className="col-3">
                                            <h5 className="f-w-500">{t('estimatereviewscore')} <span className="pull-right">:</span></h5>
                                        </div>
                                        <div className="col-9">
                                            {reviewresponses.review_score}
                                        </div>
                                    </div>
                                    <div className="row mb-2" >
                                        <div className="col-3">
                                            <h5 className="f-w-500">{t('estimateprojectscore')} <span className="pull-right">:</span></h5>
                                        </div>
                                        <div className="col-9">
                                            {reviewresponses.project_score}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        className="btn btn-success ml-3"
                        to="#"
                        data-toggle="modal"
                        onClick={() => handleNextStep()}
                        data-target="#reviewModal"
                    >
                        {t('Next to Expert')}?
                    </Link>
                </div>
            }
        </div >

    )
}

const mapStateToProps = state => {
    return {
        reviewresponses: state.reviewresponses
    }
}

export default connect(mapStateToProps, null)(Advanced);