import { useState } from 'react';

function BookingForm({ rental, onBookingSubmit }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      start_date: startDate,
      end_date: endDate,
      rental_id: rental.id,
    };
    onBookingSubmit(bookingData);
  };

  return (
    <form onSubmit={handleBookingSubmit}>
      <div className="form-group">
        <label htmlFor="start_date">Start Date</label>
        <input
          type="date"
          className="form-control"
          id="start_date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="end_date">End Date</label>
        <input
          type="date"
          className="form-control"
          id="end_date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Book Now
      </button>
    </form>
  );
}
export default BookingForm;