import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import RentalService from './RentalService';
import Booking from './Booking';
import ReviewForm from './ReviewForm';
import ReviewPage from './ReviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/rentalservice" element={<RentalService />} />
        <Route path="/book/:rentalId" element={<Booking />} />
        <Route path="/rentals/:rentalId/review" element={<ReviewForm />} />
        <Route path="/reviews/:reviewId" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;