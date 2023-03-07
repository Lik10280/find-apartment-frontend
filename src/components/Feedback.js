import React, { useState } from "react";

function Feedback({ addTestimonial }) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const testimonial = { author, text, rating };
    addTestimonial(testimonial, rating);
    setAuthor("");
    setText("");
    setRating(0);
  };

  return (
    <div className="feedback-form">
      <h2>Leave Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author-input">Author</label>
          <input
            type="text"
            className="form-control"
            id="author-input"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-input">Text</label>
          <textarea
            className="form-control"
            id="text-input"
            rows="3"
            value={text}
            onChange={(event) => setText(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rating-input">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating-input"
            min="1"
            max="5"
            step="0.5"
            value={rating}
            onChange={(event) => setRating(parseFloat(event.target.value))}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Feedback;
