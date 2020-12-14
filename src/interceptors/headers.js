import axios from 'axios'

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
// perform a task before the request is sent
    console.log('Request was sent');
    let authToken = localStorage.getItem('jwtAuthToken');
    if(authToken){
        config.headers.Authorization =  `Bearer ${authToken}`;
    }
    return config;
}, error => {
// handle the error
    return Promise.reject(error);
});

export default axiosInstance;