// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationCards from './components/DestinationCards';
import DestinationModal from './components/DestinationModal';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import FooterPolicyModal from './components/FooterPolicyModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [policyModal, setPolicyModal] = useState({ isOpen: false, type: null });

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const handlePolicyClick = (policyType) => {
    setPolicyModal({
      isOpen: true,
      type: policyType
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setIsLoginOpen={setIsLoginOpen} />
      <Hero />
      <DestinationCards onDestinationClick={handleDestinationClick} />
      <Footer onPolicyClick={handlePolicyClick} />
      
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      {selectedDestination && (
        <DestinationModal 
          destination={selectedDestination} 
          onClose={() => setSelectedDestination(null)} 
        />
      )}
      {policyModal.isOpen && (
        <FooterPolicyModal 
          type={policyModal.type} 
          onClose={() => setPolicyModal({ isOpen: false, type: null })} 
        />
      )}
    </div>
  );
}

export default App;