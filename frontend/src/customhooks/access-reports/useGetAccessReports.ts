import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetAccessReports = ()=>{
    return useQuery({
        queryKey:[dataQueryKeys.reports],
        queryFn:async()=> {
            const res = await axios.get("http://localhost:4922/logReports")
            return res
        }
    })
}

