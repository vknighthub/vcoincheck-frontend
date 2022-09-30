import {
    forgotPassword,
    formatError,
    login,
    loginFace,
    registerFace,
    runLogoutTimer,
    signUp,
} from '../../services/AuthService';
import Swal from 'sweetalert2';



export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';
export const RELOAD_SCORE_ACTION = '[User action] Reload score';
export const RESET_PASSWORD_CONFIRMED_ACTION = '[Reset password action] confirmed';
export const RESET_PASSWORD_FAILED_ACTION = '[Reset password action] failed';
export const FACEID_ACTION = '[User action] Loading Face ID';
export const LOGIN_FACE_CONFIRMED_ACTION = '[Login face action] Face confirmed login';
export const REGISTER_FACE_CONFIRMED_ACTION = '[Register face action] Face confirmed register';


export function signupAction(email, password, history) {
    return (dispatch) => {
        signUp(email, password)
            .then((response) => {
                runLogoutTimer(
                    dispatch,
                    response.data.expiresIn * 1000,
                    history,
                );
                dispatch(confirmedSignupAction(response.data));
                history.push('/');
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                dispatch(signupFailedAction(errorMessage));
            });
    };
}

export function logout(history) {
    localStorage.removeItem('userDetails');
    history.push('/page-login');
    return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(username, password, history) {
    return (dispatch) => {
        login(username, password)
            .then((response) => {
                dispatch(loginConfirmedAction(response.data));
                if (history.action !== "PUSH") {
                    history.goBack();
                } else {
                    history.push("/");
                }
            })
            .catch((error) => {
                console.error("error" + error.message);
                const errorMessage = formatError(error.response.data);
                dispatch(loginFailedAction(errorMessage));
            });
    };
}

export function forgotPasswordAction(posdata, history) {
    return (dispatch) => {
        forgotPassword(posdata)
            .then((response) => {
                if (response.data.errorcode !== 0) {
                    Swal.fire("Failed!", response.data.messagedetail, "error");
                } else {
                    dispatch(resetPasswordConfirmedAction(response.data));
                    Swal.fire("Succeed!", "We have sent to your mail a OTP code to vefiy reset password. Please get OTP code and input into page", "success")
                        .then((response) => {
                            if (response) {
                                history.push("/page-otp-password");
                            }
                        });
                }
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                dispatch(resetPasswordFailedAction(errorMessage));
                Swal.fire("Failed!", errorMessage, "error");
            });
    };
}


export function confirmOTPPasswordAction(posdata, history) {
    return (dispatch) => {
        forgotPassword(posdata)
            .then((response) => {
                dispatch(resetPasswordConfirmedAction(response.data));
                if (response.data.errorcode !== 0) {
                    Swal.fire("Failed!", response.data.messagedetail, "error");
                } else {
                    Swal.fire("Succeed!", "Your password has been reset. Please login to email to get new password", "success")
                        .then((response) => {
                            if (response) {
                                history.push("/page-login");
                            }
                        })

                }
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                dispatch(resetPasswordFailedAction(errorMessage));
                Swal.fire("Failed!", errorMessage, "error");
            });
    };
}


export function loginFaceAuthenAction(username, password, history) {
    return (dispatch) => {
        login(username, password)
            .then((response) => {
                dispatch(loginConfirmedAction(response.data));
                history.push("/page-authentication-submit");
            })
            .catch((error) => {
                console.error("error" + error.message);
                const errorMessage = formatError(error.response.data);
                dispatch(loginFailedAction(errorMessage));
            });
    };
}

export function loginByFaceAction(postData, history) {
    return (dispatch) => {
        loginFace(postData)
            .then((response) => {
                dispatch(loginFaceConfirmedAction(response.data));
                history.push("/");
            })
            .catch((error) => {
                console.error("error" + error.message);
                const errorMessage = formatError(error.response.data);
                dispatch(loginFailedAction(errorMessage));
                history.push("/page-authentication-submit")
            });
    };
}

export function registerFaceAction(postData, history) {
    return (dispatch) => {
        registerFace(postData)
            .then((response) => {
                dispatch(registerFaceConfirmedAction(response.data));
                history.push("/");
            })
            .catch((error) => {
                console.error("error" + error.message);
                const errorMessage = formatError(error.response.data);
                dispatch(loginFailedAction(errorMessage));
                history.push("/page-authentication-submit")
            });
    };
}



export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}

export function resetPasswordFailedAction(data) {
    return {
        type: RESET_PASSWORD_FAILED_ACTION,
        payload: data,
    };
}

export function resetPasswordConfirmedAction(data) {
    return {
        type: RESET_PASSWORD_CONFIRMED_ACTION,
        payload: data,
    };
}

export function loadingFaceIdAction(faceId) {
    return {
        type: FACEID_ACTION,
        payload: faceId,
    };
}

export function loginFaceConfirmedAction(data) {
    return {
        type: LOGIN_FACE_CONFIRMED_ACTION,
        payload: data,
    };
}

export function registerFaceConfirmedAction(data) {
    return {
        type: REGISTER_FACE_CONFIRMED_ACTION,
        payload: data,
    };
}
