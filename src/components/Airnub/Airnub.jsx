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

  const [image, setImage] = useState(null); // For storing the selected file
  const [isSubmitting, setIsSubmitting] = useState(false); // For tracking submission state

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected file in state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate image file
    if (!image) {
      toast.error('Please select an image file!');
      return;
    }

    setIsSubmitting(true); // Start loading state

    try {
      const formData = new FormData();
      formData.append('title', user.title);
      formData.append('description', user.description);
      formData.append('price', user.price);
      formData.append('country', user.country);
      formData.append('location', user.location);
      formData.append('image', image); // Add image file to formData

      const response = await fetch(
        'http://localhost:8000/api/v1/project/userCard/create-card',
        {
          method: 'POST',
          body: formData, // Send formData directly
        }
      );

      if (response.status === 201) {
        toast.success('Card Created successfully!');
        console.log('Card created successfully');
        setUser({
          title: '',
          description: '',
          price: '',
          country: '',
          location: '',
        });
        setImage(null); // Reset image state
      } else {
        toast.error('An error occurred while creating the card!');
      }
    } catch (error) {
      console.error('Error creating card:', error);
      toast.error('An error occurred while creating the card!');
    } finally {
      setIsSubmitting(false); // Reset loading state after request
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
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Title
            </label>
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
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Description
            </label>
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
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Price
            </label>
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
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Country
            </label>
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
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Location
            </label>
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

          {/* Image Input */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting} // Disable button while submitting
            className={`w-full py-3 rounded-lg text-white text-lg font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              isSubmitting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Listing'
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Airnub;
