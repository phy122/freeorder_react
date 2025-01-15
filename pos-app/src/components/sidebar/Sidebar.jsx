import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-title">
          <img src="/img/header/logo.png" alt="" className="logo-img" />
          <a href="#">FreeOrder</a>
        </div>
        <div className="sidebar-alarm" id="order-alarm">
          <span className="material-symbols-outlined">notifications</span>
          <a href="#">새로운 주문이 있습니다.</a>
        </div>
        <div id="side-order-list"></div>
      </div>
      <audio id="alarm-sound" src="/audio/alarm.mp3" controls preload="auto"></audio>
    </>
  )
}

export default Sidebar