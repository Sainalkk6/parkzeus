import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { DeviceType } from "@/types/type"
import axios from "axios"

export const useEditDevice = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: DeviceType) => axios.put(`http://localhost:4922/uncannycams/${data.id}`, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [dataQueryKeys.devices] })
    })
}