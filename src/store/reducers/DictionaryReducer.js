import { CONFIRMED_GET_DICTIONARY_KNOWLEDGE  } from '../actions/types/LibraryType';

const initialState = []

export default function DictionaryReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_DICTIONARY_KNOWLEDGE) {
        state = actions.dictionary
        return [
            ...state,
        ];
    }
    return state;
}
