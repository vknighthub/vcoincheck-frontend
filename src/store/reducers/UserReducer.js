import { CONFIRMED_GET_USERS } from '../actions/types/UserType';

const initialState = []

export default function UsersReducer(state = initialState, action) {
    if (action.type === CONFIRMED_GET_USERS) {
        state = action.users
        return [
            ...state,
        ];
    }
    
    return state;
}