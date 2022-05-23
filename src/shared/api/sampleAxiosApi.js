import axios from 'axios';

export const getPost = id =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = id =>
    axios.get(`https://jsonplaceholder.typicode.com/users`);

export const getUserData = (index = "") =>{
    return axios({
         url: '/api/',
         method: "GET"
     });
}

export const UserLogin = (data) => {
    return axios({
        url: '/api/login',
        method: 'post',
        data: data
    })
}


