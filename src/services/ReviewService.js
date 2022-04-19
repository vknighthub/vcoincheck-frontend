import axiosInstance from './AxiosInstance';

export function approveReviewScore(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_APPROVE_REVIEWSCORE_ENDPOINT}`,
        postData,
    );
}

export function getReviewListByID(reviewID, userName) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_REVIEWLISTBYID_ENDPOINT}`,
        { reviewid: reviewID, username: userName },
    );
}

export function getReviewListByUsernameProjectname(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_PROJECUSERREVIEWLIST_ENDPOINT}`,
        postData,
    );
}



export function formatData(data) {
    let list = [];
    for (let key in data) {
        list.push({ ...data[key], id: key });
    }

    return list;
}
export function formatError(errorResponse) {
    if (errorResponse.errorcode !== 0) {
        return errorResponse.messagedetail
    }
}
export function addReviewed(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_ADDREVIEW_ENDPOINT}`,
        postData,
    );
}

export function getAllListReview() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_GETALLREVIEW_ENDPOINT}`,
    );
}

export function getListReviewByProject(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GETREVIEW_PROJECT_ENDPOINT}`,
        postData
    );
}

export function getScoreReview(reviewID) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GETSCOREVIEW_ENDPOINT}`,
        { reviewid: reviewID }
    );
}


export function formatScoreDetail(scoreData) {
    let scoreDetail = [];
    scoreDetail[0] = { ...scoreData }
    return scoreDetail;
}