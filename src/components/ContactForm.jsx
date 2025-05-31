import React, { useState } from 'react';

const ContactForm = () => {
  // State for form fields and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null }
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({
      ...prevStatus,
      submitting: true
    }));

    const form = e.target;
    const formDataToSubmit = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgveqoer", {
        method: 'POST',
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        setStatus({
          submitting: false,
          info: { error: false, msg: 'Thanks for your submission!' }
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        // Error
        const errorData = await response.json();
        setStatus({
          submitting: false,
          info: { error: true, msg: errorData.error || 'Submission failed' }
        });
      }
    } catch (error) {
      // Network or unexpected error
      setStatus({
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again.' }
      });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-300 to-indigo-200 px-4 py-2 py-16">

    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-gradient-to-br from-indigo-900 to-blue-700 text-white">

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="name"
            className="block text-sm font-medium text-white mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-white mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-white mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        {status.info.msg && (
          <div 
            className={`p-3 rounded-md ${
              status.info.error 
                ? 'bg-red-100 text-red-700' 
                : 'bg-green-100 text-green-700'
            }`}
          >
            {status.info.msg}
          </div>
        )}

        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full py-3 rounded-md text-white font-semibold transition-colors ${
            status.submitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }`}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
    </section>
  );
};

export default ContactForm;