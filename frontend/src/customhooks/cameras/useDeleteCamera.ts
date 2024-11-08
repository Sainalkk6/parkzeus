import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useDeleteCamera = (deviceId: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: number) => axios.delete(`http://localhost:4922/cameras/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [dataQueryKeys.devices] })
            queryClient.invalidateQueries({ queryKey: [dataQueryKeys.cameras] })
        }
    })
}