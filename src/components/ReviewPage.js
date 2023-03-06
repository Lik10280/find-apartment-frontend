import React from 'react';
import ReviewForm from './ReviewForm';

const ReviewPage = ({ rentalId }) => {
  return (
    <div className="container">
      <h1>Write a Review</h1>
      <ReviewForm rentalId={rentalId} />
    </div>
  );
};

export default ReviewPage;
