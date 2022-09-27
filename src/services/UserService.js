import axiosInstance from '../services/AxiosInstance';

export function getUser() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_USERLIST_ENDPOINT}`,
    );
}

export function getUserRole() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_USERROLE_ENDPOINT}`,
        
    );
}

export function minusScoreUser(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_MINUSSCORE_USER_ENDPOINT}`,
        postData

    );
}

export function updateStatusUser(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_APPROVE_ENDPOINT}`,
        postData

    );
}

export function changePasswordUser(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_CHANGE_PASSWORD_USER_ENDPOINT}`,
        postData
    );
}

export function deleteUser(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_DELETE_USER_ENDPOINT}`,
        postData
    );
}

export function changeAvatarUser(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_CHANGE_AVATAR_USER_ENDPOINT}`,
        postData
    );
}

export function getUserDetail(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_USER_DETAIL_ENDPOINT}`,
        postData
    );
}

export function setUserRoleForUser(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_SET_USER_ROLE_ENDPOINT}`,
        postData
    );
}
export function removeUserRoleForUser(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_REMOVE_USER_ROLE_ENDPOINT}`,
        postData
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
    if (errorResponse.errorcode !== 0)
    return errorResponse.messagedetail
}

export function registerUser(postData) {
    return axiosInstance.post(
        `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_REGISTER_ENDPOINT}`,
        postData,
    );
}