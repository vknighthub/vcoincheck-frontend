import { Formik } from 'formik';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addReviewAction, loadingToggleAction } from '../../../../../store/actions/ReviewAction';
import { ProjectSvg } from '../../../../components/svg';
import RatingComment from '../RatingComment';
import FormikControl from './../../../../components/Forms/Formik/FormikControl';


const Expert = (props) => {

    const expertQuestion = props.expertquestion
    const project = props.project
    const [reviewModal, setReviewModal] = useState(false);
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

    const onSubmit = (values) => {
        const listanswer = [];
        const jlistData = Object.entries(values);

        jlistData.forEach(([key, value]) => {
            const jobject = { "qstcd": key, "answer": value }
            listanswer.push(jobject)
        })

        const postData = {
            username: props.username,
            projectid: project.proid,
            reviewtype: props.reviewtype,
            reviewdata: {
                answerdata: listanswer,
            }
        }
        Swal.fire({
            title: "Are you sure you want to submit?",
            html: "This review will have points so it's definitely worth it. Of-course, your review will be submit to community within approve by page manager.",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Complete",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                dispatch(loadingToggleAction(true));
                dispatch(addReviewAction(postData, props.action));
                window.location.reload();
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
                                        <h4 className="card-title">Please answer a few questions below so we can see what you know about this project</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="settings-form">
                                            <Formik
                                                initialValues={initialValues(expertQuestion)}
                                                onSubmit={(values,) => { onSubmit(values) }}
                                            >
                                                {({
                                                    handleBlur,
                                                    handleSubmit,
                                                }) => (
                                                    <form onSubmit={handleSubmit}>
                                                        {expertQuestion.map((groups, index) => (
                                                            <div key={index}>
                                                                {groups.group && <h4 className="text-primary pb-3 pt-3" >{groups.group}</h4>}
                                                                {groups.content.map((controls, index) => (
                                                                    <div key={index}>
                                                                        <FormikControl
                                                                            control={controls.control}
                                                                            type={controls.type}
                                                                            label={controls.label}
                                                                            name={controls.name}
                                                                            rows={controls.rows}
                                                                            className="form-control"
                                                                            onBlur={handleBlur} />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                        <button className="btn btn-primary" type="submit">Submit</button>
                                                        <Link
                                                            className="btn btn-success ml-3"
                                                            to="#"
                                                            data-toggle="modal"
                                                            onClick={() => setReviewModal(true)}
                                                            data-target="#reviewModal"
                                                        >
                                                            Evaluate?
                                                        </Link>
                                                        <br />
                                                    </form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={reviewModal} onHide={setReviewModal} className="modal fade" id="reviewModal">
                    <>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Evaluate Expert Review for {project.proname}</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    onClick={() => setReviewModal(false)}
                                >
                                    <span>×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setReviewModal(false);
                                    }}
                                >
                                    <div className="text-center mb-4">
                                        <ProjectSvg image={project.proicon} width={150} height={150} />
                                    </div>
                                    <div className="form-group">
                                        <div className="rating-widget mb-4 text-center">
                                            {/* Rating Stars Box */}
                                            <div className="rating-stars">
                                                <ul
                                                    id="stars"
                                                    className="d-flex justify-content-center align-items-center"
                                                >
                                                    <RatingComment />
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            placeholder="Comment"
                                            rows={5}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <button className="btn btn-primary btn-block">Evaluate</button>
                                </form>
                            </div>
                        </div>
                    </>
                </Modal>

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