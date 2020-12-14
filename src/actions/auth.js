import axiosInstance from '../interceptors/headers';

export const LoginUser = (user) => async dispatch => {
    dispatch({type:'LOGGING_IN'})
    axiosInstance.post(`http://${location.hostname}:9000/api/login`,{...user}).then(json => {
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
    axiosInstance.get(`http://${location.hostname}:9000/api/users`).then(json => {
        console.log(json);
    });
    dispatch({ type: "GET_LOGGED_STATUS", payload});
}
