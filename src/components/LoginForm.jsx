import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../utils";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useUser } from "../UserContext";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useUser();
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const schema = z.object({
    email: z
      .string()
      .email({ message: "Enter a valid email address" })
      .min(1, { message: "Email is required" }),
    password: z.string().min(1, { message: "Password is required" }),
  });
  const { control, formState, reset, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    await fetch(`${SERVER_URL}/login`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "fail") {
          toast.error(data.message);
        } else {
          const user = data.user;
          const accessToken = data.access_token;
          console.log(accessToken);
          setUser(user)
          localStorage.setItem(
            "session",
            JSON.stringify({ user, accessToken })
          );
          toast.success(data.message);
          console.log(user);
          reset();
          navigate(user?.role === "lawyer" ? "/home" : "/home");
        }
      })
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center h-[150px] pt-5">
        <img src="src/assets/images/haki logo_Mesa de trabajo 1 copia 5.png" />
      </div>
      <section className="bg-[#F2F5F5]">
        <div className="flex flex-col-2 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 gap-52">
          <div>
            <img
              className="w-[400px] mx-auto my-4 rounded-full drop-shadow-md"
              src="src/assets/images/Login.jpg"
            />
          </div>
          <div className="w-full bg-[#F2F5F5] drop-shadow-2xl rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#37B9F1] md:text-2xl">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6 bg-[#F2F5F5]"
                noValidate
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-[#37B9F1]"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="border-b border-[#37B9F1] bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#37B9F1] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="name@company.com"
                        required
                        {...field}
                      />
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
                    <div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-[#37B9F1]"
                        >
                          Password
                        </label>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          placeholder="••••••••"
                          className="border-b border-[#37B9F1] bg-[#F2F5F5] appearance-none block w-full px-3 py-2 rounded-md placeholder-[#F2F5F5] focus:outline-none focus:shadow-outline-blue focus:border-[#37B9F1] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          required
                          {...field}
                        />
                        <span
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-20 top-[6rem] right-[10px] pr-[25px] pl-[20px] flex items-center cursor-pointer"
                        >
                          <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                          />
                        </span>
                      </div>
                      {fieldState.invalid && (
                        <p className="text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5 border-[#37B9F1]">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-[#37B9F1] rounded bg-[#37B9F1] focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-[#37B9F1]">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#37B9F1] hover:bg-[#46adda] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800 "
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting ? "Signing in...." : "Sign in"}
                </button>
                <p className="text-sm font-light text-[#242d2d]">
                  Don't have an account yet?
                  <a
                    onClick={() => navigate("/signup")}
                    href="#"
                    className="ml-2 font-medium text-[#37B9F1] hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
