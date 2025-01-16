import api from './api';

// 목록
export const list = () => api.get(`/pos/categories`)

// 등록
export const insert = (formData, headers) => api.post(`/pos/categories`, formData, headers)

// 수정
export const update = (formData, headers) => api.put(`/pos/categories`, formData, headers)

// 삭제
export const remove = (id) => api.delete(`/pos/categories/${id}`)