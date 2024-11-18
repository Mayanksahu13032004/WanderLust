import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Airnub() {
  const [user, setUser] = useState({
    title: '',
    description: '',
    price: '',
    country: '',
    location: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/v1/project/userCard/create-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.status === 201) {
        toast.success('Card Created successfully!');
        console.log('Card created successfully');
        setUser({ title: '', description: '', price: '', country: '', location: '' }); // Reset form
      } else {
        toast.error('An error occurred while creating the card!');
      }
    } catch (error) {
      console.error('Error creating card:', error);
      toast.error('An error occurred while creating the card!');
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create a New Listing
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={user.title}
              onChange={handleInput}
              placeholder="Add a catchy title"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={user.description}
              onChange={handleInput}
              placeholder="Enter a description for your listing"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={user.price}
              onChange={handleInput}
              placeholder="Enter price"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">Country</label>
            <select
              name="country"
              value={user.country}
              onChange={handleInput}
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a country</option>
              <option value="India">India</option>
              {/* Add more countries if needed */}
            </select>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={user.location}
              onChange={handleInput}
              placeholder="Enter city and state"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-red-500 to-indigo-600 text-white text-lg font-medium hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
          >
            Submit Listing
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Airnub;
