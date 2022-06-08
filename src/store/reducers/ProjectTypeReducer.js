import { CONFIRMED_GET_PROJECTS_TYPE } from '../actions/types/ProjectType';

const initialState = []

export default function ProjectTypeReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_PROJECTS_TYPE) {
        state = actions.projectsType
        return [
            ...state,
        ];
    }
    return state;
}
