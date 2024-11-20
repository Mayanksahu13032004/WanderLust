import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8000/api/v1/project/userCard/get-Card')
      .then((response) => {
        setCards(response.data); // Set cards data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
        toast.error('Failed to fetch cards!'); // Show error message
      });
  }, []);

  const goToDetailPage = (card) => {
    navigate('/detail', { state: { card } }); // Pass card data to the DetailPage
  };

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Displaying cards */}
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <div
              onClick={() => goToDetailPage(card)}
                key={index}
                className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <button >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                </button>
                <h2 className="font-semibold text-2xl mb-2">{card.title}</h2>
                <p className="font-semibold text-xl text-gray-700">
                  Rs- {card.price} /night
                </p>
              </div>
            ))
          ) : (
            <p>No cards found.</p>
          )}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Home;
