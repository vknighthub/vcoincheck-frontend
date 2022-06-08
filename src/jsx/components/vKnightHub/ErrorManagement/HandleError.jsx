import { ERR_400, ERR_403, ERR_404, ERR_500, ERR_503, ERR_CORS } from '../../../../config/constants/error';


const HandleError = (errorcode, history) => {
    if (errorcode === ERR_400) {
        history.push('/page-error-400')
    }
    if (errorcode === ERR_403) {
        history.push('/page-error-403')
    }
    if (errorcode === ERR_404) {
        history.push('/page-error-403')
    }
    if (errorcode === ERR_500) {
        history.push('/page-error-500')
    }
    if (errorcode === ERR_503) {
        history.push('/page-error-503')
    }
    if (errorcode === ERR_CORS) {
        return history.push('/page-error-cors')
    }
}

export default HandleError
