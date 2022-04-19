import { CONFIRMED_GET_REVIEWLIST  } from '../actions/types/ReviewProjectType';

const initialState = []

export default function ReviewListReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_REVIEWLIST) {
        state = actions.listreview
        return [
            ...state,
        ];
    }
    return state;
}
