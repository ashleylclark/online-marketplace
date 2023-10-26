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
  return (
    <div>
      <Container id='sign-up' className='text-center border'>
        <h2>Welcome to Webstore!</h2>
        <p>Would you like to sell or buy products?</p>
        <Form>
          <Form.Check inline type='radio' group='sb-grp' id='seller-chk' label='Sell' />
          <Form.Check inline type='radio' group='sb-grp' id='customer-chk' label='Buy' />
        </Form>
        {/* if customer: member? */}
        {askMember()}
        <Form.Control className='input-form' type='text' placeholder='Username' />
        <Form.Control className='input-form' type='password' placeholder='Password' />
        <Button id='signUp-btn' variant='primary' type='submit'>Sign Up</Button>
      </Container>
    </div>
  );
}

export default SignUp