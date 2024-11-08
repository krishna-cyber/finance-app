import { axiosInstance } from "@/utils/config/axiosConfig";
import { Response } from "@/utils/types/types";

const getAccounts = async (sessionToken: string) => {
  console.log(sessionToken);
  return await axiosInstance.get<Response>("/account/users", {
    headers: {
      Authorization: `Bearer ${sessionToken}`,
    },
  });
};

export { getAccounts };
