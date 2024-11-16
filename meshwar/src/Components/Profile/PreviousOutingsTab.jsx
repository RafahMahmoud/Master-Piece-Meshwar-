import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import axios from 'axios';

const ReviewModal = ({ outingPlan, onClose, onReviewSubmitted }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3003/api/reviews/', {
        outingPlanId: outingPlan._id,
        rating,
        comment
      }, { withCredentials: true });
      onReviewSubmitted();
      onClose();
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-bold mb-4">Add Review</h3>
        <div className="mb-4">
          <div className="flex space-x-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`cursor-pointer ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-teal-500 text-white rounded"
            onClick={handleSubmit}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

const PreviousOutingsTab = () => {
  const [outings, setOutings] = useState([]);
  const [selectedOuting, setSelectedOuting] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetchPreviousOutings();
  }, []);

  const fetchPreviousOutings = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/outing/previous-outings', {
        withCredentials: true
      });
      setOutings(response.data);
      
      // Fetch reviews for each outing
      response.data.forEach(outing => {
        fetchOutingReviews(outing._id);
      });
    } catch (error) {
      console.error('Error fetching previous outings:', error);
    }
  };

  const fetchOutingReviews = async (outingId) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/reviews/${outingId}`, {
        withCredentials: true
      });
      setReviews(prev => ({
        ...prev,
        [outingId]: response.data
      }));
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  return (              
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Previous Outings</h2>
      {outings.map(outing => (
        <div key={outing._id} className="bg-white p-6 rounded-lg shadow-md mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">{outing.city}</h3>
              <p className="text-gray-600">
                {new Date(outing.date).toLocaleDateString()}
              </p>
              <p className="text-teal-600 font-medium">
                Budget: ${outing.budget} | Total Cost: ${outing.totalCost}
              </p>
            </div>
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
              onClick={() => {
                setSelectedOuting(outing);
                setShowReviewModal(true);
              }}
            >
              Add Review
            </button>
          </div>
          
          {/* Activities Section */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Activities:</h4>
            {outing.activity && (
              <p>{outing.activity.type}: {outing.activity.name}</p>
            )}
          </div>

          {/* Reviews Section */}
          {reviews[outing._id] && reviews[outing._id].length > 0 && (
            <div className="mt-4 border-t pt-4">
              <h4 className="font-semibold mb-2">Reviews:</h4>
              {reviews[outing._id].map(review => (
                <div key={review._id} className="bg-gray-50 p-3 rounded mb-2">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      by {review.user.fullName}
                    </span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {showReviewModal && (
        <ReviewModal
          outingPlan={selectedOuting}
          onClose={() => setShowReviewModal(false)}
          onReviewSubmitted={() => {
            fetchOutingReviews(selectedOuting._id);
            setShowReviewModal(false);
          }}
        />
      )}
    </div>
  );
};

export default PreviousOutingsTab;