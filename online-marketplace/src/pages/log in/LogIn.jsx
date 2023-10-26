import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

import './login.css'

const LogIn = () => {
  return (
    <Container id='log-in' className='text-center border'>
      <h2>Welcome to Webstore!</h2>
      <Form.Control className='input-form' type='text' placeholder='Username' />
      <Form.Control className='input-form' type='password' placeholder='Password' />
      <Button id='logIn-btn' variant='primary' type='submit'>Log In</Button>
      <Nav>
        <Link id='signUp-btn' to="signup">Don't have an account?</Link>
      </Nav>
    </Container>
  );
}

export default LogIn