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