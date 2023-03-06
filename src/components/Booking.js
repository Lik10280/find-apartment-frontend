import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [rental, setRental] = useState({});
  const [owner, setOwner] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4567/rentals/${id}`)
      .then((response) => response.json())
      .then((data) => setRental(data));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:4567/rentals/${id}/owner`)
      .then((response) => response.json())
      .then((data) => setOwner(data));
  }, [id]);

  const handleBookingFormSubmit = (bookingData) => {
    fetch("http://localhost:4567/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rental_id: rental.id,
        start_date: bookingData.startDate,
        end_date: bookingData.endDate,
        payment_status: "pending",
      }),
    })
      .then((response) => {
        if (response.ok) {
          setBookingSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1>{rental.title}</h1>
          <img src={rental.image} alt={rental.title} />
          <p>{rental.description}</p>
          <h2>Owner Details:</h2>
          <p>Name: {owner.name}</p>
          <p>Email: {owner.email}</p>
          <p>Phone: {owner.tel}</p>
          <button className="btn btn-primary">Leave a review</button>
        </div>
        <div className="col-lg-6">
          <div className="booking-form">
            {bookingSuccess ? (
              <div className="alert alert-success" role="alert">
                Booking successful. Redirecting to homepage...
              </div>
            ) : (
              <>
                <img src={rental.image} alt={rental.title} />
                <BookingForm onSubmit={handleBookingFormSubmit} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
