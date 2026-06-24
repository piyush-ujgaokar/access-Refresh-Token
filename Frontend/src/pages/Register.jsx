import React from "react";
import useAuth from "../hooks/useAuth";


const Register = () => {

const {register,onRegister,handleSubmit,navigate,errors,}=useAuth()


  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Create Account
        </h2>


        <form onSubmit={handleSubmit(onRegister)} className="space-y-5">


          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              className={`w-full px-4 py-3 rounded-lg border text-black outline-none transition
              ${
                errors.username
                  ? "border-red-500"
                  : "border-black focus:ring-2 focus:ring-black"
              }`}
              {...register("username",{
                required:"Username is Required"
              })}
            />

            {errors.username && (
              <p className="text-red-600 text-sm mt-2">
                {errors.username.message}
              </p>
            )}
          </div>



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
              {...register("email",{
                required:"Email is Required"
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
              {...register("password",{
                required:"Password is required",
                minLength:{
                  value:6,
                  message:"Password must have 6 character"
                }
              })}
            />

            {errors.password && (
              <p className="text-red-600 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>



          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold border border-black
            hover:bg-white hover:text-black transition duration-300"
          >
            Register
          </button>


        </form>



        <p className="text-center text-sm text-black mt-6">
          Already have an account?{" "}
          <span onClick={()=> navigate('/')} className="font-semibold underline cursor-pointer">
            Login
          </span>
        </p>


      </div>

    </div>
  );
};

export default Register;