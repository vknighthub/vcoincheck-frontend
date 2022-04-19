import { Formik } from "formik";
import FormikControl from "../../../../components/Forms/Formik/FormikControl";

const Overviews = (props) => {

    const overview = props.reviewinfo.main_data

    return (
        <div className="pt-3">
            <div className="settings-form">
                <Formik>
                    {() => (
                        <form>
                            <h3 className="text-primary pb-5">Please answer a few questions below so we can see what you know about this project</h3>
                            {overview.map((groups, index) => (
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
                                                defaultValue={controls.answer}
                                                disabled/>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default Overviews;