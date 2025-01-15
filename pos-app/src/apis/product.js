import axios from 'axios';
// 기본 URL 설정
axios.defaults.baseURL = "/api"

// 목록
export const list = () => axios.get(`/products`)

// 등록
export const insert = (formData, headers) => axios.post("/products", formData, headers)

// 수정
export const update = (formData, headers) => axios.put("/products", formData, headers)

// 삭제
export const remove = (id) => axios.delete(`/products/${id}`)