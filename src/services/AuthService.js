import axios from 'axios';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    logout,
} from '../store/actions/AuthActions';

export function signUp(email, password) {
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };

    return axios.post(
        `${process.env.REACT_APP_API_URL}/}`,
        postData,
    );
}

export function login(username, password) {
    const postData = {
        username,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_LOGIN_ENDPOINT}`,
        postData,
    );
}

export function forgotPassword(postData) {
    return axios.post(
        `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_RESET_PASSWORD_USER_ENDPOINT}`,
        postData,
    );
}

export function formatError(errorResponse) {
    if (errorResponse.errorcode !== 0)
        swal("Oops", errorResponse.messagedetail, "error");
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, history);
}
