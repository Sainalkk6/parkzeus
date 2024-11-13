import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetIdentifiers = ()=>{
    return useQuery({
        queryKey: [dataQueryKeys.identifiers],
        queryFn:async()=> axios.get("http://localhost:4922/identifiers")
    })
}