import { CONFIRMED_GET_REVIEWLIST_BY_ID } from '../actions/types/ReviewProjectType';

const initialState = {
    main_data: [],
    status: '',
    likes: 0,
    userinfor: {
        username: '',
        firstname: '',
        lastname: '',
        gender: 1,
        address: '',
        email: '',
        birthday: '',
        phone: '',
        status: 'N',
        scores: 0,
        avatar: ''
    },
    lastcomment: {},
    comment: [],
    scores: {
        overreview: 0,
        basicreview: 0,
        advancereview: 0,
        expertreview: 0
    },
    activereviewed: "overviewed",
}

export default function ReviewListByIDReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_REVIEWLIST_BY_ID) {
        state = actions.payload
        return {
            ...state
        }
    }
    return state;
}
