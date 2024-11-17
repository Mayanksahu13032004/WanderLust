import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const navigate = useNavigate();
const [user,setUser]=useState({
     email: "",
      password: ""
});

const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  setUser({ ...user, [name]: value });
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  const apiUrl='http://localhost:8000/api/v1/project/userAuth/login'
  try {
    const response=await fetch(apiUrl,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
console.log("if started");

if(response.status==200)
{
  console.log("User login successfullh");
  toast.success('User Login successfully!');
  navigate('/home');
  
}
else
{
  console.log("not signup  yet");
  toast.error('User not registered with this email!');
}



  } catch (error) {
    console.error('Error during login:', error);
    toast.error('User not registered with this email!');
  }
}



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800 text-center">
          Login to Your Account
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
              onChange={handleInput}
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              onChange={handleInput}
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-red-500 to-indigo-600 text-white text-lg font-medium hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-red-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
      <ToastContainer /> 
    </div>
  );
}

export default Login;
