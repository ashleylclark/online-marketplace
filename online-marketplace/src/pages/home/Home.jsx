import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./home.css"
import Button from 'react-bootstrap/esm/Button';

// home page will change depending on if user is seller or customer
const ShopName = () => {
  return (
    <Navbar.Text>Shop Name</Navbar.Text>
  )
}

const Cart = () => {
  return (
    <Link id='cart'>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
    </Link>
  )
}

const CustomerHome = () => {
  return (
    <div id='cust-btns'>
      <Button className='home-btn'>Orders</Button>
      <Button className='home-btn'>Returns</Button>
      <Button className='home-btn'>My Reviews</Button>
    </div>
  )
}

const SellerHome = () => {
  return (
    <div id='sell-btns'>
      <Button className='home-btn'>My Products</Button>
      <Button className='home-btn'>Orders</Button>
      <Button className='home-btn'>Returned</Button>
    </div>
  )
}

const Home = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <Navbar sticky='top' id='home-nav'>
        <div>
          <Navbar.Brand>Webstore</Navbar.Brand>
          {selected === 0 && ShopName()}
        </div>
        <InputGroup id='nav-srch'>
          <Form.Control type='text' placeholder='Search Products or Shops' />
          <Button>Search</Button>
        </InputGroup>
          <Nav>
            <Navbar.Text>
              Signed in as: <Link>Name</Link>
            </Navbar.Text>
            {selected === 1 && Cart()}
          </Nav>
      </Navbar>
      {/* Buttons to show seller vs buyer for dev */}
      {selected === 1 && CustomerHome()}
      {selected === 0 && SellerHome()}
      <Form>
        <Form.Check inline type='radio' name='g1' id='seller-chk' label='Seller' onChange={() => setSelected(0)} />
        <Form.Check inline type='radio' name='g1' id='customer-chk' label='Customer' onChange={() => setSelected(1)} />
      </Form>
    </div>
  )
}

export default Home