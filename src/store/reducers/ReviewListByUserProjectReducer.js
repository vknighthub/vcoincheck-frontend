import { CONFIRMED_GET_REVIEWLIST_BY_USER_PROJECT } from '../actions/types/ReviewProjectType';

const initialState = {
    user_info: {},
    project_info: {},
    list_review: []
}

export default function ReviewListByUserProjectReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_REVIEWLIST_BY_USER_PROJECT) {
        state = actions.payload
        return {
            ...state,
        };
    }
    return state;
}
