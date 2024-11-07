import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { httpClient } from "./client"
import { DeviceType } from "@/types/type"

export const useEditDevice = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: DeviceType) => httpClient.put(`/${data.id}`, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [dataQueryKeys.devices] })
    })
}