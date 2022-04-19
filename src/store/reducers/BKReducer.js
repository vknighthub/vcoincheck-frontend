import { CONFIRMED_GET_BLOCKCHAIN_KNOWLEDGE  } from '../actions/types/LibraryType';

const initialState = []

export default function BKReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_BLOCKCHAIN_KNOWLEDGE) {
        state = actions.blockchainknowledge
        return [
            ...state,
        ];
    }
    return state;
}
