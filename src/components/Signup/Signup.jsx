import React, { useState } from "react";
import axios from "axios";
import { ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
    console.log("Updated user object:", user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User data:", user);

    try {
      console.log("Enter in try");
      
      const response = await axios.post(
        "http://localhost:8000/api/v1/project/userAuth/signup",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log("User signed up successfully:", response.data.data);
        toast.success("User registered successfully!");
      } else {
        console.log("Failed to register");
        toast.error('Failed to register user!');
      }
    } catch (error) {
      console.error("Error occurred while signing up:", error.message);
      alert("Error during sign up: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800 text-center">
          Sign up on WanderLust
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
              name="username"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-red-500 to-indigo-600 text-white text-lg font-medium hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Log in
          </a>
        </p>
        <ToastContainer /> 
      </div>
    </div>
  );
}

export default Signup;
