/* eslint-disable no-undef */


import React, { useEffect, useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import loginbg from "../../../../images/bg-login.jpg";
import { registerFaceAction } from '../../../../store/actions/AuthActions';
import { isAuthenticated, UserDetails } from '../../../../store/selectors/AuthSelectors';
import AsideLeftAuthen from '../../../pages/WidgetBasic/AsideLeftAuthen';
import handleFaceError from './../../../../utils/handleFaceError';

const RegisterFace = ({ users }) => {
    let faceioInstance = null
    const history = useHistory()
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [render, setRender] = useState(false);

    const faceRegistration = async () => {
        const face = document.getElementById('face')
        face.style.display = 'none';
        try {
            const userInfo = await faceioInstance.enroll({
                locale: "auto",
                payload: {
                    email: `${users.email}`,
                    userId: `${users.phone}`,
                    username: `${users.username}`,
                    website: "https://vcoincheck.io"
                },
            })

            if (userInfo.facialId) {
                const postData = {
                    username: users.username,
                    faceid: userInfo.facialId
                }
                dispatch(registerFaceAction(postData, history));
            }

        } catch (errorCode) {
            const error = handleFaceError(errorCode)
            console.log(error)
            Swal.fire("Error!", error, "error")
                .then((response) => {
                    if (response) {
                        face.style.display = 'block';
                        setRender(true)
                    }
                });
        }
    }

    useEffect(() => {
        const faceIoScript = document.createElement('script')
        faceIoScript.src = '//cdn.faceio.net/fio.js'
        faceIoScript.async = true
        faceIoScript.onload = () => faceIoScriptLoaded()
        document.body.appendChild(faceIoScript)
        return () => {
            document.body.removeChild(faceIoScript)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [render])

    const faceIoScriptLoaded = () => {
        console.log(faceIO)
        if (faceIO && !faceioInstance) {
            faceioInstance = new faceIO('fioa6bbb') //your-faceio-app-public-id
        }
    }

    return (
        <>
            <div id="face" className="login-main-page" style={{ backgroundImage: "url(" + loginbg + ")" }}>
                <div className="login-wrapper">
                    <AsideLeftAuthen t={t} />
                    <div className="login-aside-right gradient_one">
                        <div className="row m-0 justify-content-center h-100 align-items-center">
                            <div className="col-xl-7 col-xxl-7">
                                <div className="authincation-content">
                                    <div className="row no-gutters">
                                        <div className="col-xl-12">
                                            <div className="form-row d-flex justify-content-between mt">
                                                <Link to="#" className="btn btn-primary" onClick={faceRegistration} >{t('registrationface')}</Link>
                                                <Link to="/" className="btn btn-primary ">{t('gotohome')}</Link>
                                            </div>
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

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
        users: UserDetails(state)
    };
};

export default withTranslation()(connect(mapStateToProps)(RegisterFace));