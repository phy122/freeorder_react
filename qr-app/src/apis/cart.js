import api from "./api"


// 목록
export const list = () => api.get(`/qr/carts`)

// 조회
export const select = (id) => api.get(`/qr/carts/${id}`)

// 등록
export const insert = (formData, headers) => api.post("/qr/carts", formData, headers)

// 수정
export const update = (formData, headers) => api.put("/qr/carts", formData, headers)

// 삭제
export const remove = (id) => api.delete(`/qr/carts/${id}`)