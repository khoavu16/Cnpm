import axios from "./axiosConfig";

const getAllFood = () => {
    return axios.get('/food')
};

export default {
    getAllFood
};