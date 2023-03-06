import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';

function Home() {
  const [rentals, setRentals] = useState([]);
  const [reviewFormOpen, setReviewFormOpen] = useState(false);
  const [selectedRental, setSelectedRental] = useState(null);

  const handleReview = (rental) => {
    setSelectedRental(rental);
    setReviewFormOpen(true);
  };

  const handleReviewSubmit = async (rentalId, review) => {
    try {
      const response = await fetch(`http://localhost:4567/rentals/${rentalId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit review");
      }
  
      const data = await response.json();
      console.log(data);
      setReviewFormOpen(false);
      setSelectedRental(null);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    async function fetchRentals() {
      const response = await fetch("http://localhost:4567/rentals");
      const data = await response.json();
      setRentals(data);
    }
    fetchRentals();
  }, []);

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
              <Link to="/" className="nav-link">
                Home
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
      <div className="text-center">
        <h1>Welcome to Find A Motel</h1>
        <p>Find your perfect place to stay with us.</p>
      </div>

  <div className="container">
  <h1>Rentals</h1>
  <div className="row">
    {rentals.map((rental) => (
      <div className="col-md-4" key={rental.id}>
        <div className="card mb-4 box-shadow">
          <img
            className="card-img-top"
            src={rental.image}
            alt={rental.title}
          />
          <div className="card-body">
            <h5 className="card-title">{rental.title}</h5>
            <p className="card-text">{rental.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              <Link to={`/book/${rental.id}`}>Book</Link>
              <Link to={`/rentals/${rental.id}/reviews`} className="btn btn-primary">
                  Add Review
              </Link>
              </div>
              <small className="text-muted">{rental.city}</small>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  {reviewFormOpen && (
    <ReviewForm
      rentalId={selectedRental}
      handleReviewSubmit={handleReviewSubmit}
      setReviewFormOpen={setReviewFormOpen}
    />
  )}
</div>


    </>
  );
}

export default Home;
