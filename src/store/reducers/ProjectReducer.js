import { CONFIRMED_GET_PROJECTS  } from '../actions/types/ProjectType';

const initialState = []

export default function ProjectsReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_PROJECTS) {
        state = actions.projects
        return [
            ...state,
        ];
    }
    return state;
}
