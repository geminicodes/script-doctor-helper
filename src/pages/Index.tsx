
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import QRGenerator from '@/components/QRGenerator';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showGenerator, setShowGenerator] = useState(false);
  const { user, loading } = useAuth();

  const handleGetStarted = () => {
    setShowGenerator(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-green-400 dark:bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 animate-spin rounded-full border-4 border-black dark:border-white border-t-yellow-400 mx-auto mb-4"></div>
          <p className="text-black dark:text-white font-bold text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-400 dark:bg-gray-800">
      <Header />
      
      {!showGenerator ? (
        <>
          <LandingPage onGetStarted={handleGetStarted} />
          <div className="text-center pb-8">
            <Link to="/create">
              <Button className="bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black dark:text-gray-900 font-black text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg">
                Create Custom QR
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black dark:text-white mb-4 transform -rotate-1">
                Create Your QR Code
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-black dark:text-gray-900 font-bold bg-yellow-400 dark:bg-yellow-500 inline-block px-4 sm:px-6 py-2 transform rotate-1 rounded-lg">
                Enter your URL below and generate a professional QR code card
              </p>
            </div>
            
            <QRGenerator />
            
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowGenerator(false)}
                className="bg-yellow-400 dark:bg-yellow-500 px-6 sm:px-8 py-3 sm:py-4 font-black text-black dark:text-gray-900 text-lg sm:text-xl hover:bg-yellow-300 dark:hover:bg-yellow-400 transform hover:scale-105 transition-all duration-200 rounded-lg"
              >
                ← Back Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
