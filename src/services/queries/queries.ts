// This file includes the logic for querying data with React Query using axios. API endpoints functions are imported from Api folder api.ts

import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "../api/api";
import { useAuth } from "@clerk/nextjs";

export async function getSessionToken() {
  const { getToken } = useAuth();
  const token = await getToken();
  return token;
} // This function is used to get the token from the user

const useGetAccounts = (sessionToken: string) => {
  console.log(sessionToken);
  return useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  });
};

export { useGetAccounts };
