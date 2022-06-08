import { CONFIRMED_GET_SCORE_REVIEW } from "../actions/types/ReviewProjectType";

const initialState = {
    scorereview: {
        overreview: 0,
        basicreview: 0,
        advancereview: 0,
        expertreview: 0
    }

}

export default function ScoreReviewReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_SCORE_REVIEW) {
        return {
            ...state,
            scorereview: actions.payload,
        };
    }
    return state;
}
