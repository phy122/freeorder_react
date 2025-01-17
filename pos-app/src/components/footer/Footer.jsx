import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigator = useNavigate()

  const onClickGoManagement = () => {
    navigator(`/sale`)
  }

  return (
    <footer>
		<ul className="footer-list">
			<li className="product"><a href="/">상품</a></li>
			<li className="category"><a href="/categories">카테고리</a></li>
			<li className="option"><a href="/options">옵션</a></li>
			<li className="payment"><a href="/payment">결제내역</a></li>
		</ul>
    {/* onClick */}
		<div className="more" onClick={onClickGoManagement}>
			<span className="darkgray material-symbols-outlined">menu</span>
			<a href="/sale">더보기</a>
		</div>
	</footer>
  )
}

export default Footer