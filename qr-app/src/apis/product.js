import api from './api';

// 목록
export const list = () => api.get(`/qr/products`)

// 조회
export const select = (id) => api.get(`/qr/products/${id}`)