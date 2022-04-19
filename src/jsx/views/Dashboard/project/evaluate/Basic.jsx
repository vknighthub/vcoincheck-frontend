/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import { connect, useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { addReviewAction, loadingToggleAction } from '../../../../../store/actions/ReviewAction';
import FormikControl from "../../../../components/Forms/Formik/FormikControl";

const Basic = (props) => {
    const dispatch = useDispatch();

    const basicquestion = props.basicquestion

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
            reviewid: props.reviewresponses[0].reviewid,
            reviewtype: props.reviewtype,
            reviewdata: {
                answerdata: listanswer,
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
                            <h3 className="text-primary pb-5">Please answer a few questions below so we can see what you know about this project</h3>
                            <h4 className="text-primary pb-3">Project Type Question</h4>
                            {basicquestion.map((groups, index) => (
                                <div key={index}>
                                    <h4 className="text-primary pb-3">{groups.group}</h4>
                                    {groups.content.map((controls) => (
                                        <div key={index}>
                                            <FormikControl control={controls.control} styles={controls.styles} label={controls.label} name={controls.name} options={controls.answer} component="input" />
                                            {controls.control === 'input' && <FormikControl control={controls.control} type={controls.type} label={controls.label} name={controls.name} className="form-control" rows={controls.rows} />}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <button className="btn btn-primary" type="submit" >Submit</button>
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