
import React, { useState } from 'react';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import QRGenerator from '@/components/QRGenerator';

const Index = () => {
  const [showGenerator, setShowGenerator] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleGetStarted = () => {
    setShowGenerator(true);
  };

  const handleAuthClick = () => {
    // TODO: Implement Google Auth with Supabase
    // For now, simulate authentication
    if (!isAuthenticated) {
      setIsAuthenticated(true);
      setUserName('John Doe');
      setUserEmail('john@example.com');
    } else {
      setIsAuthenticated(false);
      setUserName('');
      setUserEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <Header 
        onAuthClick={handleAuthClick}
        isAuthenticated={isAuthenticated}
        userName={userName}
      />
      
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
            
            <QRGenerator 
              userName={userName || 'Your Name'}
              userEmail={userEmail}
            />
            
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
