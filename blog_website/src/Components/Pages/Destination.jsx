import React from "react";
import Comments from "../Pages/Comments";
import { useState } from "react";

function Destinations() {
  const destinations = [
    {
      name: "Paris, France",
      img: "https://i.pinimg.com/736x/21/06/55/2106558ee01ba951864f63464573f2b2.jpg",
    },
    {
      name: "Bali, Indonesia",
      img: "https://i.pinimg.com/736x/79/7f/10/797f10311478899b73037d563d76b7f4.jpg",
    },
    {
      name: "Tokyo, Japan",
      img: "https://i.pinimg.com/736x/c4/47/cf/c447cf00e67c5ddccb84ca228d9a8d1d.jpg",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Top Destinations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={dest.img}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {dest.name}
              </h2>

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="bg-green-600 text-white px-4 py-2 mt-5 rounded-md"
              >
                {openIndex === index ? "Hide Comments" : "Add Comments"}
              </button>
              {openIndex === index && <Comments />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
