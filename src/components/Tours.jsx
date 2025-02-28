import React from 'react';
import TourCard from './TourCard';

const Tours = () => {
  // Sample tour data - replace with your actual data or API calls
  const tours = [
    {
      id: 1,
      name: "Southern Spiritual Circuit",
      image: "/api/placeholder/400/300",
      duration: "7 Days / 6 Nights",
      highlights: [
        "Tirupati Balaji Darshan with VIP entry",
        "Padmavathi Temple visit",
        "Kalahasti Temple exploration",
        "Comfortable accommodation"
      ],
      price: 15999
    },
    {
      id: 2,
      name: "Chardham Yatra Package",
      image: "/api/placeholder/400/300",
      duration: "12 Days / 11 Nights",
      highlights: [
        "Complete Chardham pilgrimage (Yamunotri, Gangotri, Kedarnath, Badrinath)",
        "Helicopter option for Kedarnath",
        "All meals included",
        "Experienced guide throughout"
      ],
      price: 32999
    },
    {
      id: 3,
      name: "Golden Triangle with Varanasi",
      image: "/api/placeholder/400/300",
      duration: "8 Days / 7 Nights",
      highlights: [
        "Delhi, Agra, Jaipur sightseeing",
        "Evening Ganga Aarti in Varanasi",
        "Boat ride on sacred Ganges",
        "Luxury accommodation"
      ],
      price: 22999
    },
    {
      id: 4,
      name: "Kashmir Pilgrimage Tour",
      image: "/api/placeholder/400/300",
      duration: "6 Days / 5 Nights",
      highlights: [
        "Amarnath Cave trek with assistance",
        "Shankaracharya Temple visit",
        "Srinagar sightseeing",
        "Shikara ride on Dal Lake"
      ],
      price: 18999
    },
    {
      id: 5,
      name: "Tamil Nadu Temple Tour",
      image: "/api/placeholder/400/300",
      duration: "5 Days / 4 Nights",
      highlights: [
        "Meenakshi Temple, Madurai",
        "Rameshwaram Temple",
        "Kanyakumari sunset view",
        "Traditional South Indian meals"
      ],
      price: 13499
    },
    {
      id: 6,
      name: "Buddhist Circuit Tour",
      image: "/api/placeholder/400/300",
      duration: "7 Days / 6 Nights",
      highlights: [
        "Bodhgaya - site of Buddha's enlightenment",
        "Nalanda and Rajgir visit",
        "Sarnath exploration",
        "Meditation sessions"
      ],
      price: 16999
    },
    {
      id: 7,
      name: "Kailash Mansarovar Yatra",
      image: "/api/placeholder/400/300",
      duration: "15 Days / 14 Nights",
      highlights: [
        "Holy Mount Kailash parikrama",
        "Lake Mansarovar visit",
        "All necessary permits arranged",
        "Medical assistance throughout"
      ],
      price: 175000
    },
    {
      id: 8,
      name: "Mathura-Vrindavan Spiritual Journey",
      image: "/api/placeholder/400/300",
      duration: "3 Days / 2 Nights",
      highlights: [
        "Krishna Janmasthan Temple",
        "Banke Bihari Temple darshan",
        "ISKCON Temple visit",
        "Yamuna Aarti experience"
      ],
      price: 8499
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Exclusive Tour Packages</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the divine and cultural richness of India with our carefully designed tour packages.
            All-inclusive journeys with comfortable accommodation, transportation, and expert guides.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              id={tour.id}
              name={tour.name}
              image={tour.image}
              duration={tour.duration}
              highlights={tour.highlights}
              price={tour.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
