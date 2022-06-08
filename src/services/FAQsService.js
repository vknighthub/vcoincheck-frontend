import axiosInstance from './AxiosInstance';
import swal from "sweetalert";

export function getFAQs() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_GET_FAQ_ENDPOINT}`,
    );
}

export function addFAQs(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_POST_FAQ_ENDPOINT}`,
        postData
    );
}

export function editFAQs(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_EDIT_FAQ_ENDPOINT}`,
        postData
    );
}

export function deleteFAQs(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_DELETE_FAQ_ENDPOINT}`,
        postData
    );
}

export function formatError(errorResponse) {
    if (errorResponse.errorcode !== 0)
        swal("Oops", errorResponse.messagedetail, "error");
}