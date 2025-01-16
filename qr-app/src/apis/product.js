import api from './api';

// 상품 목록
export const list = (cateId) => api.get(`/qr/products?cate=${cateId}`)

// 카테고리 목록
export const cateList = () => api.get(`/qr/categories`)

// 프로모션 목록
export const noticeList = () => api.get(`/pos/notices`)

// 프로모션 조회
export const noticeSelect = (id) => api.get(`/pos/notices/${id}`)

// 조회
export const select = (id) => api.get(`/qr/products/${id}`)