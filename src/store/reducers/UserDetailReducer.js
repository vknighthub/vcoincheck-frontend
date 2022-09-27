import { CONFIRMED_GET_USERDETAIL } from '../actions/types/UserType';

const review = [
    {
        project_info: '',
        review_info: []
    }
]

const initialState = {
    username: '',
    firstname: '',
    lastname: '',
    gender: 1,
    address: '',
    email: '',
    birthday: null,
    phone: '',
    status: '',
    usercreated: '',
    datecreated: null,
    expiretime: null,
    isshow: null,
    failnumber: null,
    token: '',
    token_type: '',
    fastmode: '',
    scores: 0,
    avatar: '',
    isadmin: false,
    routes: null,
    menu: null,
    role_list: [],
    project_list: [],
    list_review: review
};

export default function UserDetailReducer(state = initialState, action) {
    if (action.type === CONFIRMED_GET_USERDETAIL) {
        state = action.payload
        return {
            ...state,
        };
    }

    return state;

}


