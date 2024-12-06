
import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-blue-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-3xl font-bold text-white">Laasya</a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-600 px-3 py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-600 px-3 py-2">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-white hover:text-blue-600 px-3 py-2">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-blue-600 px-3 py-2">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-600 px-3 py-2">Contact</button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">About</button>
              <button onClick={() => scrollToSection('skills')} className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

<Hero/>

const Projects = () => (
  <section id="projects" className="bg-gradient-to-r from-blue-300 to-indigo-200 px-4 py-2 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950 py-12 px-4 lg:px-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img 
            src="https://tse1.mm.bing.net/th?id=OIP.jVRdWiCGmmPaSDDpA8khRAHaDf&pid=Api&P=0&h=180"  // Replace with your image URL
            alt="Portfolio Website"
            className="w-72 h-60 object-cover rounded-lg mx-auto"
          />
          <h3 className="text-2xl font-semibold text-white mt-4">Google Clone</h3>
          <p className="text-white mt-2">Built a responsive portfolio website using React and Tailwind CSS.</p>
          <div className="mt-4">
            <span className="text-sm font-semibold text-white">Technologies Used:</span>
            <div className="mt-2 flex space-x-4 text-sm text-gray-700">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg font-semibold text-white">HTML</span>
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg font-semibold text-white">CSS</span>
            </div>
          </div>
          <div className="mt-4">
            <a href="https://laasya-09.github.io/Google-Clone/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
            <span className="bg-blue-100 px-2 py-1 rounded-lg font-semibold text-blue-700">View Project</span>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950 py-12 px-4 lg:px-8 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img 
            src="https://tse2.mm.bing.net/th?id=OIP.bIu__-nC4FGJX-ptn2dLLQHaED&pid=Api&P=0&h=180 "  // Replace with your image URL
            alt="Web Development Project"
            className="w-80 h-60 object-cover rounded-lg mx-auto"
          />
          <h3 className="text-2xl font-semibold text-white mt-4">COSMETICS WEBSITE</h3>
          <p className="text-white mt-2">Created a dynamic website with PHP and Bootstrap.</p>
          <div className="mt-4">
            <span className="text-sm font-semibold text-white">Technologies Used:</span>
            <div className="mt-2 flex space-x-4 text-sm text-gray-700">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg font-semibold text-white">HTML</span>
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg font-semibold text-white">Bootstrap</span>
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg font-semibold text-white">CSS</span>
            </div>
          </div>
          <div className="mt-4">
            <a href="https://laasya-09.github.io/E-commerce-Website/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
            <span className="bg-blue-100 px-2 py-1 rounded-lg font-semibold text-blue-700">View Project</span>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-950 py-12 px-4 lg:px-8 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img 
            src="https://i.pinimg.com/originals/b0/f0/42/b0f0426a7eefa481bd7853d41263882b.png"  // Replace with your image URL
            alt="Web Development Project"
            className="w-72 h-60 object-cover rounded-lg mx-auto"
          />
          <h3 className="text-2xl font-semibold text-white mt-4">Movies Website</h3>
          <p className="text-white mt-2">Created a dynamic website with PHP and Bootstrap.</p>
          <div className="mt-4">
            <span className="text-sm font-semibold text-white">Technologies Used:</span>
            <div className="mt-2 flex space-x-4 text-sm text-gray-700">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg font-semibold text-white">HTML</span>
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg font-semibold text-white">Bootstrap</span>
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg font-semibold text-white">CSS</span>
            </div>
          </div>
          <div className="mt-4">
            <a href="https://laasya-09.github.io/Movies/" target="_blank" rel="noopener noreferrer" className=" text-black hover:underline">
            <span className="bg-blue-100 px-2 py-1 rounded-lg font-semibold text-blue-700">View Project</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);


<ContactForm/>

  
  
  const App = () => (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
     <Skills/>
      <Projects />
      <ContactForm/>
      <Footer />
    </div>
  );
  
  export default App;
  




