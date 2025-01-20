import api from "./api"


// 목록
export const list = (id) => api.get(`/qr/carts/all/${id}`)

// 옵션 조회
export const selectOption = (id) => api.get(`/qr/carts/option/${id}`)

// 등록
export const insert = (formData, usersId) => api.post(`/qr/carts/${usersId}`, formData)

// 수정
export const update = (formData,usersId) => api.put(`/qr/carts/${usersId}`, formData)

// 삭제
export const remove = (id) => api.delete(`/qr/carts/${id}`)

// 전체 삭제
export const allRemove = (id) => api.delete(`/qr/carts/all/${id}`)