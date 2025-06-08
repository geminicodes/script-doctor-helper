
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, Download, Link } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-green-400 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Main Heading - Neobrutalism style typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black tracking-tight">
            <span className="bg-pink-500 dark:bg-pink-600 text-white dark:text-gray-100 px-2 sm:px-4 py-1 sm:py-2 inline-block transform -rotate-2 mb-4 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Turn your LinkedIn
            </span>
            <br />
            <span className="bg-yellow-400 dark:bg-yellow-500 text-black dark:text-gray-900 px-2 sm:px-4 py-1 sm:py-2 inline-block transform rotate-1 rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              into a scannable sticker
            </span>
          </h1>
          
          {/* Subtext */}
          <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 max-w-4xl mx-auto transform rotate-1 rounded-lg">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black dark:text-white font-bold leading-relaxed">
              Perfect for events, meetups, and networking. Generate a beautiful QR code card in seconds.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={onGetStarted}
              className="h-16 sm:h-20 px-6 sm:px-8 md:px-12 text-lg sm:text-xl md:text-2xl font-black bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black dark:text-gray-900 rounded-lg"
            >
              <span className="hidden md:inline">Generate your free QR code now!</span>
              <span className="md:hidden">Generate QR!</span>
            </Button>
          </div>
        </div>
        
        {/* Feature Cards - Neobrutalism style */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-blue-400 dark:bg-blue-600 p-6 sm:p-8 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center mb-6 transform rotate-12 rounded-lg">
              <QrCode className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-gray-900" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-4">Instant QR Codes</h3>
            <p className="text-black dark:text-gray-100 text-base sm:text-lg font-bold leading-relaxed">
              Enter any URL and get a high-quality QR code instantly. Perfect for LinkedIn profiles, portfolios, and websites.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-500 dark:bg-pink-600 flex items-center justify-center mb-6 transform -rotate-12 rounded-lg">
              <Download className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-4">Print-Ready Cards</h3>
            <p className="text-black dark:text-gray-200 text-base sm:text-lg font-bold leading-relaxed">
              Download professional business card layouts sized perfectly for printing at 3.5x2 inches.
            </p>
          </div>
          
          <div className="bg-pink-500 dark:bg-pink-600 p-6 sm:p-8 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center mb-6 transform rotate-6 rounded-lg">
              <Link className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-gray-900" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-4">Easy Sharing</h3>
            <p className="text-black dark:text-gray-100 text-base sm:text-lg font-bold leading-relaxed">
              Share your QR codes digitally or print them as stickers. Perfect for networking events and conferences.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center sm:text-left px-4 sm:pr-8 sm:pl-4 pb-4">
        <p className="text-black dark:text-gray-200 text-sm sm:text-base md:text-lg font-bold">
          Made in Madrid with love ❤️ by <a href="https://es.linkedin.com/in/valentin-mekhonoshina-073b02127" className="underline hover:no-underline">Valentin Mekhonoshina</a>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
