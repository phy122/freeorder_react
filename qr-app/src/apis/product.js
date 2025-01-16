import axios from 'axios';

// 기본 URL 설정
axios.defaults.baseURL = "/api"

// 목록
export const list = () => axios.get(`/qr/products`)

// 조회
export const select = (id) => axios.get(`/qr/products/${id}`)