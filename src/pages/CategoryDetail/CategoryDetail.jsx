import React from 'react'
import './CategoryDetail.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const newList = [
  {
    name:"Type",
    filter:[
      {
        value:'Sofa bed',
        para:'sofa-bed'
      },
      {
        value:'Corner sofa',
        para:'corner-sofa'
      },
      {
        value:'Leather sofa',
        para:'leather-sofa'
      },
  
    ]
  },
    {
      name:"Color",
      filter:[
        {
          value:"Red",
          para:"red"
        },
        {
          value:"Blue",
          para:"blue"
        }
      ]
    },
    {
      name:"Size",
      filter:[
        {
          value:"1 Seater",
          para:"1-seater"
        },
        {
          value:"2 Seater",
          para:"2-seater"
        }
      ]
    }
]


const productList = [
  {
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
  {
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
  {
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
]

const CategoryDetail = () => {
  console.log("category detail screen");
  return (
    <div className='category-detail'>
        <Row>
          <div>
            { 
            newList.map((item,index)=>{
              return(
                <Col sm={4}>
            <p>{item.name}</p>
           </Col>

              );
            })
            }
          </div>
          <Col sm={8}>sm=8</Col>
      </Row>
    </div>
  )
}

export default CategoryDetail 