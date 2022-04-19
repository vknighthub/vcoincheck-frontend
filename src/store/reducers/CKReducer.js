import { CONFIRMED_GET_CARDANO_KNOWLEDGE  } from '../actions/types/LibraryType';

const initialState = []

export default function CKReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_CARDANO_KNOWLEDGE) {
        state = actions.cardanoknowledge
        return [
            ...state,
        ];
    }
    return state;
}
