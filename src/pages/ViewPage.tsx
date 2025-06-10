
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share } from 'lucide-react';
import Header from '@/components/Header';

const ViewPage = () => {
  const handleShare = () => {
    console.log('Share clicked');
    // TODO: Implement share logic
  };

  return (
    <div className="min-h-screen bg-green-400 dark:bg-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-4 transform -rotate-1">
              View QR Code
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black dark:text-gray-900 font-bold bg-yellow-400 dark:bg-yellow-500 inline-block px-4 py-2 transform rotate-1 rounded-lg">
              Share your QR code with others
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg space-y-6">
            {/* Photo Section */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                <div className="text-gray-400 dark:text-gray-500 text-2xl">
                  👤
                </div>
              </div>
            </div>

            {/* Text Lines */}
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white">
                Sample Name/Title
              </h2>
              
              <h3 className="text-base sm:text-lg font-bold text-gray-600 dark:text-gray-300">
                Sample Info Text
              </h3>
            </div>

            {/* QR Code Space - 25% larger */}
            <div className="flex justify-center">
              <div className="w-60 h-60 sm:w-70 sm:h-70 bg-white dark:bg-gray-100 border-4 border-black dark:border-gray-600 rounded-lg flex items-center justify-center">
                <div className="text-gray-400 dark:text-gray-500 text-center">
                  <div className="text-4xl mb-2">⬜</div>
                  <p className="text-sm font-bold">QR Code</p>
                </div>
              </div>
            </div>

            {/* Share Button */}
            <div className="pt-4">
              <Button
                onClick={handleShare}
                className="w-full bg-blue-400 hover:bg-blue-300 dark:bg-blue-500 dark:hover:bg-blue-400 text-black dark:text-white font-black text-base sm:text-lg"
              >
                <Share className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
