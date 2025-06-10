
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trash2, RotateCcw, Edit, Save } from 'lucide-react';
import Header from '@/components/Header';

const MyQRPage = () => {
  const handleDelete = () => {
    console.log('Delete clicked');
    // TODO: Implement delete logic
  };

  const handleRefreshQR = () => {
    console.log('Refresh QR clicked');
    // TODO: Implement refresh QR logic
  };

  const handleEdit = () => {
    console.log('Edit clicked');
    // TODO: Implement edit logic
  };

  const handleSave = () => {
    console.log('Save clicked');
    // TODO: Implement save logic
  };

  return (
    <div className="min-h-screen bg-green-400 dark:bg-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-4 transform -rotate-1">
              My QR Code
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black dark:text-gray-900 font-bold bg-yellow-400 dark:bg-yellow-500 inline-block px-4 py-2 transform rotate-1 rounded-lg">
              Your generated QR code is ready
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg space-y-6">
            {/* Photo Section */}
            <div className="text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                <div className="text-gray-400 dark:text-gray-500 text-4xl">
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

            {/* QR Code Space */}
            <div className="flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white dark:bg-gray-100 border-4 border-black dark:border-gray-600 rounded-lg flex items-center justify-center">
                <div className="text-gray-400 dark:text-gray-500 text-center">
                  <div className="text-4xl mb-2">⬜</div>
                  <p className="text-sm font-bold">QR Code</p>
                </div>
              </div>
            </div>

            {/* Action Buttons - Top Row */}
            <div className="flex gap-2 sm:gap-3 pt-4">
              <Button
                onClick={handleDelete}
                variant="destructive"
                className="flex-1 bg-red-400 hover:bg-red-300 dark:bg-red-500 dark:hover:bg-red-400 text-black dark:text-white font-black text-xs sm:text-sm"
              >
                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Delete</span>
                <span className="sm:hidden">Del</span>
              </Button>
              
              <Button
                onClick={handleRefreshQR}
                className="flex-1 bg-blue-400 hover:bg-blue-300 dark:bg-blue-500 dark:hover:bg-blue-400 text-black dark:text-white font-black text-xs sm:text-sm"
              >
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Refresh</span>
                <span className="sm:hidden">Ref</span>
              </Button>
              
              <Button
                onClick={handleEdit}
                className="flex-1 bg-purple-400 hover:bg-purple-300 dark:bg-purple-500 dark:hover:bg-purple-400 text-black dark:text-white font-black text-xs sm:text-sm"
              >
                <Edit className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Edit</span>
                <span className="sm:hidden">Ed</span>
              </Button>
            </div>

            {/* Save Button - Bottom Row */}
            <div className="pt-2">
              <Button
                onClick={handleSave}
                className="w-full bg-green-400 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 text-black dark:text-white font-black text-sm sm:text-base"
              >
                <Save className="w-4 h-4 mr-2" />
                Save QR Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQRPage;
