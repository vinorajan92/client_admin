import axios from 'axios';

export const loginUser = (user)=>{
    return axios.post(`http://localhost:9000/api/login`,{...user})
}