import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { deleteUser, formatData, formatError, getUser, getUserRole, minusScoreUser, registerUser, updateStatusUser } from '../../services/UserService';
import { changePasswordUser, changeAvatarUser } from './../../services/UserService';
import {
    CONFIRMED_APPROVE_USER,
    CONFIRMED_CHANGE_AVATAR_USER,
    CONFIRMED_CHANGE_PASSWORD_USER, CONFIRMED_DELETE_USER, CONFIRMED_GET_USERROLES, CONFIRMED_GET_USERS, CONFIRMED_MNUSSCORE_USER, CONFIRMED_REGISTER_USER, FAILED_REGISTER_USER, LOADING_TOGGLE_ACTION, REFUSE_CHANGE_PASSWORD_USER, REFUSE_DELETE_USER, REFUSE_MNUSSCORE_USER
} from './types/UserType';




export function confirmedGetUserAction(users) {
    return {
        type: CONFIRMED_GET_USERS,
        users,
    };
};

export function confirmedGetUserRoleAction(userroles) {
    return {
        type: CONFIRMED_GET_USERROLES,
        userroles,
    };
};

export function registerFailedAction(data) {
    return {
        type: FAILED_REGISTER_USER,
        payload: data,
    };
}

export function registerConfirmedAction(data) {
    return {
        type: CONFIRMED_REGISTER_USER,
        payload: data,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}

export function minusScoreUserConfirmedAction(data) {
    return {
        type: CONFIRMED_MNUSSCORE_USER,
        payload: data,
    };
};

export function minusScoreUserFailedAction(data) {
    return {
        type: REFUSE_MNUSSCORE_USER,
        payload: data,
    };
}


export function approveUserConfirmedAction(data) {
    return {
        type: CONFIRMED_APPROVE_USER,
        payload: data,
    };
};

export function changePasswordUserConfirmedAction(data) {
    return {
        type: CONFIRMED_CHANGE_PASSWORD_USER,
        payload: data,
    };
};

export function changePasswordUserFailedAction(data) {
    return {
        type: REFUSE_CHANGE_PASSWORD_USER,
        payload: data,
    };
}

export function deleteUserConfirmedAction(data) {
    return {
        type: CONFIRMED_DELETE_USER,
        payload: data,
    };
};

export function deleteUserFailedAction(data) {
    return {
        type: REFUSE_DELETE_USER,
        payload: data,
    };
}

export function changeAvatarUserConfirmAction(data) {
    return {
        type: CONFIRMED_CHANGE_AVATAR_USER,
        payload: data,
    };
};


export function getUsersAction(history) {
    return (dispatch) => {
        getUser().then((response) => {
            let users = formatData(response.result.data);
            dispatch(confirmedGetUserAction(users));
        }).catch((error) => {
            const errorMessage = error.response.data
            if (errorMessage.errorcode !== 0) {
                if (errorMessage.errorcode === 1 || errorMessage.errorcode === 403) {
                    history.push('/page-error-403')
                } else {
                    swal("Oops", errorMessage.messagedetail, "error");
                }
            }
        });
    };
};

export function getUserRolesAction(history) {
    return (dispatch) => {
        getUserRole().then((response) => {
            let userroles = formatData(response.result.data);
            dispatch(confirmedGetUserRoleAction(userroles));
        }).catch((error) => {
            const errorMessage = error.response.data
            if (errorMessage.errorcode !== 0) {
                if (errorMessage.errorcode === 1 || errorMessage.errorcode === 403) {
                    history.push('/page-error-403')
                } else {
                    Swal.fire("Failed!", errorMessage, "error");
                }
            }
        });
    };
};

export function registerAction(postData, history) {
    return (dispatch) => {
        registerUser(postData)
            .then((response) => {
                dispatch(registerConfirmedAction(response.data));
                Swal.fire({
                    title: "Registered!",
                    html: "Your user information has been sent to your email. It is possible that the information will go to spam due to the policy of the mail server",
                    icon: "success"
                }).then((login) => {
                    if (login) {
                        history.push('/page-login')
                    }
                })
            })
            .catch((error) => {
                console.error("error" + error.message);
                const errorMessage = formatError(error.response.data);
                Swal.fire({
                    title: "Failed!",
                    html: errorMessage,
                    icon: "error"
                })
                dispatch(registerFailedAction(errorMessage));
            });
    };
}

export function minusScoreUserAction(postData) {
    return (dispatch) => {
        minusScoreUser(postData)
            .then((response) => {
                dispatch(minusScoreUserConfirmedAction(response));
            })
            .catch((error) => {
                console.error("error" + error.message);
                const errorMessage = formatError(error.response);
                dispatch(minusScoreUserFailedAction(errorMessage));
            });
    };
}

export function updateStatusUserAction(postData) {
    return (dispatch) => {
        updateStatusUser(postData)
            .then((response) => {
                dispatch(approveUserConfirmedAction(response.result.data));
                Swal.fire("Approved!", "This user has been approved.", "success");
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                dispatch(minusScoreUserFailedAction(errorMessage));
                Swal.fire("Failed!", "This user has been failed for approve." + errorMessage, "error");
            });
    };
}

export function changePasswordUserAction(postData, history) {
    return (dispatch) => {
        changePasswordUser(postData)
            .then((response) => {
                dispatch(approveUserConfirmedAction(response.result));
                Swal.fire({
                    title: "Changed!",
                    html: "This user's password has been changed. Please login again!!!",
                    icon: "success"
                }).then((login) => {
                    if (login) {
                        history.push('/page-login')
                    }
                })
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                Swal.fire("Failed!", errorMessage, "error");
                dispatch(changePasswordUserFailedAction(errorMessage));
            });
    };
}

export function deleteUserAction(postData, history) {
    return (dispatch) => {
        deleteUser(postData)
            .then((response) => {
                dispatch(deleteUserConfirmedAction(response));
                if (response.errorcode !== 0) {
                    Swal.fire("Failed!", response.messagedetail, "error");
                } else {
                    Swal.fire("Succeed!", "This user have been deleted", "success")
                        .then((deleted) => {
                            if (deleted) {
                                history.push('/user-list')
                            }
                        })
                }
            })
            .catch((error) => {
                console.error("Error" + JSON.stringify(error.response))
                const errorMessage = formatError(error.response.data);
                Swal.fire("Failed!", errorMessage, "error");
                dispatch(deleteUserFailedAction(errorMessage));
            });
    };
}

export function changeAvatarUserAction(postData) {
    return (dispatch) => {
        changeAvatarUser(postData)
            .then((response) => {
                if (response.errorcode !== 0) {
                    Swal.fire("Failed!", response.messagedetail, "error");
                }
                dispatch(changeAvatarUserConfirmAction(response));
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                Swal.fire("Failed!", errorMessage, "error");
                dispatch(deleteUserFailedAction(errorMessage));
            });
    };
}