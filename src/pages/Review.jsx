import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  review: z
    .string()
    .min(3, "Review must be at least 3 characters")
    .max(50, "Review must not exceed 50 characters"),
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

  const onSubmit = (data) => {
    const newReview = {
      id: Date.now(),
      comment: data.review,
      user: { username: "Test User" },
    };
    setReviews([...reviews, newReview]);
    reset();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowForm(false); 
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-0 mx-auto max-w-xl">
        <Controller
          name="review"
          control={control}
          render={({ field }) => (
            <div className="mb-0">
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
        <div className="flex justify-center space-x-4 mx-4">
          <button
            type="submit"
            className="bg-[#37B9F1] hover:bg-[#32a6d8] text-lg text-white font-bold py-3 px-4 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit Review
          </button>
        </div>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
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
      )}
      <div className="reviews-section mt-0 mx-4">
        <h2 className="text-3xl font-bold underline text-white">Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-lg mt-0 text-white">No reviews yet. Be the first to add one!</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="review mt-4">
              <p className="text-lg text-white">
                <strong>{review.user.username} → </strong>
                {review.comment}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Review;
