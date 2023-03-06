import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Rentals() {
  const navigate = useNavigate();
  const [rentalData, setRentalData] = useState({
    name: '',
    location: '',
    description: '',
    price: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:4567/rentals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rentalData),
    });

    if (response.ok) {
      const rental = await response.json();
      console.log(rental); // This will log the newly created rental object in the console

      navigate('/rentals'); // This will redirect the owner back to the rentals page
    } else {
      console.error('Unable to create rental');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRentalData((prevRentalData) => ({ ...prevRentalData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={rentalData.name} onChange={handleChange} />
      <input type="text" name="location" value={rentalData.location} onChange={handleChange} />
      <textarea name="description" value={rentalData.description} onChange={handleChange} />
      <input type="number" name="price" value={rentalData.price} onChange={handleChange} />
      <button type="submit">Upload Rental</button>
    </form>
  );
}

export default Rentals;
