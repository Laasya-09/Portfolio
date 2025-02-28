import React from 'react';
import DestinationCard from './DestinationCard';

const Destinations = () => {
  // Sample destination data - replace with your actual data or API calls
  const destinations = [
    {
      id: 1,
      name: "Tirupati",
      image: "/api/placeholder/400/300",
      description: "Visit the famous Tirumala Venkateswara Temple, one of the most visited religious sites in the world with stunning architecture and spiritual significance.",
      rating: 4.9,
      price: 5999
    },
    {
      id: 2,
      name: "Varanasi",
      image: "/api/placeholder/400/300",
      description: "Experience the spiritual capital of India with its ancient ghats, temples, and the sacred Ganges River. A city of profound cultural heritage.",
      rating: 4.8,
      price: 7499
    },
    {
      id: 3,
      name: "Kedarnath",
      image: "/api/placeholder/400/300",
      description: "Trek to one of the holiest Hindu temples dedicated to Lord Shiva, located in the majestic Himalayan ranges with breathtaking views.",
      rating: 4.7,
      price: 9999
    },
    {
      id: 4,
      name: "Rishikesh",
      image: "/api/placeholder/400/300",
      description: "The yoga capital of the world, offering spiritual retreats, adventure sports, and the sacred Ganges flowing through beautiful landscapes.",
      rating: 4.6,
      price: 6499
    },
    {
      id: 5,
      name: "Amarnath",
      image: "/api/placeholder/400/300",
      description: "Undertake the sacred pilgrimage to the Amarnath Cave with its naturally formed ice Shivling, through stunning Kashmir valleys.",
      rating: 4.8,
      price: 12999
    },
    {
      id: 6,
      name: "Rameshwaram",
      image: "/api/placeholder/400/300",
      description: "Visit this island pilgrimage site with the magnificent Ramanathaswamy Temple and beautiful beaches where two oceans meet.",
      rating: 4.7,
      price: 8499
    },
    {
      id: 7,
      name: "Haridwar",
      image: "/api/placeholder/400/300",
      description: "One of the seven holiest places in Hinduism, famous for the Ganga Aarti, numerous temples, and spiritual atmosphere along the Ganges.",
      rating: 4.5,
      price: 5999
    },
    {
      id: 8,
      name: "Shirdi",
      image: "/api/placeholder/400/300",
      description: "Experience the divine presence at Sai Baba's shrine, a place of faith, miracles, and spiritual enlightenment for millions of devotees.",
      rating: 4.6,
      price: 4999
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Explore Sacred Destinations</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the most revered spiritual destinations across India with our specially curated packages.
            Experience divine blessings and cultural heritage at these sacred places.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              name={destination.name}
              image={destination.image}
              description={destination.description}
              rating={destination.rating}
              price={destination.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
