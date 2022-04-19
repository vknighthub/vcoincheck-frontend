import {
    formatError, formatCK, getLibrary, formatBK
} from '../../services/LibraryService';
import {
    CONFIRMED_GET_BLOCKCHAIN_KNOWLEDGE,
    CONFIRMED_GET_CARDANO_KNOWLEDGE
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