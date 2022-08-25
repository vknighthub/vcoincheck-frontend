import Swal from 'sweetalert2';
import { commentLibrary, formatError, getDictionary, getLibrary, getLibraryById, getLibraryNewTopic, getLibraryTop, postCK } from '../../services/LibraryService';
import { addLangLibrary, getAllLibrary, postLibrary } from './../../services/LibraryService';
import { CONFIRMED_GET_BLOCKCHAIN_KNOWLEDGE, CONFIRMED_GET_CARDANO_KNOWLEDGE, CONFIRMED_GET_DICTIONARY_KNOWLEDGE, CONFIRMED_GET_LIBRARY, CONFIRMED_GET_LIBRARY_DETAIL, CONFIRMED_POST_LIBRARY_KNOWLEDGE, CONFIRMED_GET_CATALYST_KNOWLEDGE, CONFIRMED_GET_TOP_LIBRARY, CONFIRMED_GET_NEW_TOPIC_LIBRARY, CONFIRMED_COMMENT_LIBRARY } from './types/LibraryType';


export function confirmedLibraryAction(library) {
    return {
        type: CONFIRMED_GET_LIBRARY,
        library,
    };
};

export function confirmedTopLibraryAction(toplibrary) {
    return {
        type: CONFIRMED_GET_TOP_LIBRARY,
        toplibrary,
    };
};


export function confirmedNewTopicLibraryAction(newtopiclibrary) {
    return {
        type: CONFIRMED_GET_NEW_TOPIC_LIBRARY,
        newtopiclibrary,
    };
};

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

export function confirmedGetCAKAction(catalystknowledge) {
    return {
        type: CONFIRMED_GET_CATALYST_KNOWLEDGE,
        catalystknowledge,
    };
};

export function confirmedGetDictionaryAction(dictionary) {
    return {
        type: CONFIRMED_GET_DICTIONARY_KNOWLEDGE,
        dictionary,
    };
};


export function confirmedPostLibraryAction(library) {
    return {
        type: CONFIRMED_POST_LIBRARY_KNOWLEDGE,
        library,
    };
};

export function confirmedLibraryDetailAction(librarydetail) {
    return {
        type: CONFIRMED_GET_LIBRARY_DETAIL,
        payload: librarydetail
    };
};

export function confirmedCommmentLibraryAction(comment) {
    return {
        type: CONFIRMED_COMMENT_LIBRARY,
        payload: comment
    };
};

export function getLibraryAction(lang) {
    return (dispatch) => {
        getAllLibrary(lang).then((response) => {
            dispatch(confirmedLibraryAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getTopLibraryAction(postdata) {
    return (dispatch) => {
        getLibraryTop(postdata).then((response) => {
            dispatch(confirmedTopLibraryAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getNewTopicLibraryAction(postdata) {
    return (dispatch) => {
        getLibraryNewTopic(postdata).then((response) => {
            dispatch(confirmedNewTopicLibraryAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};



export function getCKAction(postdata) {
    return (dispatch) => {
        getLibrary(postdata).then((response) => {
            dispatch(confirmedGetCKAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getBKAction(postdata) {
    return (dispatch) => {
        getLibrary(postdata).then((response) => {
            dispatch(confirmedGetBKAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function getCAKAction(postdata) {
    return (dispatch) => {
        getLibrary(postdata).then((response) => {
            dispatch(confirmedGetCAKAction(response.result.data));
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

export function postLibraryAction(postdata,historySubmit,url) {
    return (dispatch) => {
        postLibrary(postdata).then((response) => {
            dispatch(confirmedPostLibraryAction(response.result.data));
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

export function addLangLibraryAction(postdata,historySubmit,url) {
    return (dispatch) => {
        addLangLibrary(postdata).then((response) => {
            dispatch(confirmedPostLibraryAction(response.result.data));
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


export function getLibraryByIdAction(postdata) {
    return (dispatch) => {
        getLibraryById(postdata).then((response) => {
            dispatch(confirmedLibraryDetailAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

export function commentLibraryAction(postdata) {
    return (dispatch) => {
        commentLibrary(postdata).then((response) => {
            dispatch(confirmedCommmentLibraryAction(response.result.data));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            console.error("error" + errorMessage);
        });
    };
};

