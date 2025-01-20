import React, { useContext, useState } from 'react'
import '../login.css'
import * as auth from '../apis/auth'
import { LoginContext } from '../contexts/LoginContextProvider'
const LoginContainer = () => {

  const {login} = useContext(LoginContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const onLogin = (e) => {
    e.preventDefault()
    console.log(`로그인 시도...`)
    login(username, password)
  }
  return (
    <div className="container" id='login-page'>
      <div className="content-wrap">
        <div className="logo">
          <img src="/img/qrHall.png" alt="이미지" width="100px" />
        </div>
        <form onSubmit={onLogin}>
          <div className="form-floating">
            <label htmlFor="username">아이디</label>
            <input type="text" className="form-control" id="username" name="id" onChange={changeUsername} defaultValue={username} placeholder="아이디" autoFocus />
          </div>
          <div className="form-floating">
            <label htmlFor="password">비밀번호</label>
            <input type="password" className="form-control" id="password" name="pw" onChange={changePassword} defaultValue={password} placeholder="비밀번호" />
          </div>
          <button className="login-btn" type="submit">로그인</button>
        </form>
      </div>
    </div>
  )
}

export default LoginContainer