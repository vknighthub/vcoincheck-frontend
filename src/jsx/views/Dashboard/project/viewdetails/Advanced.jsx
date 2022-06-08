import { Formik } from "formik";
import i18next from 'i18next';
import GetContentLanguage from "../../../../../utils/GetContentLanguage";
import FormikControl from "../../../../components/Forms/Formik/FormikControl";

const Advanced = (props) => {
    const advancequestion = props.reviewinfo.main_data
    const language = i18next.language

    return (
        <div className="my-post-content pt-3">
            <div className="settings-form">
                <Formik
                >{() => (
                    <form >
                        {advancequestion.map((groups, index) => (
                            <div key={index}>
                                {groups.group && <h4 className="text-primary pb-3">{GetContentLanguage(language, groups.group)}</h4>}
                                {groups.content.map((controls, index) => {
                                    var label = GetContentLanguage(language, controls.label)
                                    return (
                                        <div key={index}>
                                            <FormikControl control={controls.control} styles={controls.styles} label={label} name={controls.name} options={controls.answer} answer={controls.choose} component="input" language={language} disabled />
                                            {controls.control === 'input' && <FormikControl control={controls.control} type={controls.type} label={label} name={controls.name} className="form-control" rows={controls.rows} disabled />}
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default Advanced;