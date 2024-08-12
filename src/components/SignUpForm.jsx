import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@supabase/supabase-js";
import { SERVER_URL } from "../../utils";

function SignUpForm() {
  const navigate = useNavigate();
  const supabaseUrl = "https://xjwquyggfukertlnbeqp.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const schema = z.object({
    firstname: z
      .string({
        required_error: "First Name is required",
      })
      .min(1, { message: "First Name is required" }),
    lastname: z
      .string({
        required_error: "Last Name is required",
      })
      .min(1, { message: "Last Name is required" }),
    role: z
      .string({
        required_error: "Role is required",
      })
      .min(1, { message: "Role is required" }),
    phone: z
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
      firstname: "",
      lastname: "",
      role: "",
      phone: "",
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
  const onSubmit = async (values, e) => {
    if (values?.role === "lawyer") {
      try {
        // your submission logic here...

        const formData = new FormData(e.target);

        const uploadPromises = [];
        if (values?.document) {
          const documentFile = formData.get("document");
          const documentPath = `documents/${documentFile.name}`;
          uploadPromises.push(
            supabase.storage.from("files").upload(documentPath, documentFile)
          );
        }
        if (values?.photo) {
          const photoFile = formData.get("photo");
          const photoPath = `photos/${photoFile.name}`;
          uploadPromises.push(
            supabase.storage.from("files").upload(photoPath, photoFile)
          );
        }
        const uploadResults = await Promise.all(uploadPromises);
        const publicUrls = await Promise.all(
          uploadResults.map(async (result) => {
            if (result.error) {
              throw new Error("Upload failed");
            }
            const { data } = await supabase.storage
              .from("files")
              .getPublicUrl(result.data.path);
            return data.publicUrl;
          })
        );
        const resultValues = {
          ...values,
          qualification_certificate: publicUrls[0],
          image: publicUrls[1],
          id_no: Number(values.id),
          rate_per_hour: Number(values.rate),
          years_of_experience: Number(values.experience),
        };
        console.log(resultValues);
        await fetch(`${SERVER_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...resultValues,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));

        reset();
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        console.log(values);
        await fetch(`${SERVER_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            id_no: Number(values.id),
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));

        reset();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const roleValue = watch("role");

  return (
    <>
      <div className="flex justify-center h-[150px] pt-5">
        <img src="src/assets/images/haki logo_Mesa de trabajo 1 copia 5.png" />
      </div>
      <div
        id="signup"
        className="min-h-screen bg-[#F2F5F5] flex justify-center py-12 sm:px-6 lg:px-8"
      >
        <img
          className="w-[500px] mx-auto my-4 rounded-xl drop-shadow-2xl"
          src="src/assets/images/Plane-Hi-Sign--Streamline-Ux.svg"
        />

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#F2F5F5]  py-8 px-4 drop-shadow-2xl sm:rounded-xl sm:px-10">
            <h2 className="text-[#37B9F1] font-bold text-2xl">
              Sign Up |{" "}
              <a
                onClick={() => navigate("/login")}
                href="#"
                className="font-normal text-[#37B9F1] hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Login
              </a>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Controller
                name="firstname"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5  text-[#37B9F1]"
                    >
                      First Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1] ">
                      <input
                        name="name"
                        placeholder="John"
                        type="text"
                        required
                        className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                name="lastname"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5  text-[#37B9F1]"
                    >
                      Last Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                      <input
                        name="name"
                        placeholder="Doe"
                        type="text"
                        required
                        className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                  <div className="mt-6 border-b border-[#37B9F1]">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium leading-5  text-[#37B9F1]"
                    >
                      Role
                    </label>
                    <select
                      name="role"
                      required
                      className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                      className="block text-sm font-medium leading-5 text-[#37B9F1]"
                    >
                      Email address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                      <input
                        name="email"
                        placeholder="user@example.com"
                        type="email"
                        required
                        className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5 text-[#37B9F1]"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                      <input
                        name="name"
                        placeholder="0712345678"
                        type="text"
                        required
                        className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                      className="block text-sm font-medium leading-5  text-[#37B9F1]"
                    >
                      National Identification Number
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                      <input
                        name="name"
                        placeholder="12345678"
                        type="text"
                        required
                        className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                      className="block text-sm font-medium leading-5 text-[#37B9F1]"
                    >
                      Area of Residence
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                      <input
                        name="name"
                        placeholder="Nairobi"
                        type="text"
                        required
                        className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                          className="block text-sm font-medium leading-5 text-[#37B9F1]"
                        >
                          Password
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                          <input
                            name="password"
                            type="password"
                            required
                            {...field}
                            className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                          className="block text-sm font-medium leading-5  text-[#37B9F1]"
                        >
                          Years of Experience
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                          <input
                            name="name"
                            placeholder="20"
                            type="text"
                            required
                            className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                          className="block text-sm font-medium leading-5  text-[#37B9F1]"
                        >
                          Specialization
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                          <input
                            name="name"
                            placeholder="Family Law"
                            type="text"
                            required
                            className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                          className="block text-sm font-medium leading-5  text-[#37B9F1]"
                        >
                          Rate/Hour
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                          <input
                            name="name"
                            placeholder="2000"
                            type="text"
                            required
                            className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                          className="block text-sm font-medium leading-5  text-[#37B9F1]"
                        >
                          Upload your Image
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="file"
                            className="flex h-10 w-full rounded-md border border-input bg-[#F2F5F5] px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
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
                          className="block text-sm font-medium leading-5  text-[#37B9F1]"
                        >
                          Upload your Document
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="file"
                            className="flex h-10 w-full rounded-md border border-input bg-[#F2F5F5] px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
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
                          className="block text-sm font-medium leading-5 text-[#37B9F1]"
                        >
                          Password
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm border-b border-[#37B9F1]">
                          <input
                            name="password"
                            type="password"
                            required
                            {...field}
                            className="bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#F2F5F5] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                        onClick={() => navigate("/welcome")}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#37B9F1] hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
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
    </>
  );
}

export default SignUpForm;
