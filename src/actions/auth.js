import axiosInstance from '../interceptors/headers';
import {getUrl, LOGIN_URL} from '../config';

export const LoginUser = (user) => async dispatch => {
    dispatch({type:'LOGGING_IN'})
    axiosInstance.post(getUrl(LOGIN_URL),{...user}).then(json => {
        dispatch({ type: "LOGGED_IN", payload: json.data.token });
    });
}

export const getLoggedStatus = () => async dispatch => {
    let authToken = localStorage.getItem('jwtAuthToken');
    let payload = {};
    if(authToken){
        payload.token = authToken;
        payload.isLoggedIn = true;
    }
    dispatch({ type: "GET_LOGGED_STATUS", payload});
}
