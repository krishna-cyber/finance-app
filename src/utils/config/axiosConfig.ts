import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const axiosInstance : AxiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 10000,
   timeoutErrorMessage: 'Request Timeout',
   maxRate: 5,


  });

  console.log(process.env.API_URL)


//   interceptors

// axiosInstance.interceptors.response.use((response:AxiosResponse) => {
//     return response.data
// },(error:AxiosError) => {
//     if(error.code === "ERR_BAD_REQUEST"){
//         throw error.response
//     }else{
//         //Manipulation of error
//     }
// })


export  {axiosInstance};