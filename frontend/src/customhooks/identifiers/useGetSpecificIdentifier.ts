import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetSpecificIdentifier = (id:number)=>{
    return useQuery({
        queryKey:[dataQueryKeys.identifiers,id],
        queryFn:async()=> axios.get(`http://localhost:4922/identifier/${id}`)
    })
}