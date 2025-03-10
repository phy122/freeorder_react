import api from "./api"


// 결제목록
export const list = (serachOptions)=> api.get(`/pos/payments`,serachOptions)

// 결제하기
export const toPaid = (usersId, orderType) => api.get(`/payments/${usersId}/${orderType}`)

// 조회
export const select = (id) => api.get(`/pos/payments/${id}`)

// 등록
export const confirm = (payment) => api.post("/payments/confirm", payment)

// 수정
export const update = (formData, headers) => api.put("/pos/payments", formData, headers)

// 삭제
export const remove = (id) => api.delete(`/pos/payments/${id}`)