import { Formik } from "formik";
import FormikControl from "../../../../components/Forms/Formik/FormikControl";


const Basic = (props) => {
    const basicquestion = props.reviewinfo.main_data
    return (
        <div className="my-post-content pt-3">
            <div className="settings-form">

                <Formik
                >
                    {() => (
                        <form>
                            {basicquestion.map((groups, index) => (
                                <div key={index}>
                                    <h4 className="text-primary pb-3">{groups.group}</h4>
                                    {groups.content.map((controls) => (
                                        <div key={index}>
                                            <FormikControl control={controls.control} styles={controls.styles} label={controls.label} name={controls.name} options={controls.answer} component="input" answer={controls.choose} disabled />
                                            {controls.control === 'input' && <FormikControl control={controls.control} type={controls.type} label={controls.label} name={controls.name} className="form-control" rows={controls.rows} disabled/>}
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


export default Basic;
;