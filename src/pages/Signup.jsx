import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Welcome from "../components/Welcome";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "client",
    qualificationCertificate: null,
    yearsOfExperience: "",
    ratePerHour: "",
  });

  const schema = z.object({
    first_name: z
      .string({
        required_error: "First Name is required",
      })
      .min(1, { message: "First Name is required" }),
    last_name: z
      .string({
        required_error: "Second Name is required",
      })
      .min(1, { message: "Second Name is required" }),
    role: z
      .string({
        required_error: "Role is required",
      })
      .min(1, { message: "Role is required" }),
    phone_number: z
      .string({
        required_error: "Phone Number must be 10 characters",
      })
      .length(10, { message: "Phone Number must be 10 characters" }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .min(1, { message: "Email is required" }),
    id: z
      .string({
        required_error: "National Identification must be 8 characters",
      })
      .length(8, { message: "National Identification must be 8 characters" }),
    area_of_residence: z
      .string({
        required_error: "Area of residence is required",
      })
      .min(1, { message: "Area of residence is required" }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1, { message: "Password is required" }),
    experience: z
      .string({
        required_error: "Years of Experience is required",
      })
      .min(1, { message: "Years of Experience is required" }),
    specialization: z
      .string({
        required_error: "Specialization is required",
      })
      .min(1, { message: "Specialization is required" }),
    rate: z
      .string({
        required_error: "Rate/Hour is required ",
      })
      .min(1, { message: "Rate/Hour is required" }),
    document: z.string().refine(
      (document) => {
        const allowedExtensions = ["pdf", "jpg", "jpeg", "png"];
        const extension = document.split(".").pop();
        return allowedExtensions.includes(extension);
      },
      {
        message: "Please select a valid file (PDF, JPEG, PNG)",
      }
    ),
    photo: z.string().refine(
      (document) => {
        const allowedExtensions = ["jpg", "jpeg", "png"];
        const extension = document.split(".").pop();
        return allowedExtensions.includes(extension);
      },
      {
        message: "Please select a valid file (JPEG, PNG)",
      }
    ),
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Welcome />
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-white">
              Sign Up
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-700 placeholder-gray-500 text-white bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-700 placeholder-gray-500 text-white bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-700 placeholder-gray-500 text-white bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-300"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-700 placeholder-gray-500 text-white bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-300"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-700 text-white bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="client">Client</option>
                  <option value="lawyer">Lawyer</option>
                </select>
              </div>

              {formData.role === "lawyer" && (
                <>
                  <div>
                    <label
                      htmlFor="qualificationCertificate"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Qualification Certificate
                    </label>
                    <input
                      id="qualificationCertificate"
                      name="qualificationCertificate"
                      type="file"
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-700 text-white bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="yearsOfExperience"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Years of Experience
                      </label>
                      <input
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        type="number"
                        required
                        className="mt-1 block w-full px-4 py-3 border border-gray-700 placeholder-gray-500 text-white bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter years of experience"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="w-1/2">
                      <label
                        htmlFor="ratePerHour"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Rate/Hour
                      </label>
                      <input
                        id="ratePerHour"
                        name="ratePerHour"
                        type="number"
                        required
                        className="mt-1 block w-full px-4 py-3 border border-gray-700 placeholder-gray-500 text-white bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your rate per hour"
                        value={formData.ratePerHour}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
