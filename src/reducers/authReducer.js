const intialState = {
    isLoggedIn: false,
    loading: false,
    token: null
}

const auth = (state = intialState, action) => {  
    switch (action.type) {  
      case 'LOGGED_IN':  
        localStorage.setItem('jwtAuthToken', action.payload);
        return  {...state, token: action.payload, isLoggedIn: true, loading: false}
      case 'LOGGING_IN':  
        return {...state, loading:true}
      case 'LOG_OUT':  
        localStorage.setItem('jwtAuthToken', null);
        return {...state, token: null, isLoggedIn: false}
      case 'GET_LOGGED_STATUS': 
        return {...state, ...action.payload}
      default:  
        return state  
    }  
  }  
  export default auth