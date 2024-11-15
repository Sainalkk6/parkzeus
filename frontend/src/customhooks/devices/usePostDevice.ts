import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AccessControlDevicesType } from "@/types/type"
import axios from "axios"

export const usePostDevice = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data:AccessControlDevicesType) => axios.post(`http://localhost:4922/uncannycams`,data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [dataQueryKeys.devices] })
        }
    })
}