import api from "./api"


// 목록
export const list = (id) => api.get(`/pos/carts`)

// 조회
export const select = (id) => api.get(`/pos/carts/${id}`)

// 등록
export const insert = (formData, usersId) => api.post(`/pos/carts/${usersId}`, formData)

// 수정
export const update = (formData) => api.put("/pos/carts", formData)

// 삭제
export const remove = (id) => api.delete(`/pos/carts/${id}`)

// 전체 삭제
export const allRemove = (id) => api.delete(`/pos/carts/all/${id}`)

// 증가
export const increment = (id) => api.put(`/pos/carts/plus/${id}`)

// 감소
export const decrement = (id) => api.put(`/pos/carts/minus/${id}`)