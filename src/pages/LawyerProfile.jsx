import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Review from './Review';

const LawyerProfile = () => {
  const location = useLocation();
  const [lawyerDetails, setLawyerDetails] = useState(null);
  const [reviews, setReviews] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false); 
  const lawyerId = location.state?.lawyerId;

  useEffect(() => {
    if (!lawyerId) {
      console.error('Lawyer ID not found');
      setError('Lawyer ID not found');
      setLoading(false);
      return;
    }

    const fetchLawyerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/lawyers/${lawyerId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLawyerDetails(data);
        setReviews(data.reviews || []); 
      } catch (error) {
        console.error('Error fetching lawyer details:', error);
        setError('Error fetching lawyer details');
      } finally {
        setLoading(false);
      }
    };

    fetchLawyerDetails();
  }, [lawyerId]);

  const addReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]); 
    setShowForm(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!lawyerDetails) {
    return <div>Lawyer details not found</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white border-b border-l border-cyan-400 rounded-lg shadow flex flex-col items-center mb-1 drop-shadow-2xl">
        <div className="md:flex relative">
          <div className="md:flex-shrink-0 pl-3 pt-14 relative">
            <img
              className="w-60 h-60 mb-3 rounded-full shadow-lg mt-4"
              src={lawyerDetails?.lawyer_details?.image}
              alt={`${lawyerDetails.firstname} ${lawyerDetails.lastname}`}
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '100%',
                objectFit: 'cover',
                background: '#040000d7',
              }}
            />
            <button
              onClick={() => window.history.back()}
              className="absolute top-2 left-2 bg-[#37B9F1] hover:bg-[#32a6d8] text-lg text-white font-bold py-2 px-4 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Back
            </button>
          </div>
          <div className="p-14">
            <div
              className="uppercase tracking-wide text-2xl text-[#37B9F1] font-bold"
              style={{
                textDecoration: 'underline',
                textDecorationColor: 'black',
                textDecorationThickness: '5px',
                textUnderlineOffset: '8px',
              }}
            >
              Lawyer Profile
            </div>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              <span className="text-black">{lawyerDetails.firstname} </span>
              <span className="text-[#37B9F1]">{lawyerDetails.lastname}</span>
            </h2>
            <dl className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="px-4 py-5 bg-[#37B9F1] shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-lg font-small text-white truncate">
                  Years of Experience
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {lawyerDetails?.lawyer_details?.years_of_experience}
                </dd>
              </div>
              <div className="px-4 py-5 bg-[#37B9F1] shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-lg font-medium text-white truncate">
                  Specialization
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {lawyerDetails?.lawyer_details?.specialization}
                </dd>
              </div>
              <div className="px-4 py-5 bg-[#37B9F1] shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-lg font-medium text-white truncate">
                  Rate per Hour
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  KES {lawyerDetails?.lawyer_details?.rate_per_hour}
                </dd>
              </div>
            </dl>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => window.location.href = '/clientchat'}
                className="bg-[#37B9F1] hover:bg-[#32a6d8] text-lg text-white font-bold py-2 px-4 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Contact Lawyer
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#37B9F1] hover:bg-[#32a6d8] text-lg text-white font-bold py-1 px-3 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Review
              </button>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="w-full p-6">
            <Review lawyerId={lawyerId} addReview={addReview} setShowForm={setShowForm} />
          </div>
        )}

        <div className="mt-0 w-full p-6">
          <h3 className="text-3xl font-bold text-[#37B9F1]">Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-4 my-4 rounded-lg shadow">
                <p className="text-lg font-semibold">{review.reviewer_name}</p>
                <p className="text-sm text-gray-700">{review.review_text}</p>
              </div>
            ))
          ) : (
            <p className="text-lg text-black">No reviews yet. Be the first to add a review!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;
