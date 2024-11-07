import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { httpClient } from "./client"

export const useDeleteDevice = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(id:number)=>httpClient.delete(`/${id}`),
        onSuccess:()=> queryClient.invalidateQueries({queryKey:[dataQueryKeys.devices]})
    })
} 