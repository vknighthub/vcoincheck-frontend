import { CONFIRMED_GET_NEW_TOPIC_LIBRARY } from './../actions/types/LibraryType';

const initialState = []

export default function LibraryNewTopicReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_NEW_TOPIC_LIBRARY) {
        state = actions.newtopiclibrary
        return [
            ...state,
        ];
    }
    return state;
}
