import Axios from 'axios'

export const addEventAPI = async (data) => {
    try {
        const res = await Axios.post(`${import.meta.env.VITE_SERVER_URL}/event/add`, data, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });
        return { success: res.data.success, message: res.data.message }
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