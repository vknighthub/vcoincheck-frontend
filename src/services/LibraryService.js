import axiosInstance from './AxiosInstance';
import swal from "sweetalert";

export function getLibrary(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_LIBRARY_ENDPOINT}`,
        postData
    );
}

export function getDictionary(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_DICTIONARY_ENDPOINT}`,
        postData
    );
}

export function formatCK(cardanoknowledge) {
    let ck = [];
    for (let key in cardanoknowledge) {
        ck.push({ ...cardanoknowledge[key], id: key });
    }

    return ck;
}

export function formatBK(blockchainknowledge) {
    let bk = [];
    for (let key in blockchainknowledge) {
        bk.push({ ...blockchainknowledge[key], id: key });
    }

    return bk;
}

export function formatError(errorResponse) {
    if (errorResponse.errorcode !== 0)
        swal("Oops", errorResponse.messagedetail, "error");
}