import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { IdentifierDataType } from "@/types/type"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const usePostIdentifier = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: any) =>  axios.post(`http://localhost:4922/identifier`, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [dataQueryKeys.identifiers] })
    })
}