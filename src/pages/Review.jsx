import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define schema to validate form input
const schema = z.object({
  review: z
    .string()
    .min(3, "Review must be at least 3 characters")
    .max(500, "Review must not exceed 500 characters"),
  rating: z.preprocess(val => Number(val), z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must not exceed 5")),
});

const Review = ({ lawyerId, setShowForm }) => {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, [lawyerId]);

  const session = JSON.parse(localStorage.getItem('session'));
  const token = session?.accessToken;
  // Function to fetch all reviews for a lawyer
  const fetchReviews = () => {
    fetch(`http://localhost:5000/reviews?lawyer_id=${lawyerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject("Failed to fetch reviews")
      )
      .then((data) => setReviews(data))
      .catch((error) => console.error("Failed to fetch reviews:", error));
  };

  // Function to handle form submission
  const onSubmit = (data) => {
    const newReview = {
      user_id: 1, // Adjust based on your authentication logic
      lawyer_id: lawyerId,
      review: data.review,
      rating: data.rating,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject("Failed to submit review")
      )
      .then((result) => {
        setShowModal(true);  // Show modal upon success
        fetchReviews();  // Refresh reviews after posting
        reset();  // Reset form
      })
      .catch((error) => console.error("Failed to submit review:", error));
  };

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false);
    setShowForm(false);
  };

  return (
    <div className="relative p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-0 mx-auto max-w-xl">
        <Controller
          name="review"
          control={control}
          render={({ field }) => (
            <div className="mb-4">
              <textarea
                {...field}
                rows={3}
                placeholder="Write your review here..."
                className="w-full p-2 border rounded-lg mx-4"
              />
              {errors.review && (
                <p className="text-red-500 font-semibold mt-1 mx-4">
                  {errors.review.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <div className="mb-4 mx-4">
              <input
                {...field}
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                className="w-full p-2 border rounded-lg"
              />
              {errors.rating && (
                <p className="text-red-500 font-semibold mt-1">
                  {errors.rating.message}
                </p>
              )}
            </div>
          )}
        />
        <div className="flex justify-center space-x-4 mx-4">
          <button
            type="submit"
            className="bg-[#37B9F1] hover:bg-[#32a6d8] text-lg text-white font-bold py-3 px-4 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit Review
          </button>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md mx-auto relative">
              <h2 className="text-xl font-bold mb-4">Review Submitted</h2>
              <p>Your review has been submitted successfully!</p>
              <button
                onClick={handleClose}
                className="mt-4 bg-[#37B9F1] hover:bg-[#32a6d8] text-lg text-white font-bold py-1 px-3 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
