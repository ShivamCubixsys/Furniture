import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.scss';
import Form from 'react-bootstrap/Form';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useRef, useState } from 'react';
import { FormGroup } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Navibar() {


  const [navBackground, setNavBackground] = useState(false)
  const [isSearch,setIsSearch] = useState(false);
    const navRef = useRef()
    const [value,setValue] = useState('')
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return (
    <Navbar expand="lg" className='navbarData' fixed='top' variant='dark'  collapseOnSelect style={{ transition: '1s ease',backgroundColor: navBackground ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.3)'}}>   
        <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="sofas"  >Sofas</Nav.Link>
          <Nav.Link href="beds">Beds</Nav.Link>
          <Nav.Link href="chair">Chair</Nav.Link> 
          <Nav.Link href="corner-sofas">Corner Sofas</Nav.Link>
        </Nav>
           <Navbar.Brand href="/">My-Furniture</Navbar.Brand>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
      
          <Nav.Link>
          {
          isSearch  ? 
          <div style={{backgroundColor:"white", borderRadius:"10px"}}>
              <Form className='d-flex border-0' style={{alignItems: 'center',
            justifyContent: 'center', border:'none'}} onChange={()=>{
            }}>
              
          <Form.Control
          type="text"
          placeholder="Search"
          className="flex-grow cursor-pointer border-0"
          aria-label="Search"
        />
          <ClearIcon onClick={
            ()=>{
              console.log("ok don" + isSearch);
              setIsSearch(false);
              console.log("jkk" + isSearch);
            }
          } style={{height:'20px',width:'20px',paddingRight:'2px'}}/>
        </Form>
          </div>: <div style={{width:'14rem',alignItems:"end",textAlign:'end'}}>
          <SearchIcon style={{color:"white"}}  onClick={()=>{
              console.log("checking here");
            setIsSearch(true);
            console.log("now 1" + isSearch);
          }}/>
          </div>
        }    
          </Nav.Link>
          <Nav.Link>
            <AccountCircleIcon  style={{color:"white",marginLeft:"20px"}}/>
          </Nav.Link>
          <Nav.Link>
            <FavoriteBorderIcon  style={{color:"white",marginLeft:"20px"}}/>
          </Nav.Link>
          <Nav.Link>
            <ShoppingCartIcon  style={{color:"white",marginLeft:"20px"}}/>
          </Nav.Link>
        </Navbar.Collapse>
        </Container>
  </Navbar>
  );
}

export default Navibar;