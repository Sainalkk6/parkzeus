import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { CameraAttributes } from "@/types/type"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const usePostCameras = (deviceId: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: CameraAttributes) => axios.post('http://localhost:4922/uncannycams/cameras', data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [dataQueryKeys.cameras, deviceId] })
            queryClient.invalidateQueries({ queryKey: [dataQueryKeys.devices] })
        }
    })
}