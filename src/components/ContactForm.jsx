import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-300 to-indigo-200 px-4 py-2 py-16">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Contact Me</h2>
        <form 
          method="POST" 
          action="https://formspree.io/f/mgveqoer" 
          className="mt-8 mb-8 bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-black mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-black mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-100 text-blue py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
