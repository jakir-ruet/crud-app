import axios from "axios";

const axiosIntance = axios.create({
    baseURL: 'http://localhost:8080'
});

axiosIntance.defaults.headers.post['Content-Type'] = 'application/json';

export default axiosIntance;