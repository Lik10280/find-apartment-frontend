import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/rentalservice');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
