import React from 'react'
import Header from '../../component/Header/Header'
import Category from '../../component/Category/category'
import Footer from '../../component/Footer/Footer'

const Home = () => {
  return (
    <div style={{backgroundColor:"#ebeef2"}}>
 <Header/>
 <p style={{textAlign:"center",paddingTop:"15px",paddingLeft:'10px',paddingRight:'10px'}}>Welcome to My Furniture. Home of quality, handcrafted sofas, corner sofas, sofa beds & more.</p>
    <Category/>
    <Footer/>
    </div>
  
   
  )
}

export default Home