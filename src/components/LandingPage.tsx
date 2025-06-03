
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, Download, Link } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Main Heading - Webflow style typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Turn your LinkedIn
            </span>
            <br />
            <span className="text-gray-900">
              into a scannable sticker
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perfect for events, meetups, and networking. Generate a beautiful QR code card in seconds.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={onGetStarted}
              size="lg"
              className="h-16 px-12 text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Generate your free QR code now
            </Button>
          </div>
        </div>
        
        {/* Feature Cards - Glitch.com style */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <QrCode className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant QR Codes</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Enter any URL and get a high-quality QR code instantly. Perfect for LinkedIn profiles, portfolios, and websites.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Download className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Print-Ready Cards</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Download professional business card layouts sized perfectly for printing at 3.5x2 inches.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Link className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Sharing</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Share your QR codes digitally or print them as stickers. Perfect for networking events and conferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
