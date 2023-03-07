import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = () => {
    // handle Google login logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/rentalservice');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Card style={{ width: '28rem' }}>
        <Card.Body>
          <h2 className="mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mb-3" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mb-3" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mr-2">
              Submit
            </Button>
            <Button variant="light" onClick={handleGoogleLogin} className="mr-2">
              <FaGoogle /> Login with Google
            </Button>
            <Button variant="link" onClick={handleSignupClick}>
              Don't have an account? Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
