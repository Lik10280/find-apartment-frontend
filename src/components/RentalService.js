import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

function RentalsService() {
  const navigate = useNavigate();
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4567/rentals')
      .then(response => response.json())
      .then(data => setRentals(data))
      .catch(error => console.error(error));
  }, []);

  const handleBook = (rentalId) => {
    navigate(`/book/${rentalId}`);
  };

  return (
    <div className="rentals-service">
      <h1>Available Rentals</h1>
      <Row>
        {rentals.map(rental => (
          <Col key={rental.id} sm={12} md={6} lg={4} className="mb-3">
            <Card className="rental-card">
              <Card.Img variant="top" src={rental.image} />
              <Card.Body>
                <Card.Title>{rental.name}</Card.Title>
                <Card.Text>{rental.description}</Card.Text>
                <Card.Text>Price: ${rental.price}/night</Card.Text>
                <Button variant="primary" onClick={() => handleBook(rental.id)}>Book</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RentalsService;