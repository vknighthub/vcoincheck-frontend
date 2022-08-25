import { CONFIRMED_GET_CATALYST_KNOWLEDGE } from './../actions/types/LibraryType';

const initialState = []

export default function CAKReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_CATALYST_KNOWLEDGE) {
        state = actions.catalystknowledge
        return [
            ...state,
        ];
    }
    return state;
}
