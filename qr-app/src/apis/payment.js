import axios from "axios"

axios.defaults.baseURL = "/api"

// 목록
export const list = () => axios.get(`/qr/payments`)

// 조회
export const select = (id) => axios.get(`/qr/payments/${id}`)

// 등록
export const insert = (formData, headers) => axios.post("/qr/payments", formData, headers)

// 수정
export const update = (formData, headers) => axios.put("/qr/payments", formData, headers)

// 삭제
export const remove = (id) => axios.delete(`/qr/payments/${id}`)