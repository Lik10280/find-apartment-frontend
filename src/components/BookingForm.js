import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function BookingForm({ onSubmit }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const navigate = useNavigate();


  const handleBookingFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const booking = {
      start_date: formData.get("startDate"),
      end_date: formData.get("endDate"),
      payment_status: "Pending"
    };
    try {
      const response = await fetch("http://localhost:4567/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
      });
      if (!response.ok) {
        throw new Error("Booking submission failed.");
      }
      navigate("/bookings");
    } catch (error) {
      console.error(error);
    }
  };
  

  

  return (
    <form onSubmit={handleBookingFormSubmit}>
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentStatus">Payment Status</label>
        <input
          type="text"
          className="form-control"
          id="paymentStatus"
          value={paymentStatus}
          onChange={(event) => setPaymentStatus(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Book 
      </button>
    </form>
  );
}

export default BookingForm;
