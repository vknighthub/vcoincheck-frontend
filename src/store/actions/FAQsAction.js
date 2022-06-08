import Swal from 'sweetalert2';
import { addFAQs, deleteFAQs, editFAQs, formatError, getFAQs } from '../../services/FAQsService';
import {
    CONFIRMED_ADD_FAQS,
    CONFIRMED_DELETE_FAQS,
    CONFIRMED_EDIT_FAQS,
    CONFIRMED_GET_FAQS
} from './types/FAQsType';



export function confirmedGetFAQsAction(faq) {
    return {
        type: CONFIRMED_GET_FAQS,
        faq,
    };
};

export function confirmedAddFAQsAction(faq) {
	
    return {
        type: CONFIRMED_ADD_FAQS,
        payload: faq,
    };
}

export function confirmedEditFAQsAction(faq) {
	
    return {
        type: CONFIRMED_EDIT_FAQS,
        payload: faq,
    };
}

export function confirmedDeleteFAQsAction(faq) {
	
    return {
        type: CONFIRMED_DELETE_FAQS,
        payload: faq,
    };
}

export function getFAQsAction() {
    return (dispatch) => {
        getFAQs().then((response) => {
            dispatch(confirmedGetFAQsAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function addFAQsAction(postData) {
    return (dispatch) => {
        addFAQs(postData).then((response) => {
            dispatch(confirmedAddFAQsAction(response.result.data));
            Swal.fire("Succeed!", "Successfully Added", "success")
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            Swal.fire("Failed!", errorMessage, "error");
        });
    };
};

export function editFAQsAction(postData) {
    return (dispatch) => {
        editFAQs(postData).then((response) => {
            dispatch(confirmedEditFAQsAction(response.result.data));
            Swal.fire("Succeed!", "Successfully Edited", "success")
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            Swal.fire("Failed!", errorMessage, "error");
        });
    };
};

export function deleteFAQsAction(postData) {
    return (dispatch) => {
        deleteFAQs(postData).then((response) => {
            dispatch(confirmedEditFAQsAction(response.result.data));
            Swal.fire("Succeed!", "Successfully Deleted", "success")
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            Swal.fire("Failed!", errorMessage, "error");
        });
    };
};