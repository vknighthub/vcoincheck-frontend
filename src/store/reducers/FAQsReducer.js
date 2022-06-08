import { CONFIRMED_GET_FAQS  } from '../actions/types/FAQsType';

const initialState = []

export default function FAQsReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_FAQS) {
        state = actions.faq
        return [
            ...state,
        ];
    }
    return state;
}
