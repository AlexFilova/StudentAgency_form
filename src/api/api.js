import axios from 'axios';

export const apiOptions = axios.create({
    baseURL:'http://localhost:8000/'
})
export const apiUsers = axios.create({
    baseURL:'http://localhost:8080/'
})