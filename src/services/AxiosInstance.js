import axios from 'axios';
import store from '../store/store';
import queryString from 'query-string';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    }, 
    paramsSerializer: params => queryString.stringify(params),
});

axiosInstance.interceptors.request.use(async(config) => {
    const state = store.getState();
    const token = state.auth.auth.result.token;
    config.params = config.params || {};
    config.headers ={
        'Authorization': `Bearer ${token}`,
    }
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    if (response && response.data){
        return response.data;
    }
    return response;
},(error) => {
    throw error;
});

export default axiosInstance;
