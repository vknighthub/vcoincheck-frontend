import axiosInstance from '../services/AxiosInstance';

export function getProject() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_PROJECTLIST_ENDPOINT}`,
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