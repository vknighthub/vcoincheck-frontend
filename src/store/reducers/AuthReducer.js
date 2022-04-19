import {
    LOADING_TOGGLE_ACTION,
    LOGIN_CONFIRMED_ACTION,
    LOGIN_FAILED_ACTION,
    LOGOUT_ACTION,
    RESET_PASSWORD_FAILED_ACTION,
    SIGNUP_CONFIRMED_ACTION,
    SIGNUP_FAILED_ACTION
} from '../actions/AuthActions';
import { CONFIRMED_BONUSSCORE_USER, CONFIRMED_CHANGE_AVATAR_USER, CONFIRMED_MNUSSCORE_USER } from '../actions/types/UserType';

let menu = [{
    "name": "Home",
    "path": "/",
    "class": "ai-icon",
    "icon": "flaticon-381-networking",
    "menu_sub": []
},
{
    "name": "Project",
    "path": "#",
    "class": "ai-icon has-arrow",
    "icon": "flaticon-381-television",
    "menu_sub": [
        {
            "name": "Project list",
            "path": "/project"
        }
    ]
},
{
    "name": "Market info",
    "path": "/market-info",
    "class": "ai-icon",
    "icon": "flaticon-381-controls-3",
    "menu_sub": []
},
{
    "name": "Library",
    "path": "#",
    "class": "ai-icon has-arrow",
    "icon": "flaticon-381-notepad",
    "menu_sub": [
        {
            "name": "Dictionary",
            "path": "/dictionary"
        },
        {
            "name": "Cardano knowledge",
            "path": "/cardano-knowledge"
        },
        {
            "name": "Blockchain knowledge",
            "path": "/blockchain-knowledge"
        }
    ]
},
{
    "name": "Community",
    "path": "/community",
    "class": "ai-icon",
    "icon": "flaticon-381-settings-2",
    "menu_sub": []
},
{
    "name": "Events",
    "path": "/event",
    "class": "ai-icon",
    "icon": "flaticon-381-network",
    "menu_sub": []
},
{
    "name": "Faqs",
    "path": "/faq",
    "class": "ai-icon",
    "icon": "flaticon-381-layer-1",
    "menu_sub": []
}]


const initialState = {
    auth: {
        username: '',
        result: {
            token: '',
            isadmin: '',
            username: '',
            firstname: '',
            lastname: '',
            gender: 1,
            address: '',
            email: '',
            birthday: '',
            phone: '',
            status: '',
            usercreated: '',
            datecreated: '',
            isshow: true,
            policyid: 1,
            failnumber: 0,
            scores: 0,
            avatar: '',
            routes: '',
            menu: menu
        },
        localId: '',
        expiresIn: '',
        refreshToken: '',
    },
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};

export function AuthReducer(state = initialState, action) {
    if (action.type === SIGNUP_CONFIRMED_ACTION) {
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Signup Successfully Completed',
            showLoading: false,
        };
    }
    if (action.type === LOGIN_CONFIRMED_ACTION) {
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Login Successfully Completed',
            showLoading: false,
        };
    }

    if (action.type === LOGOUT_ACTION) {
        return {
            ...state,
            errorMessage: '',
            successMessage: '',
            auth: {
                username: '',
                result: {
                    token: '',
                    isadmin: '',
                    routes: '',
                    menu: menu,
                },
                localId: '',
                expiresIn: '',
                refreshToken: '',
                
            },
        };
    }

    if (
        action.type === SIGNUP_FAILED_ACTION ||
        action.type === LOGIN_FAILED_ACTION ||
        action.type === RESET_PASSWORD_FAILED_ACTION
    ) {
        return {
            ...state,
            errorMessage: action.payload,
            successMessage: '',
            showLoading: false,
        };
    }

    if (action.type === LOADING_TOGGLE_ACTION) {
        return {
            ...state,
            showLoading: action.payload,
        };
    }
    if (action.type === CONFIRMED_MNUSSCORE_USER) {
        return {
            ...state,
            auth: action.payload,
        }
    }
    if (action.type === CONFIRMED_BONUSSCORE_USER) {
        return {
            ...state,
            auth: action.payload,
        }
    }
    if (action.type === CONFIRMED_CHANGE_AVATAR_USER) {
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Login Successfully Completed',
            showLoading: false,
        };
    }

    return state;

}


