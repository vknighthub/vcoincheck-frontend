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
    "name": { en: "Home", vn: "Trang Chủ", jp: "家" },
    "path": "/",
    "class": "ai-icon",
    "icon": "flaticon-381-networking",
    "menu_sub": []
},
{
    "name": { en: "Project", vn: "Dự án", jp: "計画" },
    "path": "#",
    "class": "ai-icon has-arrow",
    "icon": "flaticon-381-television",
    "menu_sub": [
        {
            "name": { en: "Project list", vn: "Danh sách dự án", jp: "市場情報" },
            "path": "/project"
        }
    ]
},
{
    "name": { en: "Market info", vn: "Thông tin thị trường", jp: "としょうかん" },
    "path": "/market-info",
    "class": "ai-icon",
    "icon": "flaticon-381-controls-3",
    "menu_sub": []
},
{
    "name": { en: "Library", vn: "Thư viện", jp: "としょうかん" },
    "path": "#",
    "class": "ai-icon has-arrow",
    "icon": "flaticon-381-notepad",
    "menu_sub": [
        {
            "name": { en: "Dictionary", vn: "Từ Điển", jp: "辞書" },
            "path": "/dictionary"
        },
        {
            "name": { en: "Cardano knowledge", vn: "Kiến thức Cardano", jp: "カルダノの知識" },
            "path": "/cardano-knowledge"
        },
        {
            "name": { en: "Blockchain knowledge", vn: "Kiến thức Blockchain", jp: "ブロックチェーンの知識" },
            "path": "/blockchain-knowledge"
        }
    ]
},
{
    "name": { en: "Community", vn: "Cộng đồng", jp: "コミュニティ" },
    "path": "/community",
    "class": "ai-icon",
    "icon": "flaticon-381-settings-2",
    "menu_sub": []
},
{
    "name": { en: "Events", vn: "Tin tức", jp: "イベント" },
    "path": "/event",
    "class": "ai-icon",
    "icon": "flaticon-381-network",
    "menu_sub": []
},
{
    "name": { en: "Faqs", vn: "Câu hỏi thường gặp", jp: "よくある質問" },
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


