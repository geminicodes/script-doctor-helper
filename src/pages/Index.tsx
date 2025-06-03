
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 animate-spin rounded-full border-4 border-gray-300 border-t-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <Header />
      
      {!showGenerator ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Create Your QR Code
              </h2>
              <p className="text-xl text-gray-600">
                Enter your URL below and generate a professional QR code card
              </p>
            </div>
            
            <QRGenerator />
            
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowGenerator(false)}
                className="text-purple-600 hover:text-purple-800 font-semibold"
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
