import Swal from 'sweetalert2';
import {
    formatError, formatHotProject, formatProject, formatTopProject, getHotProject, getProject, getProjectDetails, getTopProject
} from '../../services/ProjectService';
import { CONFIRMED_GET_HOT_PROJECTS, CONFIRMED_GET_PROJECTS, CONFIRMED_GET_PROJECTS_DETAIL, CONFIRMED_GET_TOP_PROJECTS } from './types/ProjectType';


export function confirmedGetProjectAction(projects) {
    return {
        type: CONFIRMED_GET_PROJECTS,
        projects,
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
                console.log("error" + JSON.stringify(error))
                const errorMessage = formatError(error.response.data);
                console.error("error" + errorMessage);
            }

        });
    };
};

export function getProjectDetailAction(projectName,history) {
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

