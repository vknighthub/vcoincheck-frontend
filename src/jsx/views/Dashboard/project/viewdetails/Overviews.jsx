import { Formik } from "formik";
import i18next from 'i18next';
import GetContentLanguage from "../../../../../utils/GetContentLanguage";
import FormikControl from "../../../../components/Forms/Formik/FormikControl";

const Overviews = (props) => {

    const overview = props.reviewinfo.main_data
    const language = i18next.language
    return (
        <div className="pt-3">
            <div className="settings-form">
                <Formik>
                    {() => (
                        <form>
                            {overview.map((groups, index) => (
                                <div key={index}>
                                    {groups.group && <h4 className="text-primary pb-3 pt-3" >{GetContentLanguage(language, groups.group)}</h4>}
                                    {groups.content.map((controls, index) => {
                                        var label = GetContentLanguage(language, controls.label)
                                        return (
                                            <div key={index} >
                                                <FormikControl
                                                    control={controls.control}
                                                    type={controls.type}
                                                    label={label}
                                                    name={controls.name}
                                                    className="form-control"
                                                    key={controls.answer}
                                                    defaultValue={controls.answer}
                                                    language={language}
                                                    disabled />
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
export default Overviews;