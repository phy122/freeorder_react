import api from "./api"


// 목록
export const toPaid = (usersId, orderType) => api.get(`/payments/${usersId}/${orderType}`)

// 조회
export const select = (id) => api.get(`/payments/${id}`)

// 등록
export const insert = (formData, headers) => api.post("/payments", formData, headers)

// 수정
export const update = (formData, headers) => api.put("/payments", formData, headers)

// 삭제
export const remove = (id) => api.delete(`/payments/${id}`)