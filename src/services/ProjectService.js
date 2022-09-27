import axiosInstance from '../services/AxiosInstance';

export function getProject() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_PROJECTLIST_ENDPOINT}`,
    );
}
export function getProjectManagement() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_PROJECTMANAGEMENTLIST_ENDPOINT}`,
    );
}
export function getProjectType() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_GET_PROJECT_TYPE_ENDPOINT}`
    );
}
export function getEcosystem() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_GET_ECOSYSTEM_ENDPOINT}`
    );
}
export function getHotProject() {
    return axiosInstance.post(
        `/${process.env.REACT_APP_HOTPROJECT_ENDPOINT}`,
        { top: 6 }
    );
}

export function getProjectDetails(projectName) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_PROJECTDETAIL_ENDPOINT}`,
        { proname: projectName }
    );
}
export function getTopProject(tops) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_HOTPROJECT_ENDPOINT}`,
        { top: tops }
    );
}
export function submitProject(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_SUBMIT_PROJECT_ENDPOINT}`,
        postData
    );
}
export function approveProject(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_APPROVE_PROJECT_ENDPOINT}`,
        postData
    );
}
export function removeProject(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_REMOVE_PROJECT_ENDPOINT}`,
        postData
    );
}
export function editProject(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_SUBMIT_EDIT_ENDPOINT}`,
        postData
    );
}



export function formatProject(projectData) {
    let projects = [];
    for (let key in projectData) {
        projects.push({ ...projectData[key], id: key });
    }

    return projects;
}

export function formatHotProject(projectData) {
    let hotproject = [];
    for (let key in projectData) {
        hotproject.push({ ...projectData[key], id: key });
    }
    return hotproject;
}

export function formatTopProject(projectData) {
    let topproject = [];
    for (let key in projectData) {
        topproject.push({ ...projectData[key], id: key });
    }
    return topproject;
}

export function formatProjectDetail(projectData) {
    let projectDetail = [];
    projectDetail[0] = { ...projectData }
    return projectDetail;
}

export function formatError(errorResponse) {
    if (errorResponse.errorcode !== 0)
        return errorResponse.messagedetail
}

export function setFeaturedProject(projectData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_SET_FEATURED_ENDPOINT}`,
        projectData
    );
}

export function getProjectByEcosystem(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_PROJECT_ECOSYSTEM}`,
        postData
    );
}

export function getProjectByType(postData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_GET_PROJECT_TYPE}`,
        postData
    );
}