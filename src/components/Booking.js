import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [rental, setRental] = useState({});
  const [owner, setOwner] = useState({});
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      start_date: startDate,
      end_date: endDate,
      payment_status: "Pending",
    };
    try {
      const response = await fetch(`http://localhost:4567/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(bookingData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      navigate('/bookings');
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  
  
  
  
  

  const handleBookNowClick = () => {
    if (!bookingSuccess) {
      const bookingForm = document.querySelector(".booking-form");
      bookingForm.scrollIntoView({ behavior: "smooth" });
    }
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
          <button
            className="btn btn-success"
            onClick={handleBookNowClick}
          >
            Book Now
          </button>
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
                <BookingForm onSubmit={handleSubmit} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
