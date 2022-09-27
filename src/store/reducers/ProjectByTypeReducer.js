import { CONFIRMED_GET_PROJECTS_BY_TYPE } from '../actions/types/ProjectType';

const project_list = [
    {
        proid: 0,
        username: '',
        fullname: null,
        procd: '',
        proname: '',
        protype: '',
        protypecd: '',
        Ecosystem: '',
        Ecosystemcd: '',
        prodescr: '',
        teaminfo: '',
        proicon: '',
        totalreview: '',
        prosts: '',
        prostscd: '',
        proaprsts: '',
        proaprstscd: '',
        usrid: '',
        scores: '',
        usermodify: null,
        createdt: null,
        modifydate: null,
        featured: 1,
        quality: {
            en: '',
            vn: '',
            jp: ''
        },
        color: ''
    }
]


const initialState = {
    project_list: project_list,
    protype_infor: {
        typeid: 0,
        typecd: '',
        name: '',
        description: ''
    }
}

export default function ProjectByTypeReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_PROJECTS_BY_TYPE) {
        state = actions.payload
        return {
            ...state,
        };
    }
    return state;
}
