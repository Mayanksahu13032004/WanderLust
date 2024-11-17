import React from 'react'

function Airnub() {
  return (
    <div className="flex justify-center items-center  h-full bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create a New Listing
        </h1>
        <form >
          {/* Title */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Add a catchy title"
            //   value={formData.title}
            //   onChange={handleChange}
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
              placeholder="Enter a description for your listing"
            //   value={formData.description}
            //   onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Upload Listing Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
            //   onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
            //   value={formData.price}
            //   onChange={handleChange}
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
            //   value={formData.country}
            //   onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="India">India</option>
              {/* Add more countries if needed */}
            </select>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter city and state"
            //   value={formData.location}
            //   onChange={handleChange}
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
      </div>
    </div>
  )
}

export default Airnub
















// import React, { useState } from "react";

// function CreateListing() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     image: null,
//     price: "",
//     country: "India",
//     location: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       image: e.target.files[0],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("image", formData.image);
//     data.append("price", formData.price);
//     data.append("country", formData.country);
//     data.append("location", formData.location);

//     // Replace the URL with your backend endpoint
//     fetch("http://your-backend-endpoint/api/listings", {
//       method: "POST",
//       body: data,
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log("Success:", result);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           Create a New Listing
//         </h1>
//         <form onSubmit={handleSubmit}>
//           {/* Title */}
//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700 mb-2">
//               Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               placeholder="Add a catchy title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700 mb-2">
//               Description
//             </label>
//             <textarea
//               name="description"
//               placeholder="Enter a description for your listing"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           {/* Image Upload */}
//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700 mb-2">
//               Upload Listing Image
//             </label>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="block w-full text-sm text-gray-500 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none"
//               required
//             />
//           </div>

//           {/* Price */}
//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700 mb-2">
//               Price
//             </label>
//             <input
//               type="number"
//               name="price"
//               placeholder="Enter price"
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Country */}
//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700 mb-2">
//               Country
//             </label>
//             <select
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="India">India</option>
//               {/* Add more countries if needed */}
//             </select>
//           </div>

//           {/* Location */}
//           <div className="mb-6">
//             <label className="block text-lg font-medium text-gray-700 mb-2">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               placeholder="Enter city and state"
//               value={formData.location}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-medium hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//           >
//             Submit Listing
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateListing;
