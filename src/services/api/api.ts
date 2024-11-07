import { axiosInstance } from "@/utils/config/axiosConfig";
import {  Response } from "@/utils/types/types";

const getAccounts = async () => {
    return await axiosInstance.get<Response>('/account/users')
};



export { getAccounts };