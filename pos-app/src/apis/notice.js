import api from './api';

// 목록
export const list = () => api.get(`/pos/notices`)

// 등록
export const insert = (formData, headers) => api.post(`/pos/notices`, formData, headers)

// 수정
export const update = (formData, headers) => api.put(`/pos/notices`, formData, headers)

// 삭제
export const remove = (id) => api.delete(`/pos/notices/${id}`)