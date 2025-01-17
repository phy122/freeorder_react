import api from './api';

// 목록
export const list = () => api.get(`/pos/products`)

// 등록
export const insert = (formData, headers) => api.post("/pos/products", formData, headers)

// 수정
export const update = (formData, headers) => api.put("/pos/products", formData, headers)

// 삭제
export const remove = (id) => api.delete(`/pos/products/${id}`)

// 상품 상세 조회
export const getById = (id) => api.get(`/pos/products/${id}`);

// 카테고리 목록 조회
export const getCategories = () => api.get(`/pos/categories`);

