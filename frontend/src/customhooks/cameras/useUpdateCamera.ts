import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { CameraType } from "@/types/type"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useUpdateCamera = (deviceId: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: CameraType) => axios.patch(`http://localhost:4922/cameras/${data.cameraId}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [dataQueryKeys.cameras] })
            queryClient.invalidateQueries({ queryKey: [dataQueryKeys.devices] })
        }
    })
}