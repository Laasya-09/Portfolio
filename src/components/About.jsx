import { motion } from "framer-motion";
import React from "react";
import Aboutimg from "../assets/Aboutimg.png";
function About() {
  return (
    
    <section  id="about" className="h-screen bg-gradient-to-r from-blue-300 to-indigo-200 px-4 py-2 py-16 flex items-center">
       
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12 gap-8">
      
        <motion.div
        
          className="lg:w-1/2 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Aboutimg}// Replace with your image URL
            alt="About Me"
            style={{ borderRadius: "12px" }}
            className="ml-8 shadow-lg w-3/4 lg:w-3/2 hover:scale-105 transition"
          />
        </motion.div>

        
        <motion.div
          className="text-white text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
            About Me
          </h2>
          <p className="text-lg opacity-80 leading-relaxed text-gray-800">
            I’m <span className="text-blue-600 font-bold">Laasya Vaddepally</span>, I'm currently pursuing my Bachelor of Technology at Sreenidhi Institute of Science and Technology.
        I recently expanded my skills to web development, mastering HTML, CSS, PHP, Bootstrap, and learning the basics of Java.
        I've also worked on various projects to enhance my practical knowledge.
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;