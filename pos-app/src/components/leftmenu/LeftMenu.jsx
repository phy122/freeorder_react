import React from 'react'
import { useNavigate } from 'react-router-dom'

const LeftMenu = () => {

  const navigator = useNavigate()

  const onClickGoSale = () => {
    navigator(`/sale`)
  }
  const onClickGoNotice = () => {
    navigator(`/notice`)
  }
  const onClickGoPromotion = () => {
    navigator(`/promotion`)
  }

  return (
    <div className="left-side">
		<div className="left-title">``
			<ul className="list-container">
				<li onClick={ onClickGoSale }><a href="#" className="left-item">매출관리</a></li>
				<li onClick={ onClickGoNotice }><a href="#" className="left-item">공지사항</a></li>
				<li onClick={ onClickGoPromotion }><a href="#" className="left-item">프로모션</a></li>
			</ul>
		</div>
	 </div>
  )
}

export default LeftMenu