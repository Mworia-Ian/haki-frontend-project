import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function SignUpForm() {
  const navigate = useNavigate();

  const schema = z.object({
    first_name: z
      .string({
        required_error: "First Name is required",
      })
      .min(1, { message: "First Name is required" }),
    last_name: z
      .string({
        required_error: "Last Name is required",
      })
      .min(1, { message: "Last Name is required" }),
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
    experience: z.string().superRefine((data, ctx) => {
      if (data?.role === "lawyer" && !data.experience) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Experience is required",
        });
      }
    }),
    specialization: z.string().superRefine((data, ctx) => {
      if (data?.role === "lawyer" && !data.specialization) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "specialization is required",
        });
      }
    }),
    rate: z.string().superRefine((data, ctx) => {
      if (data?.role === "lawyer" && !data.rate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Rate is required",
        });
      }
    }),
    document: z.string().superRefine((data, ctx) => {
      if (data?.role === "lawyer" && !data.document) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Document is required",
        });
      } else if (data?.role === "lawyer") {
        const allowedExtensions = ["jpg", "jpeg", "png"];
        const extension = data?.document?.split(".").pop();
        if (!allowedExtensions.includes(extension)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please select a valid file (JPEG, PNG)",
          });
        }
      }
    }),
    photo: z.string().superRefine((data, ctx) => {
      if (data?.role === "lawyer" && !data.photo) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Photo is required",
        });
      } else if (data?.role === "lawyer") {
        const allowedExtensions = ["jpg", "jpeg", "png"];
        const extension = data?.photo?.split(".").pop();
        if (!allowedExtensions.includes(extension)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please select a valid file (JPEG, PNG)",
          });
        }
      }
    }),
  });
  const { control, formState, reset, watch, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      role: "",
      phone_number: "",
      email: "",
      id: "",
      area_of_residence: "",
      password: "",
      experience: "",
      specialization: "",
      rate: "",
      document: "",
      photo: "",
    },
  });
  const onSubmit = async (values) => {
    try {
      // your submission logic here...
      console.log(values);
      reset(); // reset the form fields
    } catch (error) {
      console.error(error);
    }
  };

  const roleValue = watch("role");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or
          <a
            href="#"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            login to your account
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Controller
              name="first_name"
              control={control}
              render={({ field, fieldState }) => (
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      name="name"
                      placeholder="John"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      {...field}
                    />
                  </div>
                  {fieldState.invalid && (
                    <p className="text-red-500">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="last_name"
              control={control}
              render={({ field, fieldState }) => (
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      name="name"
                      placeholder="Doe"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      {...field}
                    />
                  </div>
                  {fieldState.invalid && (
                    <p className="text-red-500">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            <Controller
              name="role"
              control={control}
              render={({ field, fieldState }) => (
                <div className="mt-6">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    Role
                  </label>
                  <select
                    name="role"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    {...field}
                  >
                    <option value="">Select a Role</option>
                    <option value="client">Client</option>
                    <option value="lawyer">Lawyer</option>
                  </select>
                  {fieldState.invalid && (
                    <p className="text-red-500">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      name="email"
                      placeholder="user@example.com"
                      type="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      {...field}
                    />
                  </div>

                  {fieldState.invalid && (
                    <p className="text-red-500">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            <Controller
              name="phone_number"
              control={control}
              render={({ field, fieldState }) => (
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      name="name"
                      placeholder="0712345678"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      {...field}
                    />
                  </div>
                  {fieldState.invalid && (
                    <p className="text-red-500">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="id"
              control={control}
              render={({ field, fieldState }) => (
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    National Identification Number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      name="name"
                      placeholder="12345678"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      {...field}
                    />
                  </div>
                  {fieldState.invalid && (
                    <p className="text-red-500">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            <Controller
              name="area_of_residence"
              control={control}
              render={({ field, fieldState }) => (
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    Area of Residence
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      name="name"
                      placeholder="Nairobi"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      {...field}
                    />
                  </div>
                  {fieldState.invalid && (
                    <p className="text-red-500">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            {roleValue !== "lawyer" ? (
              <>
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="mt-6">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1 rounded-md shadow-sm">
                        <input
                          name="password"
                          type="password"
                          required
                          {...field}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      {fieldState.invalid && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      disabled={formState.isSubmitting}
                    >
                      {formState.isSubmitting
                        ? "Uploading your info..."
                        : "Register"}
                    </button>
                  </span>
                </div>
              </>
            ) : (
              <>
                <Controller
                  name="experience"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="mt-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-5  text-gray-700"
                      >
                        Years of Experience
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          name="name"
                          placeholder="20"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          {...field}
                        />
                      </div>
                      {fieldState.invalid && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <Controller
                  name="specialization"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="mt-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-5  text-gray-700"
                      >
                        Specialization
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          name="name"
                          placeholder="Family Law"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          {...field}
                        />
                      </div>
                      {fieldState.invalid && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <Controller
                  name="rate"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="mt-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-5  text-gray-700"
                      >
                        Rate/Hour
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          name="name"
                          placeholder="2000"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          {...field}
                        />
                      </div>
                      {fieldState.invalid && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <Controller
                  name="photo"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="mt-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-5  text-gray-700"
                      >
                        Upload your Image
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="file"
                          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                          {...field}
                        />
                      </div>
                      {fieldState.invalid && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <Controller
                  name="document"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="mt-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-5  text-gray-700"
                      >
                        Upload your Document
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="file"
                          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                          {...field}
                        />
                      </div>
                      {fieldState.invalid && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="mt-6">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1 rounded-md shadow-sm">
                        <input
                          name="password"
                          type="password"
                          required
                          {...field}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      {fieldState.invalid && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      disabled={formState.isSubmitting}
                    >
                      {formState.isSubmitting
                        ? "Uploading your info..."
                        : "Register"}
                    </button>
                  </span>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
