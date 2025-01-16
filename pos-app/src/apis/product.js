import api from './api';

// 목록
export const list = (cateId) => api.get(`/pos/products?cate=${cateId}`)

// 등록
export const insert = (formData, headers) => api.post("/pos/products", formData, headers)

// 수정
export const update = (formData, headers) => api.put("/pos/products", formData, headers)

// 삭제
export const remove = (id) => api.delete(`/pos/products/${id}`)