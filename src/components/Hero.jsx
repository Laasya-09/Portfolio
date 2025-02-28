import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Travel destination" 
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Discover Amazing Places
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Experience the world's most breathtaking destinations with our carefully curated travel tours. Create memories that last a lifetime.
        </p>
        <div className="mt-10">
          <a
            href="#destinations"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50"
          >
            Explore Tours
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
