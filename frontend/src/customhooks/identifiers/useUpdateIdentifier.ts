import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { FetchedIdentifier } from "@/types/type"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useUpdateIdentifier = (id: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: FetchedIdentifier) => axios.put(`http://localhost:4922/identifier/${data.id}`, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [dataQueryKeys.identifiers] })
    })
}