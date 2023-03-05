import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Booking() {
  const location = useLocation();
  const rentalId = location.pathname.split('/').pop();
  const [rental, setRental] = useState({});
  const [booking, setBooking] = useState({
    start_date: '',
    end_date: '',
    payment_status: 'pending'
  });

  useEffect(() => {
    fetch(`http://localhost:4567/rentals/${rentalId}`)
      .then(response => response.json())
      .then(data => setRental(data))
      .catch(error => console.error(error));
  }, [rentalId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4567/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/bookings" className="nav-link">
            Bookings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
      <form className="form-inline ml-auto">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Rentals"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
  <Col xs={12} md={6}>
    <div class="container-fluid">
      <div class="img-fluid">
        < div className="image-container" class="text-center">
          <img src={rental.image} alt={rental.name} />
        </div>
     </div>
    </div>
 
  <div className="booking-form">
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="start_date">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="date" name="start_date" value={booking.start_date} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group controlId="end_date">
        <Form.Label>End Date</Form.Label>
        <Form.Control type="date" name="end_date" value={booking.end_date} onChange={handleInputChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => handleSubmit}>Book</Button>
    </Form>
  </div>
</Col>

    </>
  );
}

export default Booking;
