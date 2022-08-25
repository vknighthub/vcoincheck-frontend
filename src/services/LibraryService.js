import axiosInstance from './AxiosInstance';
import swal from "sweetalert";

export function getAllLibrary(language) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_ALL_LIBRARY_ENDPOINT}`,
        language
    );
}

export function getLibrary(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_LIBRARY_ENDPOINT}`,
        postData
    );
}
export function getLibraryTop(postdata) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_TOP_LIBRARY_ENDPOINT}`,
        postdata
    );
}

export function getLibraryNewTopic(postdata) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_NEWTOPIC_LIBRARY_ENDPOINT}`,
        postdata
    );
}

export function getLibraryById(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_LIBRARY_BYID_ENDPOINT}`,
        postData
    );
}
export function getDictionary(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_DICTIONARY_ENDPOINT}`,
        postData
    );
}
export function commentLibrary(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_COMMENT_LIBRARY_ENDPOINT}`,
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

export function postCK(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_ADD_LIBRARY_ENDPOINT}`,
        postData
    );
}
export function postLibrary(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_ADD_LIBRARY_ENDPOINT}`,
        postData
    );
}
export function addLangLibrary(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_ADD_LANG_LIBRARY_ENDPOINT}`,
        postData
    );
}



