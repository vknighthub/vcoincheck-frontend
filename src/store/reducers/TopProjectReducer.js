import { CONFIRMED_GET_TOP_PROJECTS  } from '../actions/types/ProjectType';

const initialState = []

export default function TopProjectReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_TOP_PROJECTS) {
        state = actions.topproject
        return [
            ...state,
        ];
    }
    return state;
}
