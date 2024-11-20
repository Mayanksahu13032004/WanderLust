import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function DetailPage() {
  const location = useLocation();
  const { card } = location.state || {}; // Get card data from state

  const [reviews, setReviews] = useState([]); // Initialize reviews as empty array
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle errors

  const [rating, setRating] = useState(''); // Input for rating
  const [comment, setComment] = useState(''); // Input for comment
  const [submitError, setSubmitError] = useState(null); // Handle form submission errors
  const [successMessage, setSuccessMessage] = useState(null); // Handle success messages

  const cardId = card?._id || card?.id;

  // Fetch reviews
  const fetchReviews = async (cardId) => {
    if (!cardId) {
      console.error('Invalid cardId');
      setError('Invalid card ID');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/v1/project/userReview/get-review/${cardId}`
      );
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Failed to load reviews.');
    } finally {
      setLoading(false);
    }
  };

  // Submit a new review
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !comment) {
      setSubmitError('Rating and comment are required!');
      return;
    }
    console.log("cardid is",cardId);
    

    try {
      console.log("enter in try");
      
      const response = await axios.post(
        `http://localhost:8000/api/v1/project/userReview/user-review`,
        {
          cardId,
          rating,
          comments: comment,
          userId: 'Anonymous', // Replace with actual user info if available
        }
      );
      console.log("response is",response);
      
      setSuccessMessage('Review submitted successfully!');
      setSubmitError(null);
      setRating('');
      setComment('');
      fetchReviews(cardId); // Refresh reviews
    } catch (error) {
      console.error('Error submitting review:', error.response?.data || error.message);
      setSubmitError(error.response?.data?.message || 'Failed to submit review.');
    }
  };

  useEffect(() => {
    if (card && cardId) {
      fetchReviews(cardId);
    }
  }, [card, cardId]);

  if (!card) {
    return <h1 className="text-center text-2xl mt-10">No details available for this card!</h1>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      {/* Card Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{card.title}</h1>
        <img
          src={card.image}
          alt={card.title}
          className="w-full max-w-xs mx-auto rounded-md shadow-lg mb-4"
        />
        <p className="text-lg text-gray-700 mb-2">
          <strong>Description:</strong> {card.description}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Price:</strong> Rs {card.price} /night
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Location:</strong> {card.location}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Country:</strong> {card.country}
        </p>
      </div>

      {/* Add Review Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a Review</h2>
        <form onSubmit={handleReviewSubmit}>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
              Rating (1-5)
            </label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              min="1"
              max="5"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-700 font-semibold mb-2">
              Comment
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              rows="4"
              required
            />
          </div>
          {submitError && <p className="text-red-500 mb-4">{submitError}</p>}
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Reviews Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
        {loading ? (
          <p className="text-gray-500">Loading reviews...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : reviews.length > 0 ? (
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li key={index} className="border-b pb-4">
                <p className="text-gray-700">
                  <strong>Rating:</strong> {review.rating} / 5
                </p>
                <p className="text-gray-700">
                  <strong>Comment:</strong> {review.comments}
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>By:</strong> {review.userId || 'Anonymous'}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No reviews available for this card.</p>
        )}
      </div>
    </div>
  );
}

export default DetailPage;
