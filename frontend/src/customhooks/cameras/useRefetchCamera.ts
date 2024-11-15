import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useRefetchCamera = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: number) => axios.get(`http://localhost:4922/uncannycams/cameras/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [dataQueryKeys.cameras] })
            queryClient.invalidateQueries({ queryKey: [dataQueryKeys.devices] })
        }
    })
}