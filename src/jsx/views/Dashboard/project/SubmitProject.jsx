import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import FormikControl from "../../../components/Forms/Formik/FormikControl";
import MOCK_SUBMITPROJECT from "./MOCK_SUBMITPROJECT.json"
import { useState } from 'react';



const SubmitProject = (props) => {
    const submitProject = MOCK_SUBMITPROJECT

    const [project, setProject] = useState('')

    const initialValues = (listField) => {
        let obj = {}
        listField.forEach((question) => {
            question.content.forEach((controls) => {
                obj[controls.name] = ''
            })
        })
        return obj
    }


    const validationSchema = (listField) => {
        const shape = {};
        listField.forEach((question) => {
            question.content.forEach((controls) => {
                if (controls.required === 'Y') {
                    shape[controls.name] = Yup.string().required("Please enter a project information")
                }
            })
        })
        return Yup.object().shape(shape);
    }

    const onSubmit = (values) => {
        const listanswer = [];

        const data = {};

        for (let i = 0; i < submitProject[0].content.length; i++) {
            data[submitProject[0].content[i].label] = values[submitProject[0].content[i].name];
        }

        const jlistData = Object.entries(data);

        jlistData.forEach(([key, value]) => {
            const jobject = { "field": key, "answer": value }
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
            title: "Are you sure you want to submit?",
            html: "Submit a project",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                // dispatch(addReviewAction(postData, props.action));
                Swal.fire({
                    title: "Submitted!",
                    html: "Thank you! Your submission has been received and will be reviewed.",
                    icon: "success"
                }).then((ok) => {
                    if (ok) {
                        setProject(listanswer)
                    }
                })

            }
        });

    }
    return (
        <div className="pt-3">

            {!project ?
                <div className="settings-form">
                    <Formik
                        initialValues={initialValues(submitProject)}
                        validationSchema={validationSchema(submitProject)}
                        onSubmit={(values) => { onSubmit(values) }}
                    >
                        {({
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <h3 className="text-primary pb-5">Your project is not listed on Cardano Cube yet? You can submit it for free! Make your project accessible to thousands of visitors</h3>
                                {submitProject.map((groups, index) => (
                                    <div key={index}>
                                        {groups.group && <h4 className="text-primary pb-3 pt-3" >{groups.group}</h4>}
                                        {groups.content.map((controls, index) => (
                                            <div key={index} >
                                                <FormikControl
                                                    control={controls.control}
                                                    type={controls.type}
                                                    label={controls.label}
                                                    name={controls.name}
                                                    className="form-control"
                                                    rows={controls.rows}
                                                    onBlur={handleBlur} />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                                <button className="btn btn-primary mt-5" type="submit">Submit</button>
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
                                    Thank you! Your submission has been received and will be reviewed.
                                </p>
                                <div className="profile-personal-info mt-5">
                                    <h3 className="text-primary mb-4 text-center">
                                        Project Information
                                    </h3>
                                    {project.map((value, index) => (
                                        <div className="row mb-2" key={index}>
                                            <div className="col-3">
                                                <h5 className="f-w-500">{value.field}<span className="pull-right">:</span></h5>
                                            </div>
                                            <div className="col-9">
                                                {value.answer.includes('data:image') ? <img src={value.answer} alt="" className="mr-3 rounded" width={75} />
                                                    : <span>{value.answer}</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}
export default SubmitProject;