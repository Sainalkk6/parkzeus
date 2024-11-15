import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"


export const useDeleteDevice = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(id:number)=>axios.delete(`http://localhost:4922/uncannycams/${id}`),
        onSuccess:()=> queryClient.invalidateQueries({queryKey:[dataQueryKeys.devices]})
    })
} 