import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export const useGetCamera = (id: number) => {
    return useQuery({
        queryKey: [dataQueryKeys.cameras, id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:4922/uncannycams/cameras/${id}`)
            return res
        }
    })
}