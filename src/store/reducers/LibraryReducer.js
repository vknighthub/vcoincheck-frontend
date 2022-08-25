import { CONFIRMED_GET_LIBRARY } from './../actions/types/LibraryType';

const initialState = []

export default function LibraryReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_LIBRARY) {
        state = actions.library
        return [
            ...state,
        ];
    }
    return state;
}
