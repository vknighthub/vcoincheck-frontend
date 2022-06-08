import { CONFIRMED_GET_ECOSYSTEM_TYPE } from '../actions/types/ProjectType';

const initialState = []

export default function ECosystemReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_ECOSYSTEM_TYPE) {
        state = actions.ecosystemType
        return [
            ...state,
        ];
    }
    return state;
}
