import React from 'react'
import CornerSofa from '../../images/cornersofa.jpg';
import sofa from '../../images/sofa.jpg'
import { Routes, Route, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './category.scss';
import CategoryDetail from '../../pages/CategoryDetail/CategoryDetail';

const catList = [
    {
        name:"Sofa Bed",
        img:sofa,
        para:"sofa-bed",
    },
    {
        name:"Corner Sofa",
        img:CornerSofa,
        para:"corner-sofa"
    },
    {
        name:"Chairs",
        img:sofa,
        para:"chairs"
    },
    {
        name:"Sofas",
        img:CornerSofa,
        para:'sofas',
    },
    {
        name:"Fabric Sofas",
        img:sofa,
        para:"fabric-sofas"
    },
    {
        name:"Leather Sofas",
        img:CornerSofa,
        para:"leather-sofas"
    }
]

const Category = () => {
  return (
    <div className='container'>
        <div className='main-category'>
            {
                catList.map((item,index) => {
                    return(
                       <Link to={`${item.para}`} style={{textDecoration:"none"}}>
                        <Card className='card'>
                        <Card.Img variant="top" src={item.img} className='card-img' />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                      </Card>
                       </Link>
                    );
                })
            }
        </div>
        <Routes>
       
      </Routes>
    </div>
  )
}

export default Category