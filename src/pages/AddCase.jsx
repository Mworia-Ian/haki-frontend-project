import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  description: z.string().min(1, "Description is required"),
  courtDate: z.string().min(1, "Court Date is required"),
  status: z.string().min(1, "Status is required"),
  userId: z.string().min(1, "User ID is required"),
  lawyerId: z.string().min(1, "Lawyer ID is required"),
});

function AddCase({ card }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      description: "",
      courtDate: "",
      status: "",
      userId: "",
      lawyerId: "",
    },
  });

  const handleBack = () => {
    navigate("/cases");
  };

  const onSubmit =  (data) => {
    try {
      console.log("Form data: ", data);
      const session = JSON.parse(localStorage.getItem("session"));
      const token = session?.accessToken;

      // Format courtDate to ISO 8601
      const courtDateISO = new Date(data.courtDate).toISOString();

      const response =  fetch("http://localhost:5000/cases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          description: data.description,
          court_date: courtDateISO, // formatted court date
          status: data.status,
          user_id: Number(data.userId),
          lawyer_id: Number(data.lawyerId), // Include lawyer_id
        }),
      });

      if (!response.ok) {
        const errorData = response.json();
        console.error("Error adding case:", errorData);
        throw new Error(errorData.message || "Network response was not ok");
      }

      const result = response.json();
      console.log("Case added successfully:", result);
      navigate("/cases");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Case</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
        <button
          onClick={handleBack}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#37B9F1] rounded-lg hover:bg-[#32a6d8] focus:ring-4 focus:outline-none focus:ring-blue-300 mt-1 mb-3"
        >
          Back
        </button>
        {/* {card?.user && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              User
            </label>
            <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
              {card.user.firstname} {card.user.lastname}
            </p>
          </div>
        )} */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-2">
            Description
          </label>
          <input
            id="description"
            type="text"
            {...register("description")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="courtDate" className="block text-gray-700 text-sm font-semibold mb-2">
            Court Date
          </label>
          <input
            id="courtDate"
            type="datetime-local"
            step="1"
            {...register("courtDate")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.courtDate && <p className="text-red-500 text-xs italic">{errors.courtDate.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 text-sm font-semibold mb-2">
            Status
          </label>
          <input
            id="status"
            type="text"
            {...register("status")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.status && <p className="text-red-500 text-xs italic">{errors.status.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="userId" className="block text-gray-700 text-sm font-semibold mb-2">
            User ID
          </label>
          <input
            id="userId"
            type="text"
            {...register("userId")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.userId && <p className="text-red-500 text-xs italic">{errors.userId.message}</p>}
        </div>
        {/* <div className="mb-4">
          <label htmlFor="lawyerId" className="block text-gray-700 text-sm font-semibold mb-2">
            Lawyer ID
          </label>
          <input
            id="lawyerId"
            type="text"
            {...register("lawyerId")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lawyerId && <p className="text-red-500 text-xs italic">{errors.lawyerId.message}</p>}
        </div> */}
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#37B9F1] rounded-lg hover:bg-[#32a6d8] focus:ring-4 focus:outline-none focus:ring-blue-300 mt-1 mb-3"
        >
          Add Case
        </button>
      </form>
    </div>
  );
}

export default AddCase;
