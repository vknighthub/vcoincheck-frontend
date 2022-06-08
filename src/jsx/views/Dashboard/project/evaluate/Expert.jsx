import { Formik } from 'formik';
import i18next from 'i18next';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addReviewAction, loadingToggleAction } from '../../../../../store/actions/ReviewAction';
import GetContentLanguage from '../../../../../utils/GetContentLanguage';
import FormikControl from './../../../../components/Forms/Formik/FormikControl';


const Expert = (props) => {

    const expertQuestion = props.expertquestion
    const { project, reviewresponses } = props
    const language = i18next.language
    const t = props.t
    const [showSuccess, setShowSuccess] = useState(false)
    const dispatch = useDispatch();

    const initialValues = (listQuestion) => {
        let obj = {}
        listQuestion.forEach((question) => {
            question.content.forEach((controls) => {
                obj[controls.name] = ''
            })
        })
        return obj
    }

    const removeByItem = (arr, id) => {
        const requiredIndex = arr.findIndex(el => {
            return el.qstcd === String(id);
        });
        if (requiredIndex === -1) {
            return false;
        };
        return !!arr.splice(requiredIndex, 1);
    };

    const onSubmit = (values) => {
        const listanswer = [];
        const jlistData = Object.entries(values);
        var jobject
        jlistData.forEach(([key, value]) => {
            jobject = { "qstcd": key, "answer": value }
            listanswer.push(jobject)
        })
        removeByItem(listanswer, 'totalscore')

        const postData = {
            username: props.username,
            projectid: project.proid,
            reviewtype: props.reviewtype,
            reviewdata: {
                answerdata: listanswer
            },
            totalscore: values.totalscore
        }
        Swal.fire({
            title: `${t('questionsubmit')}`,
            html: `${t('submitadvancereview')}`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${t('completereview')}`,
            cancelButtonText: `${t('cancel')}`,
        }).then((result) => {
            if (result.value) {
                dispatch(loadingToggleAction(true));
                dispatch(addReviewAction(postData, setShowSuccess));
            }
        });

    }

    return (
        <div className="my-post-content pt-3">
            <div className="settings-form">
                <div className="form-group">
                    <div className="h-80">
                        <div className="row">
                            <div className="col-xl-12 col-xxl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">{t('overviewtitle')}</h4>
                                    </div>
                                    <div className="card-body">
                                        {!showSuccess ?
                                            <div className="settings-form">
                                                <Formik
                                                    initialValues={initialValues(expertQuestion)}
                                                    onSubmit={(values,) => { onSubmit(values) }}
                                                >
                                                    {({
                                                        handleBlur,
                                                        handleChange,
                                                        handleSubmit
                                                    }) => (
                                                        <form onSubmit={handleSubmit}>
                                                            {expertQuestion.map((groups, index) => (
                                                                <div key={index}>
                                                                    {groups.group && <h4 className="text-primary pb-3 pt-3" >{GetContentLanguage(language, groups.group)}</h4>}
                                                                    {groups.content.map((controls, index) => {
                                                                        var label = GetContentLanguage(language, controls.label)
                                                                        return (
                                                                            <div key={index}>
                                                                                <FormikControl
                                                                                    control={controls.control}
                                                                                    type={controls.type}
                                                                                    label={label}
                                                                                    name={controls.name}
                                                                                    rows={controls.rows}
                                                                                    className="form-control"
                                                                                    onBlur={handleBlur} />
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            ))}
                                                            <FormikControl
                                                                control="input"
                                                                type="text"
                                                                label={t('totalscore')}
                                                                name="totalscore"
                                                                className="form-control"
                                                                defaultValue="0"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange} />
                                                            <button className="btn btn-primary" type="submit">{t('submitreview')}</button>
                                                            <br />
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
                                                    to="/project"
                                                    data-toggle="modal"
                                                    data-target="#reviewModal"
                                                >
                                                    {t('backtolistproject')}?
                                                </Link>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        reviewresponses: state.reviewresponses
    }
}

export default connect(mapStateToProps, null)(Expert);