import React, { useState, useEffect } from 'react';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const response = await fetch("http://localhost:4567/bookings");
      const data = await response.json();
      setBookings(data);
    }
    fetchBookings();
  }, []);

  return (
    <div className="container">
      <h1>Booking List</h1>
      <table className="table">
        <thead>
          <tr>
            
            
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">payment_status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.start_date}</td>
              <td>{booking.end_date}</td>
              <td>{booking.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;
