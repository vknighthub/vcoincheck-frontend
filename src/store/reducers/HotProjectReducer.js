import { CONFIRMED_GET_HOT_PROJECTS  } from '../actions/types/ProjectType';

const initialState = []

export default function HotProjectReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_HOT_PROJECTS) {
        state = actions.hotproject
        return [
            ...state,
        ];
    }
    return state;
}
