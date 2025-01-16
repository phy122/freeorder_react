import api from "./api"


// 목록
export const list = () => api.get(`/qr/payments`)

// 조회
export const select = (id) => api.get(`/qr/payments/${id}`)

// 등록
export const insert = (formData, headers) => api.post("/qr/payments", formData, headers)

// 수정
export const update = (formData, headers) => api.put("/qr/payments", formData, headers)

// 삭제
export const remove = (id) => api.delete(`/qr/payments/${id}`)