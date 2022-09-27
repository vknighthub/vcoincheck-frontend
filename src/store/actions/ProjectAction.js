import Swal from 'sweetalert2';
import {
    formatError, formatHotProject, formatProject, formatTopProject, getEcosystem, getHotProject, getProject, getProjectDetails, getProjectManagement, getProjectType, getTopProject, removeProject, submitProject
} from '../../services/ProjectService';
import { approveProject, editProject, setFeaturedProject, getProjectByEcosystem, getProjectByType } from './../../services/ProjectService';
import { CONFIRMED_EDIT_PROJECTS, CONFIRMED_GET_ECOSYSTEM_TYPE, CONFIRMED_GET_HOT_PROJECTS, CONFIRMED_GET_PROJECTS, CONFIRMED_GET_PROJECTS_DETAIL, CONFIRMED_GET_PROJECTS_MANAGEMENT, CONFIRMED_GET_PROJECTS_TYPE, CONFIRMED_GET_TOP_PROJECTS, CONFIRMED_SUBMIT_PROJECTS, CONFIRMED_APPROVE_PROJECTS, CONFIRMED_REMOVE_PROJECTS, CONFIRMED_SET_FEATURED_PROJECTS, CONFIRMED_GET_PROJECTS_ECOSYSTEM, CONFIRMED_GET_PROJECTS_BY_TYPE } from './types/ProjectType';


export function confirmedGetProjectAction(projects) {
    return {
        type: CONFIRMED_GET_PROJECTS,
        projects,
    };
};

export function confirmedGetProjectManagementAction(projects) {
    return {
        type: CONFIRMED_GET_PROJECTS_MANAGEMENT,
        projects,
    };
};

export function confirmedGetProjectTypeAction(projectsType) {
    return {
        type: CONFIRMED_GET_PROJECTS_TYPE,
        projectsType,
    };
};
export function confirmedGetECosystemAction(ecosystemType) {
    return {
        type: CONFIRMED_GET_ECOSYSTEM_TYPE,
        ecosystemType,
    };
};
export function confirmedGetHotProjectAction(hotproject) {
    return {
        type: CONFIRMED_GET_HOT_PROJECTS,
        hotproject
    };
};

export function confirmedGetTopProjectAction(topproject) {
    return {
        type: CONFIRMED_GET_TOP_PROJECTS,
        topproject
    };
};

export function confirmedProjectDetailAction(projectdetail) {
    return {
        type: CONFIRMED_GET_PROJECTS_DETAIL,
        payload: projectdetail
    };
};


export function confirmedSubmitProjectAction(project) {
    return {
        type: CONFIRMED_SUBMIT_PROJECTS,
        payload: project
    };
};
export function confirmedApproveProjectAction(status) {
    return {
        type: CONFIRMED_APPROVE_PROJECTS,
        payload: status
    };
};
export function confirmedRemoveProjectAction(status) {
    return {
        type: CONFIRMED_REMOVE_PROJECTS,
        payload: status
    };
};

export function confirmedEditProjectAction(project) {
    return {
        type: CONFIRMED_EDIT_PROJECTS,
        payload: project
    };
};

export function confirmedSetFeaturedProjectAction(isfeatured) {
    return {
        type: CONFIRMED_SET_FEATURED_PROJECTS,
        payload: isfeatured
    };
};

export function confirmedGetProjectByEcosystemtAction(projecteco) {
    return {
        type: CONFIRMED_GET_PROJECTS_ECOSYSTEM,
        payload: projecteco
    };
};

export function confirmedGetProjectByTypeAction(projectbytype) {
    return {
        type: CONFIRMED_GET_PROJECTS_BY_TYPE,
        payload: projectbytype
    };
};


