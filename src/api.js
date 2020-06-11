import axios from "axios";

export const fetchProductsData = async () => {
    try {
        const response = await fetch("http://localhost:8000/products");
        const data = await response.json();
        console.log("response", data)
        return data;
    } catch (e) {
        console.log(e)
    }
};



export function fetchLoginData (data)  {
    console.log("data.username,data.password", data)

    return axios.post("http://localhost:8000/users/login", {
        username: data.username,
        password: data.password,

    }).then(function (response) {
        const data = response.data;

        console.log("datadatadatadatadatadatadatadatadatadata", data);
        return data
    })
        .catch(function (error) {
            console.log(error);
        });
}

