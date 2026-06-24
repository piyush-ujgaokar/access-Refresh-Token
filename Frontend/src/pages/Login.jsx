import React from "react";
import useAuth from "../hooks/useAuth";

const Login = () => {

const {onLogin,register,handleSubmit,errors,navigate}=useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Login
        </h2>

        <form onSubmit={handleSubmit(onLogin)} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-lg border text-black outline-none transition
              ${
                errors.email
                  ? "border-red-500"
                  : "border-black focus:ring-2 focus:ring-black"
              }`}
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-600 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>


          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-lg border text-black outline-none transition
              ${
                errors.password
                  ? "border-red-500"
                  : "border-black focus:ring-2 focus:ring-black"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-600 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold border border-black
            hover:bg-black-300 hover:text-white transition duration-300"
          >
            Login
          </button>

        </form>


        <div className="mt-6 text-center text-sm text-black">
          Don't have an account?{" "}
          <span onClick={()=> navigate('/register')} className="font-semibold cursor-pointer underline">
           Register
          </span>
        </div>

      </div>

    </div>
  );
};

export default Login;