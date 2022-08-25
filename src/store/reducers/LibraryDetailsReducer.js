import { CONFIRMED_GET_LIBRARY_DETAIL } from '../actions/types/LibraryType';

const comment = [
    {
        username: '',
        comId: '',
        fullName: '',
        avatarUrl: '',
        text: '',
        libraryid: '',
        date: '',
        replies: [
        ]
    }
]

const initialState = {
    library_infor: {
        id: '',
        name: '',
        title: {
            en: '',
            vn: '',
            jp: ''
        },
        pubdt: '',
        image: '',
        summary: {
            en: '',
            vn: '',
            jp: ''
        },
        content: {
            en: '',
            vn: '',
            jp: ''
        },
        catid: 1,
        catname: '',
        username: '',
        fullname: '',
        status: '',
        createdt: '',
        noofview: 0,
        keyen: 0,
        keyvn: 0,
        keyjp: 0
    },
    comment_infor: comment

}

export default function LibraryDetailsReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_LIBRARY_DETAIL) {
        state = actions.payload
        return {
            ...state,
        };
    }
    return state;
}
