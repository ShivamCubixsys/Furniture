import React from 'react'
import './Header.scss';
import bgImg from '../../images/mainImg.jpg';

const Header = () => {
  return (
    <div className ='main-header'>
        <img src={bgImg} alt="d" className='img'/>
        <h1>My Furniture is<br/>your furiture</h1>
    </div>
  )
}
   
export default Header;