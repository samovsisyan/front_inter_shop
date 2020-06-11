// import axios from 'axios';

// const API_URL = "http://localhost:8000/";
//
// export function axiosLoginData(data) {
//     return axios.post(API_URL + "/login",{data})
//     console.log(data);
// }

//
// export function axiosProductsData() {
//     axios.get(`http://localhost:8000/products`)
//         .then(res => { const data = res.data})
//     console.log("datadatadatadatadatadatadatadatadatadatadata", 1111111111)
// }

//


// export const  axiosProductsData = async() => {
//     try {
//         const response = await axios.get('http://localhost:8000/products');
//         console.log("response", response)
//         // const data = await response.json();
//         // // console.log(response);
//         // console.log(data);
//         // return data
//     } catch (error) {
//         console.error(error);
//     }
// }

// export const axiosProductsData = async () => {
//     try {
//         const response = await fetch("http://localhost:8000/prosducts");
//         console.log("response", response)
//
//         const data = await response.json();
//
//         return data;
//     } catch (e) {
//         console.log(e)
//     }
// };

// export const axiosProductsData = async () => {
//     try {
//         const response = await fetch("http://localhost:8000/products");
//         const data = await response.json();
//         console.log("Products DATA RESPONS", data);
//
//         return data;
//
//     } catch (e) {
//         console.log(e)
//     }
// };

// export const fetchProductsData = async () => {
//     try {
//         const response = await fetch("http://localhost:8000/products");
//         console.log("Products response", response);
//         const data = await response.json();
//         console.log("Products DATA RESPONS", data);
//
//         return data;
//
//     } catch (e) {
//         console.log(e)
//     }
// };

export const fetchProductsData = async () => {
    try {
        const response = await fetch("http://localhost:8000/products");
        const data = await response.json();
        console.log("DATA DATA", data)
        return data;
    } catch (e) {
        console.log(e)
    }
};

