import { CONFIRMED_ADD_REVIEW } from '../actions/types/ReviewProjectType';

const initialState = {}

export default function ReviewReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_ADD_REVIEW) {
        state = actions.reviewresponses
        return {
            ...state,
        };
    }
    return state;
}
