
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from "yup";
import Requirements from '../../../../components/bootstrap/Requirements';
import { useDispatch } from 'react-redux';
import { changePasswordUserAction } from '../../../../../store/actions/UserAction';

const ProfileSetting = (props) => {
    const { t } = props;
    const history = useHistory();
    const dispatch = useDispatch();

    const user = props.users;

    const [disableControl, setDisableControl] = useState(true);
    const [hiddenSave, setHiddenSave] = useState(true);
    const [hiddenEdit, setHiddenEdit] = useState(false);
    const [hiddenSavePassword, setHiddenSavePassword] = useState(true);
    const [activeToggle, setActiveToggle] = useState("account-setting");

    const [valid, setValid] = useState(false);


    const changeUserInformations = () => {
        setDisableControl(false)
        setHiddenSave(false)
        setHiddenEdit(true)
    }

    const changePasswordInformations = () => {
        setActiveToggle("change-password")
        setHiddenSavePassword(false)
        setHiddenEdit(true)
    }

    const onSubmit = (values) => {
        const postData = {
            username: user.username,
            userinfo: {
                values
            }
        }
        Swal.fire({
            title: "Are you sure want to edit information?",
            icon: "question",
        }).then((result) => {
            if (result.value) {
                try {
                    // dispatch(loadingToggleAction(true));
                    // dispatch(addReviewAction(postData, props.action));
                    setHiddenSave(true)
                    setHiddenEdit(false)
                    console.log(postData)
                    Swal.fire("Edited!", "This user information has been edited.", "success");
                } catch (error) {
                    Swal.fire("Failed!", "This user information has been failed for edit.", "error");
                }
            }
        });

    }

    const onSubmitChangePassword = (values, history) => {
        const postData = {
            username: user.username,
            oldpass: values.oldpassword,
            newpass: values.newpassword,
            encrypt: false
        }
        Swal.fire({
            title: "Are you sure want to change password?",
            icon: "question",
        }).then((result) => {
            if (result.value) {
                dispatch(changePasswordUserAction(postData,history));
            }
        });

    }

    const changepasswordSchema = Yup.object().shape({
        oldpassword: Yup.string().required("Please enter old password"),
        newpassword: Yup.string().required("Please enter new password").matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        confirmnewpass: Yup.string().required("Please enter confirm old password").when("newpassword", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("newpassword")],
                "Confirm password is not same new password"
            )
        })
    });

    const validate = (values) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (regex.test(values.newpassword) &&
            values.oldpassword &&
            values.confirmnewpass &&
            values.newpassword === values.confirmnewpass
        ) {
            setValid(true)
        }
    };

    return (

        <div className="pt-3">
            <div className="settings-form tab-content">

                <div id="account-setting" className={`tab-pane fade ${activeToggle === "account-setting" ? "active show" : ""}`}>
                    <h4 className="text-primary pb-3">{t('accountsetting')}</h4>
                    <Formik
                        initialValues={{
                            firstname: user.firstname,
                            lastname: user.lastname,
                            address: user.address,
                            phone: user.phone,
                            birthday: user.birthday,
                        }}
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
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>{t('firstname')}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="firstname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstname}
                                            disabled={disableControl} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>{t('lastname')}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="lastname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastname}
                                            disabled={disableControl} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>{t('address')}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={values.address}
                                        name="address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={disableControl} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>{t('phone')}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={values.phone}
                                            name="phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={disableControl} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>{t('dayofbirth')}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={values.birthday}
                                            name="birthday"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={disableControl} />
                                    </div>
                                </div>
                                <button className="btn btn-primary mr-2" type="submit" hidden={hiddenSave} >Save</button>
                            </form>
                        )}
                    </Formik>
                </div>

                <div id="change-password" className={`tab-pane fade ${activeToggle === "change-password" ? "active show" : ""}`}>
                    <h4 className="text-primary pb-3">{t('passwordsetting')}</h4>
                    <Formik
                        initialValues={{
                            oldpassword: '',
                            newpassword: '',
                            confirmnewpass: '',
                        }}
                        validationSchema={changepasswordSchema}
                        onSubmit={(values,) => { onSubmitChangePassword(values, history) }}
                        validate={(values) => validate(values)}
                    >
                        {({
                            values,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <div className={`form-group ${values.oldpassword
                                    ? errors.oldpassword
                                        ? "is-invalid"
                                        : "is-valid"
                                    : ""
                                    }`}
                                >
                                    <label>{t('oldpwd')}</label>
                                    <input
                                        autoFocus
                                        type="password"
                                        className="form-control"
                                        value={values.oldpassword}
                                        name="oldpassword"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div
                                        id="val-oldpassword-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    >
                                        {errors.oldpassword && errors.oldpassword}
                                    </div>

                                    <div
                                        id="val-oldpassword-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    />
                                </div>


                                <div className={`form-group ${values.newpassword
                                    ? errors.newpassword
                                        ? "is-invalid"
                                        : "is-valid"
                                    : ""
                                    }`}
                                >
                                    <label>{t('newpwd')}</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={values.newpassword}
                                        name="newpassword"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div
                                        id="val-newpassword-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    >
                                        {errors.newpassword && errors.newpassword}
                                    </div>

                                    <div
                                        id="val-newpassword-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    />
                                </div>


                                <div className={`form-group ${values.confirmnewpass
                                    ? errors.confirmnewpass
                                        ? "is-invalid"
                                        : "is-valid"
                                    : ""
                                    }`}
                                >
                                    <label>{t('confirmnewpwd')}</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={values.confirmnewpass}
                                        name="confirmnewpass"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div
                                        id="val-confirmnewpass-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    >
                                        {errors.confirmnewpass && errors.confirmnewpass}
                                    </div>

                                    <div
                                        id="val-confirmnewpass-error"
                                        className="invalid-feedback animated fadeInUp"
                                        style={{ display: "block" }}
                                    />
                                </div>


                                <Requirements valid={valid} t={t}/>

                                <button className="btn btn-primary mr-2" type="submit" hidden={hiddenSavePassword} >Save</button>
                            </form>
                        )}
                    </Formik>
                </div>

                {!hiddenEdit &&
                    <div className="pt-5">
                        <Link to="#" className="btn btn-primary mr-2" onClick={() => changeUserInformations()}>{t('edit')}</Link>
                        <Link to="#" className="btn btn-primary" onClick={() => changePasswordInformations()} >{t('changepwd')}</Link>
                    </div>
                }


            </div>
        </div>
    )
}

export default ProfileSetting