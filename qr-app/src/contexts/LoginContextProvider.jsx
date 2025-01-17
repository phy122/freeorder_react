import Cookies from 'js-cookie'
import React, { createContext, useEffect, useState } from 'react'

// Context 생성
export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {

  // 사용자 정보
  const [usersId, setUsersId] = useState(localStorage.getItem("usersId") ?? '')

  useEffect(() => {
    // 쿠키에서 usersId 꺼내기
    const usersId = Cookies.get('usersId')
    if (usersId != null) {
      setUsersId(usersId)
      localStorage.setItem("usersId",usersId)
    }
    else {
      const newUsersId = crypto.randomUUID()
      Cookies.set('usersId', newUsersId, { expires: 5 })
      localStorage.setItem("usersId",newUsersId)
    }
  }, [])

  return (
    <LoginContext.Provider value={{ usersId }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider