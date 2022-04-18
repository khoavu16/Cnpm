import axios from "./axiosConfig";

const getAllRestarant = () => {
    return axios.get("/restaurant")
};
const getRestaurant = (id) => {
    return axios.get(`/restaurant/${id}`)
}

export default {
    getAllRestarant,
    getRestaurant
};