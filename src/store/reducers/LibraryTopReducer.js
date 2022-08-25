import { CONFIRMED_GET_TOP_LIBRARY } from '../actions/types/LibraryType';

const initialState = []

export default function LibraryTopReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_TOP_LIBRARY) {
        state = actions.toplibrary
        return [
            ...state,
        ];
    }
    return state;
}
