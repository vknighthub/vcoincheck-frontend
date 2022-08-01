import { CONFIRMED_GET_NEWS_EVENTS  } from '../actions/types/NewsType';

const initialState = []

export default function NewsReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_NEWS_EVENTS) {
        state = actions.news
        return [
            ...state,
        ];
    }
    return state;
}
