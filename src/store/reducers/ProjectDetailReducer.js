import { CONFIRMED_GET_PROJECTS_DETAIL } from '../actions/types/ProjectType';

const initialState = {
	project_info: {
		proid: '',
		username: '',
		procd: '',
		proname: '',
		protype: '',
		Ecosystem: '',
		prodescr: '',
		teaminfo: '',
		proicon: '',
		totalreview: '',
		prosts: '',
		usrid: '',
	},
	review_info: [],
	question_info: {
		overquestion: [],
		basicquestion: [],
		advancequestion: [],
		expertquestion: [],
	}
}

export default function ProjectDetailReducer(state = initialState, actions) {
	if (actions.type === CONFIRMED_GET_PROJECTS_DETAIL) {
		state = actions.payload
		return {
			...state,
		};
	}
	return state;
}
