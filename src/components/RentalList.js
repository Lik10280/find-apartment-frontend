import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function RentalList() {
  const navigate = useNavigate();
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4567/rentals')
      .then((response) => response.json())
      .then((data) => setRentals(data))
      .catch((error) => console.log(error));
  }, []);

  const handleBook = (rentalId) => {
    navigate(`/book/${rentalId}`);
  };

  return (
    <div className="rentals">
      {rentals.map((rental) => (
        <Card key={rental.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={rental.image} />
          <Card.Body>
            <Card.Title>{rental.title}</Card.Title>
            <Card.Text>{rental.location}</Card.Text>
            <Card.Text>{rental.price}</Card.Text>
            <Button variant="primary" onClick={() => handleBook(rental.id)}>Book</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default RentalList;
