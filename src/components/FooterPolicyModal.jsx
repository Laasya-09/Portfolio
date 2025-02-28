import React from 'react';

const policies = {
  about: {
    title: 'About Wanderlust',
    content: `
      <h3 class="text-lg font-medium mb-4">Our Story</h3>
      <p class="mb-4">Wanderlust Travel Tours was founded in 2010 by a group of passionate travelers who wanted to share their love of exploration with the world. What began as a small operation offering specialized tours to just a few destinations has grown into a global travel company with tours spanning six continents.</p>
      
      <h3 class="text-lg font-medium mb-4">Our Mission</h3>
      <p class="mb-4">At Wanderlust, our mission is to create transformative travel experiences that inspire, educate, and connect people from around the world. We believe travel has the power to broaden perspectives, foster cultural understanding, and create lasting memories.</p>
      
      <h3 class="text-lg font-medium mb-4">Our Approach</h3>
      <p class="mb-4">We carefully craft each tour to provide an authentic, immersive experience. Our expert guides are locals or long-term residents who offer unique insights into each destination. We prioritize responsible travel practices that respect local communities and environments.</p>
      
      <h3 class="text-lg font-medium mb-4">Our Team</h3>
      <p>Our diverse team of travel specialists, local guides, and customer service professionals work together to ensure every Wanderlust tour exceeds expectations. With backgrounds spanning hospitality, cultural studies, environmental conservation, and more, our team brings rich, multifaceted perspectives to the travel experiences we create.</p>
    `
  },
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p class="mb-4">Last Updated: February 27, 2025</p>
      
      <h3 class="text-lg font-medium mb-4">Information We Collect</h3>
      <p class="mb-4">We collect personal information that you provide directly to us, such as your name, email address, phone number, passport details, travel preferences, and payment information when you book a tour, create an account, sign up for our newsletter, or contact customer service.</p>
      
      <h3 class="text-lg font-medium mb-4">How We Use Your Information</h3>
      <p class="mb-4">We use your information to process bookings, personalize your experience, communicate with you about tours and promotions, improve our services, and ensure the safety and security of our travelers.</p>
      
      <h3 class="text-lg font-medium mb-4">Information Sharing</h3>
      <p class="mb-4">We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service. We may also share information with travel partners, such as hotels, local tour operators, and transportation providers, as necessary to complete your booking.</p>
      
      <h3 class="text-lg font-medium mb-4">Your Rights</h3>
      <p>You have the right to access, correct, or delete your personal information. You may also object to certain processing of your information or request that we restrict processing. To exercise these rights, please contact us at privacy@wanderlust-tours.com.</p>
    `
  },
  terms: {
    title: 'Terms and Conditions',
    content: `
      <p class="mb-4">Last Updated: February 27, 2025</p>
      
      <h3 class="text-lg font-medium mb-4">Booking and Payment</h3>
      <p class="mb-4">A non-refundable deposit of 20% is required to secure your booking. Full payment is due 60 days before the tour start date. For bookings made within 60 days of departure, full payment is required at the time of booking.</p>
      
      <h3 class="text-lg font-medium mb-4">Tour Changes</h3>
      <p class="mb-4">Wanderlust reserves the right to make changes to any tour if necessary. We will notify you of significant changes before departure. If a major change is made (such as a change of destination or a departure date change of more than 24 hours), you may choose between accepting the change, taking an alternative tour, or receiving a full refund.</p>
      
      <h3 class="text-lg font-medium mb-4">Traveler Responsibilities</h3>
      <p class="mb-4">Travelers are responsible for obtaining all necessary travel documents, including valid passports, visas, and travel insurance. Travelers must also adhere to the physical requirements specified for each tour and follow all local laws and customs.</p>
      
      <h3 class="text-lg font-medium mb-4">Limitation of Liability</h3>
      <p>Wanderlust acts only as an intermediary for the various independent suppliers that provide accommodations, transportation, activities, and other services related to your tour. We are not liable for any injury, damage, loss, accident, delay, or irregularity arising from these services.</p>
    `
  },
  cancellation: {
    title: 'Cancellation Policy',
    content: `
      <p class="mb-4">Last Updated: February 27, 2025</p>
      
      <h3 class="text-lg font-medium mb-4">Cancellation by Traveler</h3>
      <p class="mb-4">
        Cancellation fees are as follows:
        <ul class="list-disc pl-5 my-2">
          <li>More than 60 days before departure: Loss of deposit</li>
          <li>59-30 days before departure: 50% of total tour cost</li>
          <li>29-15 days before departure: 75% of total tour cost</li>
          <li>14 days or less before departure: 100% of total tour cost</li>
        </ul>
        All cancellations must be received in writing.
      </p>
      
      <h3 class="text-lg font-medium mb-4">Travel Insurance</h3>
      <p class="mb-4">We strongly recommend purchasing comprehensive travel insurance that includes coverage for trip cancellation, interruption, medical expenses, emergency evacuation, and lost baggage. The right insurance policy can help protect your investment.</p>
      
      <h3 class="text-lg font-medium mb-4">Trip Transfers</h3>
      <p class="mb-4">If you are unable to travel on your scheduled trip, you may transfer your booking to another person who satisfies all the conditions for the tour, provided we are notified no less than 30 days before departure. Both the original traveler and the substitute are jointly responsible for paying any outstanding balance and an additional transfer fee of $150.</p>
      
      <h3 class="text-lg font-medium mb-4">Cancellation by Wanderlust</h3>
      <p>Wanderlust reserves the right to cancel any tour due to insufficient participation or force majeure events (such as natural disasters, political instability, or epidemics). In such cases, you will receive a full refund of all monies paid to Wanderlust for the trip, or a credit toward a future trip. Wanderlust is not responsible for additional expenses incurred by travelers in preparing for the tour (such as non-refundable flights, visa fees, etc.).</p>
    `
  }
};

const FooterPolicyModal = ({ type, onClose }) => {
  if (!type || !policies[type]) return null;

  const policy = policies[type];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4" id="modal-title">
                {policy.title}
              </h3>
              <div className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: policy.content }} />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPolicyModal;