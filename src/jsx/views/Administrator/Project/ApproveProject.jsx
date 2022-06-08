
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import * as Yup from "yup";
import { approveReviewScoreAction } from '../../../../store/actions/ReviewAction';

const ApproveProject = (props) => {
    const dispatch = useDispatch();
    const [hideApprove, setHideApprove] = useState(false);
    const scores = props.scorereview

    const overviewSchema = Yup.object().shape({
        overviewscore: Yup.string()
            .required("Please enter a overview score"),
        basicscore: Yup.string()
            .required("Please enter a basic score"),
        advancescore: Yup.string()
            .required("Please enter a advance score"),
        expertscore: Yup.string()
            .required("Please enter a expert score"),
    });

    const onSubmit = (values) => {
        const postData = {
            reviewid: props.reviewid,
            overreview: values.overviewscore,
            basicreview: values.basicscore,
            advancereview: values.advancescore,
            expertreview: values.expertscore,
            comment: values.comment
        }
        Swal.fire({
            title: "Do you want to approve this review?",
            html:
                `<div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <strong>Overview Score</strong>
                                </th>
                                <th>
                                    <strong>Basic Score</strong>
                                </th>
                                <th>
                                    <strong>Advance Score</strong>
                                </th>
                                <th>
                                    <strong>Expert Score</strong>
                                </th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>` + values.overviewscore + `</td>
                                <td>` + values.basicscore + `</td>
                                <td>` + values.advancescore + `</td>
                                <td>` + values.expertscore + `</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`,

            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Approve",
            cancelButtonText: "Close",
        }).then((result) => {
            if (result.value) {
                dispatch(approveReviewScoreAction(postData))
                setHideApprove(true)
                Swal.fire("Approved!", "This reviewd has been approved.", "success")
                    .then(() => {
                        window.location.reload();
                    });
            }
        });
    }

    return (
        <>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body">
                        <div className="profile-tab">
                            <div className="custom-tab-1">
                                <div className="tab-content">
                                    <div className="pt-3">
                                        <div className="settings-form">
                                            <Formik
                                                initialValues={{
                                                    overviewscore: scores.overreview,
                                                    basicscore: scores.basicreview,
                                                    advancescore: scores.advancereview,
                                                    expertscore: scores.expertreview,
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
                                                        <h3 className="text-primary pb-5">Approve for this review</h3>
                                                        <h4 className="text-primary pb-3">Overview</h4>
                                                        <div className="form-group" >
                                                            <label>How many score for this review?</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="val-overviewscore"
                                                                    name="overviewscore"
                                                                    value={values.overviewscore}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                />
                                                                <div
                                                                    id="val-overviewscore-error"
                                                                    className="invalid-feedback animated fadeInUp"
                                                                    style={{ display: "block" }}
                                                                >
                                                                    {errors.overviewscore && errors.overviewscore}
                                                                </div>

                                                                <div
                                                                    id="val-overviewscore-error"
                                                                    className="invalid-feedback animated fadeInUp"
                                                                    style={{ display: "block" }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <h4 className="text-primary pb-3">Basic review</h4>
                                                        <div className="form-group" >
                                                            <label>How many score for this review?</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="val-basicscore"
                                                                    name="basicscore"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.basicscore}
                                                                />
                                                                <div
                                                                    id="val-basicscore-error"
                                                                    className="invalid-feedback animated fadeInUp"
                                                                    style={{ display: "block" }}
                                                                >
                                                                    {errors.basicscore && errors.basicscore}
                                                                </div>

                                                                <div
                                                                    id="val-basicscore-error"
                                                                    className="invalid-feedback animated fadeInUp"
                                                                    style={{ display: "block" }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <h4 className="text-primary pb-3">Advance review</h4>
                                                        <div className="form-group" >
                                                            <label>How many score for this review?</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="val-advancescore"
                                                                    name="advancescore"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.advancescore}
                                                                />
                                                                <div
                                                                    id="val-advancescore-error"
                                                                    className="invalid-feedback animated fadeInUp"
                                                                    style={{ display: "block" }}
                                                                >
                                                                    {errors.advancescore && errors.advancescore}
                                                                </div>

                                                                <div
                                                                    id="val-advancescore-error"
                                                                    className="invalid-feedback animated fadeInUp"
                                                                    style={{ display: "block" }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <h4 className="text-primary pb-3">Expert review</h4>
                                                        <div className="form-group" >
                                                            <label>How many score for this review?</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="val-expertscore"
                                                                    name="expertscore"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.expertscore}
                                                                />
                                                                <div
                                                                    id="val-expertscore-error"
                                                                    className="invalid-feedback animated fadeInUp"
                                                                    style={{ display: "block" }}
                                                                >
                                                                    {errors.expertscore && errors.expertscore}
                                                                </div>

                                                                <div
                                                                    id="val-expertscore-error"
                                                                    className="invalid-feedback animated fadeInUp"
                                                                    style={{ display: "block" }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <h4 className="text-primary pb-3">Comment</h4>
                                                        <div className="form-group" >
                                                            <label>Some comments for this review</label>
                                                            <div className="input-group">
                                                                <textarea
                                                                    rows={8}
                                                                    className="form-control"
                                                                    name="comment"
                                                                    placeholder="Some comments..."
                                                                    defaultValue={""}
                                                                    value={values.comment}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur} />
                                                            </div>
                                                        </div>
                                                        <button id="approve" className="btn btn-success mr-3" type="submit" hidden={hideApprove}>Approve</button>
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
            </div>
        </>
    );
};
export default ApproveProject;