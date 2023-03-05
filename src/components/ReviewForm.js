import { useState } from 'react';


const ReviewForm = ({ rentalId }) => {
  const [rating, setRating] = useState('0');
  const [comment, setComment] = useState('');
  const [reviewFormOpen, setReviewFormOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const data = {
      rating: rating,
      comment: comment,
    };
  
    fetch(`http://localhost:4567/rentals/${rentalId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setReviewFormOpen(false);
          setReviewSubmitted(true);
          setTimeout(() => {
            setReviewSubmitted(false);
            setReviewFormOpen(false);
          }, 3000);
        } else {
          throw new Error("Failed to submit review");
        }
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div>
      {reviewFormOpen && (
        <div className="card">
          <div className="card-header">Add Review</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select
                  className="form-control"
                  id="rating"
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                >
                  <option value="0">Select rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="3"
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setReviewFormOpen(false);
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      {!reviewFormOpen && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setReviewFormOpen(true);
          }}
        >
          Add Review
        </button>
      )}
      {reviewSubmitted && (
        <div className="alert alert-success mt-3" role="alert">
          Review submitted!
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
