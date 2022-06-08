import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { addReviewed, approveReviewScore, formatData, formatError, getAllListReview, getListReviewByProject, getReviewListByID, getReviewListByUsernameProjectname } from '../../services/ReviewService';
import HandleError from './../../jsx/components/vKnightHub/ErrorManagement/HandleError';
import {
    CONFIRMED_ADD_REVIEW, CONFIRMED_GET_ADVANCE, CONFIRMED_GET_BASIC, CONFIRMED_GET_REVIEWLIST,
    CONFIRMED_GET_REVIEWLIST_BY_ID,
    CONFIRMED_GET_REVIEWLIST_BY_USER_PROJECT,
    CONFIRMED_GET_SCORE_REVIEW, FAILED_ADD_REVIEW, LOADING_TOGGLE_ACTION
} from './types/ReviewProjectType';
import { CONFIRMED_BONUSSCORE_USER } from './types/UserType';



export function confirmedGetBasicAction(basicquestion) {
    return {
        type: CONFIRMED_GET_BASIC,
        basicquestion,
    };
};

export function confirmedGetAdvanceAction(advancequestion) {
    return {
        type: CONFIRMED_GET_ADVANCE,
        advancequestion,
    };
};

export function confirmedReviewAction(reviewresponses) {
    return {
        type: CONFIRMED_ADD_REVIEW,
        reviewresponses,
    };
};

export function failedReviewAction(data) {
    return {
        type: FAILED_ADD_REVIEW,
        result: data,
    };
};

export function confirmedGetReviewAction(listreview) {
    return {
        type: CONFIRMED_GET_REVIEWLIST,
        listreview,
    };
};


export function confirmedGetReviewListID(listreviewbyID) {
    return {
        type: CONFIRMED_GET_REVIEWLIST_BY_ID,
        payload: listreviewbyID,
    };
};

export function confirmedGetReviewListUserProject(listreviewbyUserProject) {
    return {
        type: CONFIRMED_GET_REVIEWLIST_BY_USER_PROJECT,
        payload: listreviewbyUserProject
    };
};


export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
};

export function confirmedScoreReviewAction(scorereview) {
    return {
        type: CONFIRMED_GET_SCORE_REVIEW,
        payload: scorereview
    };
};

export function bonusScoreUserConfirmedAction(data) {
    return {
        type: CONFIRMED_BONUSSCORE_USER,
        payload: data,
    };
};


export function addReviewAction(postData, actions) {
    return (dispatch) => {
        addReviewed(postData).then((response) => {
            dispatch(confirmedReviewAction(response.result.data));
            actions(true);
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(failedReviewAction(errorMessage));
            Swal.fire("Failed!", errorMessage, "error");
        });
    };
};

export function getAllReviewsAction(history) {
    return (dispatch) => {
        getAllListReview().then((response) => {
            let listreview = formatData(response.result.data);
            dispatch(confirmedGetReviewAction(listreview));
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


export function getReviewsByProjectAction(postData) {
    return (dispatch) => {
        getListReviewByProject(postData).then((response) => {
            let listreview = formatData(response.result.data);
            dispatch(confirmedGetReviewAction(listreview));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};


export function getReviewListFromID(reviewid, userName) {
    return (dispatch) => {
        getReviewListByID(reviewid, userName).then((response) => {
            dispatch(confirmedGetReviewListID(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function approveReviewScoreAction(postData) {
    return (dispatch) => {
        approveReviewScore(postData).then((response) => {
            dispatch(confirmedScoreReviewAction(response));
        }).catch((error) => {
            const errorMessage = formatError(error.response);
            console.error("error" + errorMessage)
        });
    };
};

export function getReviewListByUserProjectAction(postData) {
    return (dispatch) => {
        getReviewListByUsernameProjectname(postData).then((response) => {
            dispatch(confirmedGetReviewListUserProject(response.result.data));
        }).catch((error) => {
            const errorMessage = error.response.data
            if (errorMessage.errorcode !== 0) {
                if (errorMessage.errorcode === 1 || errorMessage.errorcode === 403) {
                    <HandleError errorcode={403} />
                } else {
                    swal("Oops", errorMessage.messagedetail, "error");
                }
            }
        });
    };
};


