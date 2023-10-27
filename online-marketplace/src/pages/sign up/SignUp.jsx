import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './signup.css'

const askMember = () => {
  return (
    <Form>
      <p>Would you like to become a member?</p>
      <Form.Check inline type='checkbox' id='ask-mem' label='Yes' />
    </Form>
  )
}

const SignUp = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <Container id='sign-up' className='text-center border'>
        <h2>Welcome to Webstore!</h2>
        <p>Would you like to sell or buy products?</p>
        <Form>
          <Form.Check inline type='radio' name='sb-grp' id='seller-chk' label='Sell' onChange={() => setSelected(0)} />
          <Form.Check inline type='radio' name='sb-grp' id='customer-chk' label='Buy' onChange={() => setSelected(1)} />
        </Form>
        {/* if customer: ask if they want to be member */}
        {selected === 1 && askMember()}
        <Form.Control className='input-form' type='text' placeholder='Username' />
        <Form.Control className='input-form' type='password' placeholder='Password' />
        <Link to="/home">
          <Button id='signUp-btn' variant='primary' type='submit'>Sign Up</Button>
        </Link>
      </Container>
    </div>
  );
}

export default SignUp