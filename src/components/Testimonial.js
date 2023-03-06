import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonial({ author, text, rating }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} />);
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{author}</h5>
        <p className="card-text">{text}</p>
        <div className="rating">{stars}</div>
      </div>
    </div>
  );
}

export default Testimonial;
