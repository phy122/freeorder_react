import api from "./api"


// 목록
export const list = () => api.get(`/qr/orders`)

// 조회
export const select = (id) => api.get(`/qr/orders/${id}`)

// 등록
// export const insert = (title, writer, content) => api.post("boards", {title, writer, content})
export const insert = (formData, headers) => api.post("/qr/orders", formData, headers)

// 수정
export const update = (formData, headers) => api.put("/qr/orders", formData, headers)

// 삭제
export const remove = (id) => api.delete(`/qr/orders/${id}`)