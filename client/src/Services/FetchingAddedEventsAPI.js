import Axios from 'axios'

export const fetchingAddedEventsAPI = async () => {
    try {
        const res = await Axios.get(`${import.meta.env.VITE_SERVER_URL}/event/fetchEvents`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });
        return { success: res.data.success, message: res.data.message, eventData : res.data.success && res.data.eventDocument }
    } catch (error) {
        console.log(error)
        if (error.response && error.response.data) {
            return {
                success: false,
                message: error.response.data.message || "something went wrong",
            };
        }
        return {
            success: false,
            message: error.message || "Network error occured",
        };

    }
}