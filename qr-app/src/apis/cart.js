import api from "./api"


// 목록
export const list = (id) => api.get(`/qr/carts/all/${id}`)

// 조회
export const select = (id) => api.get(`/qr/carts/${id}`)

// 등록
export const insert = (formData, usersId) => api.post(`/qr/carts/${usersId}`, formData)

// 수정
export const update = (formData) => api.put("/qr/carts", formData)

// 삭제
export const remove = (id) => api.delete(`/qr/carts/${id}`)

// 전체 삭제
export const allRemove = (id) => api.delete(`/qr/carts/all/${id}`)