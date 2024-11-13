import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useDeletIdentifier = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(id:number)=>axios.delete(`http://localhost:4922/identifier/${id}`),
        onSuccess:()=>queryClient.invalidateQueries({queryKey:[dataQueryKeys.identifiers]})
    })
}