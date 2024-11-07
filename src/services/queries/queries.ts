// This file includes the logic for querying data with React Query using axios. API endpoints functions are imported from Api folder api.ts

import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "../api/api";

const useGetAccounts = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  });
};




export { useGetAccounts };