export function getProjectsAction() {
    return (dispatch) => {
        getProject().then((response) => {
            let projects = formatProject(response.result.data);
            dispatch(confirmedGetProjectAction(projects));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getProjectsManagementAction() {
    return (dispatch) => {
        getProjectManagement().then((response) => {
            let projects = formatProject(response.result.data);
            dispatch(confirmedGetProjectManagementAction(projects));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};


export function getProjectTypesAction() {
    return (dispatch) => {
        getProjectType().then((response) => {
            dispatch(confirmedGetProjectTypeAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};


export function getEcosystemAction() {
    return (dispatch) => {
        getEcosystem().then((response) => {
            dispatch(confirmedGetECosystemAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getHotProjectsAction() {
    return (dispatch) => {
        getHotProject().then((response) => {
            let hotproject = formatHotProject(response.result.data);
            dispatch(confirmedGetHotProjectAction(hotproject));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getTopProjectsAction(tops, history) {
    return (dispatch) => {
        getTopProject(tops).then((response) => {
            let topprojects = formatTopProject(response.result.data);
            dispatch(confirmedGetTopProjectAction(topprojects));
        }).catch((error) => {
            if (error.message === 'Network Error') {
                history.push('/page-error-503')
            } else {
                const errorMessage = formatError(error.response.data);
                console.error("error" + errorMessage);
            }

        });
    };
};

export function getProjectDetailAction(projectName, history) {
    return (dispatch) => {
        getProjectDetails(projectName).then((response) => {
            dispatch(confirmedProjectDetailAction(response.result.data));
        }).catch((error) => {
            if (error.message === "Network Error") {
                history.push('/page-error-500')
            } else {
                const errorMessage = formatError(error.response.data);
                Swal.fire("Failed!", errorMessage, "error");
            }
        });
    };
};


export function submitProjectAction(postData, historySubmit) {
    return (dispatch) => {
        submitProject(postData)
            .then((response) => {
                dispatch(confirmedSubmitProjectAction(response.result.data));
                Swal.fire({
                    title: "Submitted!",
                    html: "Thank you! Your submission has been received and will be reviewed.",
                    icon: "success"
                })
            }).catch((error) => {
                if (error.message === "Network Error") {
                    historySubmit.push('/page-error-cors')
                } else {
                    const errorMessage = formatError(error.response.data);
                    Swal.fire("Failed!", errorMessage, "error");
                }
            });
    };
};
export function approveProjectAction(postData, historyApprove) {
    return (dispatch) => {
        approveProject(postData)
            .then((response) => {
                dispatch(confirmedApproveProjectAction(response.result.data));
                Swal.fire({
                    title: "Approved!",
                    html: "Great! This project will launching into community.Click [Ok] back to Project management",
                    icon: "success"
                }).then((result) => {
                    if (result.value) {
                        historyApprove.push('/project-management')
                    }
                });
            }).catch((error) => {
                if (error.message === "Network Error") {
                    historyApprove.push('/page-error-cors')
                } else {
                    const errorMessage = formatError(error.response.data);
                    Swal.fire("Failed!", errorMessage, "error");
                }
            });
    };
};

export function removeProjectAction(postData, historyRemove) {
    return (dispatch) => {
        removeProject(postData)
            .then((response) => {
                dispatch(confirmedRemoveProjectAction(response.result.data));
                Swal.fire({
                    title: "Removed!",
                    html: "So Sad! This project will be removed from system.Click [Ok] back to Project management",
                    icon: "success"
                }).then((result) => {
                    if (result.value) {
                        historyRemove.push('/project-management')
                    }
                });
            }).catch((error) => {
                if (error.message === "Network Error") {
                    historyRemove.push('/page-error-cors')
                } else {
                    const errorMessage = formatError(error.response.data);
                    Swal.fire("Failed!", errorMessage, "error");
                }
            });
    };
};

export function editProjectAction(postData, historyEdit) {
    return (dispatch) => {
        editProject(postData)
            .then((response) => {
                dispatch(confirmedEditProjectAction(response.result.data));
                Swal.fire({
                    title: "Edited!",
                    html: "Great! Project information have been modified. This project will be come up soon. Click [Ok] back to Project management",
                    icon: "success"
                }).then((result) => {
                    if (result.value) {
                        historyEdit.push('/project-management')
                    }
                });
            }).catch((error) => {
                if (error.message === "Network Error") {
                    historyEdit.push('/page-error-cors')
                } else {
                    const errorMessage = formatError(error.response.data);
                    Swal.fire("Failed!", errorMessage, "error");
                }
            });
    };
};

export function setFeaturedProjectAction(projectcode, historyEdit, t) {
    return (dispatch) => {
        setFeaturedProject(projectcode)
            .then((response) => {
                console.log(response)
                dispatch(confirmedSetFeaturedProjectAction(response.result.data));
                Swal.fire({
                    title: `${t('featured')}`,
                    html: `${t('successfeatured')}`,
                    icon: "success"
                }).then((result) => {
                    if (result.value) {
                        historyEdit.push('/project-management')
                    }
                });
            }).catch((error) => {
                if (error.message === "Network Error") {
                    historyEdit.push('/page-error-cors')
                } else {
                    const errorMessage = formatError(error.response.data);
                    Swal.fire("Failed!", errorMessage, "error");
                }
            });
    };
};


export function getProjectByEcosystemAction(postData) {
    return (dispatch) => {
        getProjectByEcosystem(postData).then((response) => {
            dispatch(confirmedGetProjectByEcosystemtAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getProjectByProTypeAction(postData) {
    return (dispatch) => {
        getProjectByType(postData).then((response) => {
            dispatch(confirmedGetProjectByTypeAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};


