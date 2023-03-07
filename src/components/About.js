import React, { useState } from "react";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";
function About() {
  const [testimonials, setTestimonials] = useState([
    {
      author: "John Doe",
      text: "This rental service is the best I've ever used!",
      starRate: 5,
    },
    {
      author: "Jane Smith",
      text: "I've recommended this service to all my friends!",
      starRate: 4,
    },
    {
      author: "Bob Johnson",
      text: "The rentals were clean and comfortable. Highly recommended!",
      starRate: 4.5,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTestimonial = { author, text, rating };
    setTestimonials([...testimonials, newTestimonial]);
    setAuthor("");
    setText("");
    setRating(0);
    setShowForm(false);
    alert("Feedback received!");
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bookings" className="nav-link">
                Bookings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
      <div className="container">
      <h2>Let us hear from you</h2>
      {showForm ? (
     <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Your Name:</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Your Feedback:</label>
          <textarea
            className="form-control"
            id="text"
            name="text"
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div>
      <p>Thank you for your feedback!</p>
      <button onClick={() => setShowForm(true)}>Leave Another Feedback</button>
    </div>
  )}
  <div className="row">
    {testimonials.map((testimonial, index) => (
      <div className="col-sm-4" key={index}>
        <Testimonial author={testimonial.author} text={testimonial.text} rating={testimonial.rating} />
      </div>
    ))}
  </div>
</div>
    </>
  );
}

export default About;
