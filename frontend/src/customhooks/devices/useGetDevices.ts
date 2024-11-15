import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetDevicesQuery = () => {
    return useQuery({
        queryKey: [dataQueryKeys.devices],
        queryFn: async () => {
            const res = await axios.get("http://localhost:4922/uncannycams")
            return res.data
        }
    })
}  