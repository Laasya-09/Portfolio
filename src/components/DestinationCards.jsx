import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1601581875039-e899893d520c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    price: '$1,299',
    description: 'Experience the breathtaking beauty of Santorini whitewashed villages perched on volcanic cliffs. Enjoy stunning sunsets over the Aegean Sea, explore charming villages like Oia and Fira, and relax on unique red and black volcanic beaches. Our comprehensive tour includes visits to ancient ruins, wine tastings at local vineyards, and authentic Greek cuisine experiences.',
    duration: '7 days',
    included: ['Accommodations', 'Daily breakfast', 'Island tour', 'Wine tasting', 'Ferry transfers']
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    price: '$1,499',
    description: 'Discover the ancient capital of Japan with its perfectly preserved temples, shrines, and gardens. Our Kyoto tour takes you through the city 17 UNESCO World Heritage Sites, including the famous Fushimi Inari Shrine with its thousands of vermilion torii gates, the bamboo groves of Arashiyama, and the gold-leafed Kinkaku-ji Temple. Experience traditional tea ceremonies, meet local artisans, and enjoy authentic Japanese cuisine.',
    duration: '8 days',
    included: ['Luxury accommodations', 'Airport transfers', 'Guided shrine tours', 'Tea ceremony', 'Kimono experience']
  },
  {
    id: 3,
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    price: '$1,799',
    description: 'Journey to the mystical ancient Incan citadel perched high in the Andes Mountains. Our expertly guided tour leads you through the Sacred Valley to the awe-inspiring Machu Picchu. Learn about the sophisticated engineering and astronomy of the Incas while exploring this 15th-century marvel. The tour includes visits to Cusco, the former Incan capital, and opportunities to experience vibrant Peruvian culture and cuisine.',
    duration: '10 days',
    included: ['Hotel accommodations', 'Train to Machu Picchu', 'Expert guides', 'Sacred Valley tour', 'Cusco city tour']
  },
  {
    id: 4,
    name: 'Serengeti, Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    price: '$2,499',
    description: 'Experience the ultimate African safari in the world-famous Serengeti National Park. Witness the spectacular Great Migration, where millions of wildebeest, zebra, and gazelle traverse the plains in search of water and fresh grass. Our expertly guided safari takes you through Tanzania most breathtaking landscapes, with opportunities to see the Big Five (lion, leopard, elephant, buffalo, and rhino) in their natural habitat.',
    duration: '9 days',
    included: ['Luxury tented camps', 'Game drives', 'Park fees', 'Professional guides', 'All meals']
  },
  {
    id: 5,
    name: 'Amalfi Coast, Italy',
    image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    price: '$1,899',
    description: 'Explore the stunning Mediterranean coastline of southern Italy with its pastel-colored fishing villages perched on dramatic cliffs. Our Amalfi Coast tour takes you through picturesque towns like Positano, Ravello, and Amalfi, with their winding streets, beautiful beaches, and historic architecture. Enjoy authentic Italian cuisine, visit local lemon groves, and cruise the crystal-clear waters of the Tyrrhenian Sea.',
    duration: '8 days',
    included: ['Boutique hotel stays', 'Private transportation', 'Boat excursion', 'Limoncello tasting', 'Cooking class']
  },
  {
    id: 6,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    price: '$1,299',
    description: 'Discover the Island of the Gods with its lush rice terraces, ancient temples, and vibrant culture. Our Bali tour combines relaxation, adventure, and cultural immersion, taking you from pristine beaches to mist-shrouded mountain villages. Visit sacred temples like Tanah Lot and Uluwatu, experience traditional Balinese dance performances, participate in cooking classes, and enjoy optional activities like surfing, yoga, and spa treatments.',
    duration: '10 days',
    included: ['Villa accommodations', 'Daily breakfast', 'Temple tours', 'Cultural performances', 'Airport transfers']
  }
];

const DestinationCards = ({ onDestinationClick }) => {
  return (
    <div id="destinations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
        Featured Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div 
            key={destination.id}
            onClick={() => onDestinationClick(destination)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <img 
              className="w-full h-56 object-cover" 
              src={destination.image} 
              alt={destination.name} 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(destination.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">{destination.rating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-indigo-600 font-bold">{destination.price}</span>
                <span className="text-gray-500">{destination.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationCards;
