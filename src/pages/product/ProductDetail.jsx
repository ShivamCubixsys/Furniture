import React, { useEffect } from 'react'
import './ProductDetail.scss';

import CornerSofa from '../../images/cornersofa.jpg';
import sofaImage from '../../images/sofa.jpg'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';

const product = {
  name: "Indian Sofa Brand",
  price: 5000,
  description: "gula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
  imageUrl: [{img:CornerSofa,id:0},{img:sofaImage,id:1}],
  size: "512 X 512",
  color: "red"
}

const ProductDetail = () => {

  const [count, setCount] = useState(0);
  const [currentIndex,setCurrentIndex] = useState(0);
  let imageList = [];
 
  function check(){
    imageList = [];
    for(let i=0;i<product.imageUrl.length;i++){
      imageList.push(product.imageUrl[i].id);
    }
  }


  useEffect(() => {
  return  check();
  }, []);
  
  return (
    
    <div className='product-detail'>

      <Row className='ne-row'>
        <Col lg={2} sm={12} md={2} style={{ margin: "0", padding: "0" }}>
          <div className='list'>
            {
              product.imageUrl.map((img, index) => {
                return (
                  <div className='list-data' onClick={()=>{
                    console.log("current index is" + index);
                    setCurrentIndex(img.id)
                  }}>
                    <img src={img.img} alt="sfs" className='image-data' />
                  </div>
                );
              })
            }
          </div>
        </Col>
        <Col lg={10} sm={12} md={10} style={{ margin:"0",padding:"0"}}>
          <div className='detail1'>
          <img className='new-img' src={product.imageUrl[currentIndex].img} alt="sfs"/>;
          </div>
        </Col>
      </Row>

      <div className='product-other'>
        <h2>{product.name}</h2>
        <p>Rs.{product.price}</p>
      </div>
      <p className='desc'>{product.description}</p>
      <div className='cartButton'>
        <div className='add' onClick={() => {
          setCount(count + 1)
        }}>
          +
        </div>
        <div>
          {count}
        </div>
        <div className='remo' onClick={() => {
          setCount(count == 0 ? 0 : count - 1)
        }}>
          -
        </div>

      </div>

    </div>
  )
}

export default ProductDetail