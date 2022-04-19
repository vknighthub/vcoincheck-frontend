import { Formik } from "formik";
import { connect, useDispatch } from 'react-redux';
import * as Yup from "yup";
import FormikControl from './../../../../components/Forms/Formik/FormikControl';
import { addReviewAction } from './../../../../../store/actions/ReviewAction'
import Swal from "sweetalert2";


const Overviews = (props) => {
    const dispatch = useDispatch();

    const overQuestions = props.overquestion

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
            title: "Are you sure you want to submit?",
            html: "Your review will be submit to community within approve by page manager.",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Submit",
            cancelButtonText: "Cancel",
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
                            <h3 className="text-primary pb-5">Please answer a few questions below so we can see what you know about this project</h3>
                            {overQuestions.map((groups, index) => (
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        reviewresponses: state.reviewresponses
    }
}

export default connect(mapStateToProps, null)(Overviews)