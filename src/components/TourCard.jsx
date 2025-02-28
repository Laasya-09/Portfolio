import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({ id, name, image, duration, highlights, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-2 py-1 m-2 rounded text-sm font-medium">
          {duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
        <div className="mb-3">
          <h4 className="text-sm font-medium text-gray-700 mb-1">Highlights:</h4>
          <ul className="text-gray-600 text-sm pl-5 list-disc">
            {highlights.slice(0, 2).map((highlight, index) => (
              <li key={index} className="line-clamp-1">{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-bold">₹{price.toLocaleString()}</span>
          <Link 
            to={`/tour/${id}`} 
            className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;