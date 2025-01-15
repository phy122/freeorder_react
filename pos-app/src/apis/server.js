import api from "./api";

export const statusGet = () => api.get(`/servers`)

export const statusChange = (status) => {
    const data = {
        status: status
    }
    return api.post(`/servers`,data)
}

