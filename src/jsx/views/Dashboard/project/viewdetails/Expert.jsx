import { Formik } from 'formik';
import FormikControl from '../../../../components/Forms/Formik/FormikControl';


const Expert = (props) => {
    const expertquestion = props.reviewinfo.main_data
    return (
        <div className="my-post-content pt-3">
            <div className="settings-form">
                <Formik>
                    {() => (
                        <form>
                            {expertquestion.map((groups, index) => (
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
                                                className="form-control"/>
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
export default Expert;