import axiosInstance from './AxiosInstance';

export function postNews(newsData) {
    return axiosInstance.post(
        `/${process.env.REACT_APP_POSTEVENT_ENDPOINT}`,
        newsData
    );
}

export function getNews() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_GETNEWS_ENDPOINT}`,
    );
}

export function formatEvents(newsData) {
    let projects = [];
    for (let key in newsData) {
        projects.push({ ...newsData[key], id: key });
    }

    return projects;
}

export function formatError(errorResponse) {
    if (errorResponse.errorcode !== 0)
        return errorResponse.messagedetail
}