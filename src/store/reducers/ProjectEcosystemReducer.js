import { CONFIRMED_GET_PROJECTS_ECOSYSTEM } from '../actions/types/ProjectType';


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
    ecosystem_infor: {
        ecoid: 0,
        shortname: '',
        econame: '',
        description: ''
    }
}


export default function ProjectEcosystemReducer(state = initialState, actions) {
    if (actions.type === CONFIRMED_GET_PROJECTS_ECOSYSTEM) {
        state = actions.payload
        return {
            ...state,
        };
    }
    return state;
}
