import Swal from "sweetalert2";
import { postNews,formatError, getNews } from "../../services/NewsService";
import { CONFIRMED_POST_NEWS_EVENTS,CONFIRMED_GET_NEWS_EVENTS } from "./types/NewsType";

export function confirmedPostNewsAction(news) {
    return {
        type: CONFIRMED_POST_NEWS_EVENTS,
        news,
    };
};

export function confirmedGetNewsAction(news) {
    return {
        type: CONFIRMED_GET_NEWS_EVENTS,
        news,
    };
};

export function postNewsAction(postdata,historySubmit,url) {
    return (dispatch) => {
        postNews(postdata).then((response) => {
            dispatch(confirmedPostNewsAction(response.result.data));
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

export function getNewsAction() {
    return (dispatch) => {
        getNews().then((response) => {
            dispatch(confirmedGetNewsAction(response.result.data));
        }).catch((error) => {
            Swal.fire("Failed!", error.message, "error");
        });
    };
};