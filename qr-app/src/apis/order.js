import axios from "axios"

axios.defaults.baseURL = "/api"

// 목록
export const list = () => axios.get(`/qr/orders`)

// 조회
export const select = (id) => axios.get(`/qr/orders/${id}`)

// 등록
// export const insert = (title, writer, content) => axios.post("boards", {title, writer, content})
export const insert = (formData, headers) => axios.post("/qr/orders", formData, headers)

// 수정
export const update = (formData, headers) => axios.put("/qr/orders", formData, headers)

// 삭제
export const remove = (id) => axios.delete(`/qr/orders/${id}`)