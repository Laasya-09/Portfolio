// import Gana from "./assets/gana.jpg";
import Profile2 from "../assets/profile2.jpg";

import { motion } from "framer-motion";
import React from "react";

function Hero() {
  return (
    <section id="home" className="h-screen bg-gradient-to-r from-blue-300 to-indigo-200 px-4 py-2 py-16 flex items-center"  >
     
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12 gap-8">
        
        <motion.div
          className="text-gray-700 text-center lg:text-left lg:w-1/2 ml-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
               <h1 className="text-4xl font-bold text-gray-700">Hi, I'm <span className="text-blue-600">Laasya Vaddepally</span></h1>
               <p className="text-lg text-gray-700 mt-4">Web Developer | Tech Enthusiast | Student at Sreenidhi Institute of Science and Technology</p>
      <h2 className="text-3xl mt-8 mb-5 text-gray-800">Technologies I Work With:</h2>

      <ul>
        <li><strong>Front-end:</strong> HTML, CSS, JavaScript, React</li>
        <li><strong>Back-end:</strong>  PHP</li>
        <li><strong>Version Control:</strong> Git, GitHub</li>
      </ul>
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition"
          >
            Let's Connect
          </a>
        </motion.div>

        
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end mr-8 "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
            <img
  src={Profile2}
  alt="Laasya Vaddepally"
  style={{ borderRadius: "12px" }}
  className="shadow-lg w-3/4 hover:scale-105 transition"
/>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

