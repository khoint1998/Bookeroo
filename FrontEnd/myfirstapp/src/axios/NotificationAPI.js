import { userAxios } from "./axiosClient";
import useSWR from 'swr';

const fetcher = (url) => userAxios()
.get(url, { headers: { Authorization: `${localStorage.jwtToken}` } })
.then((res) => res.data);

export const GetNotificationsByUserId = (userId) => {
    const { data, error } = useSWR('notifications/getNotification/' + userId, fetcher);
  
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    }
}