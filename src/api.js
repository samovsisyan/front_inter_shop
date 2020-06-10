import axios from "axios";

const API_URL = "http://localhost:8000/";

export function axiosLoginData(data) {
    return axios.post(API_URL + "/login",{data})
    console.log(data)
}

