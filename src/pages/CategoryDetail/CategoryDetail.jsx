import React from 'react'
import './CategoryDetail.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


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
    id:"1",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id:"2",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
  { id:"3",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
  {
    id:"4",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id:"5",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {id:"6",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
  {
    id:"7",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
  {
    id:"8",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id:"9",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {id:"10",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
  {
    id:"11",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  
  {
    id:"12",
    name:"Sloane Sofa Bed Range",
    price: "5000",
    img:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29mYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
]

const CategoryDetail = (props) => {
  

  const location = useLocation();
  let headingName = location.state?.data?.name;
    console.log("nnnnnnnnnnn " + location.pathname);
  return (
    <div className='category-detail'>
      <h1 style={{alignItems:"center",textAlign:"center"}}>{headingName}</h1>
        <Row className='category-row' style={{padding:"0", margin:"0"}}>
        <Col lg={3} sm={12} md={3} style={{padding:"0", margin:"0"}}>
       <div className='filter-prop'>
       {
          newList.map((e,i)=>{
            return(
              
             <Accordion className='accordian'>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>{e.name}</Accordion.Header>
                <Accordion.Body>
                  {e.filter.map((res,index)=>{
                    console.log("yes here" +res.para);
                    if(e.name === "Color"){
                    
                      return  <div style={{height:"20px",width:"20px",borderRadius:"100%",backgroundColor:`${res.para}`,display:"inline-block",marginRight:"10px"}}>
                        
                        </div>
                    }
                    else{
                    return <p style={{cursor:"pointer"}}>{res.value}</p>
                    }
                  })}
                </Accordion.Body>
              </Accordion.Item>
             </Accordion>
             
            );
          })
        } 
       <div className='buttonSectioon'>
       <Button className='applyButton' variant="outline-primary">Apply</Button>{' '}
       </div>
       </div>
         </Col>
         <Col lg={9} sm={6} md={9} style={{padding:"0", margin:"0"}}> 
       <div className='productList'>
        {
            productList.map((e,i) =>{
              return(
               <Link to={{pathname:`${location.pathname}/${e.id}`}} state={{result:e}} style={{textDecoration:"none"}} >
                <Card className='card'>
                        <Card.Img variant="top" src={e.img} className='card-img' />
                        <Card.Body>
                          <Card.Title style={{textAlign:"start"}}>{e.name}</Card.Title>
                          <Card.Title style={{textAlign:"start",fontWeight:"400"}}>Rs. {e.price}</Card.Title>
                        </Card.Body>
                      </Card>
               </Link>
              );
            })
          
        }
       </div>
          </Col>
      </Row>
    </div>
  )
}

export default CategoryDetail 