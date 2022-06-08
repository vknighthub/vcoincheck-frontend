import { CONFIRMED_GET_PROJECTS_MANAGEMENT } from '../actions/types/ProjectType';

const initialState = []

export default function ProjectManagementReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_PROJECTS_MANAGEMENT) {
        state = actions.projects
        return [
            ...state,
        ];
    }
    return state;
}
