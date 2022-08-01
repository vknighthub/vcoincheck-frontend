import Swal from 'sweetalert2';
import { formatBK, formatCK, formatError, getDictionary, getLibrary, postCK } from '../../services/LibraryService';
import {
    CONFIRMED_GET_BLOCKCHAIN_KNOWLEDGE,
    CONFIRMED_GET_CARDANO_KNOWLEDGE,
    CONFIRMED_GET_DICTIONARY_KNOWLEDGE
} from './types/LibraryType';



export function confirmedGetCKAction(cardanoknowledge) {
    return {
        type: CONFIRMED_GET_CARDANO_KNOWLEDGE,
        cardanoknowledge,
    };
};

export function confirmedGetBKAction(blockchainknowledge) {
    return {
        type: CONFIRMED_GET_BLOCKCHAIN_KNOWLEDGE,
        blockchainknowledge,
    };
};

export function confirmedGetDictionaryAction(dictionary) {
    return {
        type: CONFIRMED_GET_DICTIONARY_KNOWLEDGE,
        dictionary,
    };
};



export function getCKAction(postdata) {
    return (dispatch) => {
        getLibrary(postdata).then((response) => {
            let cardanoknowledge = formatCK(response.result.data);
            dispatch(confirmedGetCKAction(cardanoknowledge));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getBKAction(postdata) {
    return (dispatch) => {
        getLibrary(postdata).then((response) => {
            let blockchainknowledge = formatBK(response.result.data);
            dispatch(confirmedGetBKAction(blockchainknowledge));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getDictionaryAction(postdata) {
    return (dispatch) => {
        getDictionary(postdata).then((response) => {
            dispatch(confirmedGetDictionaryAction(response.result.data));
        }).catch((error) => {
            Swal.fire("Failed!", error.message, "error");
        });
    };
};

export function postCKAction(postdata,historySubmit,url) {
    return (dispatch) => {
        postCK(postdata).then((response) => {
            dispatch(confirmedGetCKAction(response.result.data));
            Swal.fire({
                title: "Submitted!",
                html: "Thank you! Your post has been received and will be reviewed.",
                icon: "success"
            }).then((result) => {
                if (result.value) {
                    historySubmit.push(`/${url}`)
                }
            });
        }).catch((error) => {
            if (error.message === "Network Error") {
                historySubmit.push('/page-error-cors')
            } else {
                const errorMessage = formatError(error.response.data);
                Swal.fire("Failed!", errorMessage, "error");
            }
        });
    };
};
