import axios from "./axiosConfig";

const getAllRestarant = () => {
    return axios.get('/restaurant')
};

export default {
    getAllRestarant
};