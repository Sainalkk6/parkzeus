import { dataQueryKeys } from "@/data-query-keys/dataQueryKeys"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetEvents = () => {
    return useQuery({
        queryKey: [dataQueryKeys.events],
        queryFn: async () => {
            const res = await axios.get("http://localhost:4922/webhooks/events")
            return res.data
        }
    })
}