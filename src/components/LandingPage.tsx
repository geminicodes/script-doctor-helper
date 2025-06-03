
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, Download, Link } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-yellow-300">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Main Heading - Neobrutalism style typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="bg-pink-500 text-white px-4 py-2 border-4 border-black inline-block transform -rotate-2 mb-4">
              Turn your LinkedIn
            </span>
            <br />
            <span className="bg-green-400 text-black px-4 py-2 border-4 border-black inline-block transform rotate-1">
              into a scannable sticker
            </span>
          </h1>
          
          {/* Subtext */}
          <div className="bg-white border-4 border-black p-6 max-w-4xl mx-auto transform rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <p className="text-2xl md:text-3xl text-black font-bold leading-relaxed">
              Perfect for events, meetups, and networking. Generate a beautiful QR code card in seconds.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={onGetStarted}
              className="h-20 px-12 text-2xl font-black bg-red-400 hover:bg-red-300 border-4 border-black text-black shadow-[12px_12px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transform hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
            >
              Generate your free QR code now
            </Button>
          </div>
        </div>
        
        {/* Feature Cards - Neobrutalism style */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-blue-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="w-20 h-20 bg-yellow-300 border-4 border-black flex items-center justify-center mb-6 transform rotate-12">
              <QrCode className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-3xl font-black text-black mb-4">Instant QR Codes</h3>
            <p className="text-black text-lg font-bold leading-relaxed">
              Enter any URL and get a high-quality QR code instantly. Perfect for LinkedIn profiles, portfolios, and websites.
            </p>
          </div>
          
          <div className="bg-green-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000] transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="w-20 h-20 bg-pink-500 border-4 border-black flex items-center justify-center mb-6 transform -rotate-12">
              <Download className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-black text-black mb-4">Print-Ready Cards</h3>
            <p className="text-black text-lg font-bold leading-relaxed">
              Download professional business card layouts sized perfectly for printing at 3.5x2 inches.
            </p>
          </div>
          
          <div className="bg-pink-500 border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000] transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="w-20 h-20 bg-red-400 border-4 border-black flex items-center justify-center mb-6 transform rotate-6">
              <Link className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4">Easy Sharing</h3>
            <p className="text-white text-lg font-bold leading-relaxed">
              Share your QR codes digitally or print them as stickers. Perfect for networking events and conferences.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center sm:text-left px-4 sm:pr-8 sm:pl-4 pb-4">
        <p className="text-black text-sm sm:text-base md:text-lg font-bold">
          Made in Madrid with love ❤️ by <a href="https://es.linkedin.com/in/valentin-mekhonoshina-073b02127" className="underline hover:no-underline">Valentin Mekhonoshina</a>
        </p>
      </div>

      

      
        
    </div>
  );
};

export default LandingPage;
