
import React, { useState } from 'react';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import QRGenerator from '@/components/QRGenerator';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const [showGenerator, setShowGenerator] = useState(false);
  const { user, loading } = useAuth();

  const handleGetStarted = () => {
    setShowGenerator(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-yellow-300 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 animate-spin rounded-full border-4 border-black border-t-pink-500 mx-auto mb-4"></div>
          <p className="text-black font-bold text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-300">
      <Header />
      
      {!showGenerator ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-6xl font-black text-black mb-4 transform -rotate-1">
                Create Your QR Code
              </h2>
              <p className="text-2xl text-black font-bold bg-pink-400 inline-block px-6 py-2 border-4 border-black transform rotate-1">
                Enter your URL below and generate a professional QR code card
              </p>
            </div>
            
            <QRGenerator />
            
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowGenerator(false)}
                className="bg-green-400 border-4 border-black px-8 py-4 font-black text-black text-xl hover:bg-green-300 transform hover:scale-105 transition-all duration-200 shadow-[8px_8px_0px_0px_#000000]"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
