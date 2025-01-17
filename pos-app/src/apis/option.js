import api from './api';

// 목록
export const list = () => api.get(`/pos/options`)

// 조회
export const read = (id) => api.get(`/pos/options/${id}`)


// 등록
export const insert = (formData, headers) => api.post("/pos/options", formData, headers)


// 수정
export const update = (formData, headers) => api.put("/pos/options", formData, headers)

// 삭제
export const remove = (id) => api.delete(`/pos/options/${id}`)