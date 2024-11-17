import React, { useState, useEffect } from "react";
import axios from 'axios';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Responsive cards per page
  const getCardsPerPage = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };
  
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };

    window.addEventListener('resize', handleResize);
    fetchReviews();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3003/api/reviews/');
      const data = response.data; // استبدل response.json() بـ response.data
      setReviews(data);
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
    } finally {
      setLoading(false);
    }
  };
  

  const numPages = Math.ceil(reviews.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < numPages) setCurrentPage(currentPage + 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }
  return (
    <div className="mt-20 px-4 py-8 bg-gradient-to-b from-purple-50 to-white mx-4 lg:mx-[9rem]">
        <h2 className="text-2xl font-bold text-center mb-8">What Everyone is Saying?</h2>
        <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm
                    ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                <span className="text-gray-600">&lt;</span>
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentReviews.map((review, index) => (
            <div 
              key={review._id || index} 
              className="flex flex-col bg-white rounded-lg shadow-md h-[22.5rem] w-64 items-center p-4"
            >
              <img 
                className="rounded-full h-24 w-24 object-cover mb-4" 
                src={`http://localhost:3003/${review.user.profilePic}`} 
                alt={review.user?.fullName || 'User'} 
              />
              
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{review.user?.fullName}</h3>
              <p className="text-base text-center">{review.comment}</p>
            </div>
          ))}
             </div>
                <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm
                        ${currentPage === numPages ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                    onClick={handleNext}
                    disabled={currentPage === numPages}
                >
                    <span className="text-gray-600">&gt;</span>
                </button>
            </div>

      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`rounded-full transition-all duration-200 ${
                currentPage === page 
                  ? 'bg-black w-3 h-3' 
                  : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentPage(page)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;