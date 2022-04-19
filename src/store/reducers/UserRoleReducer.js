import { CONFIRMED_GET_USERROLES } from '../actions/types/UserType';

const initialState = []

export default function ProjectsReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_USERROLES) {
        state = actions.userroles
        return [
            ...state,
        ];
    }
    return state;
}