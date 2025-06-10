
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, RotateCcw, Save, Edit } from 'lucide-react';
import Header from '@/components/Header';

const MyQRPage = () => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [title, setTitle] = useState('Sample Name/Title');
  const [info, setInfo] = useState('Sample Info Text');

  const handleDelete = () => {
    console.log('Delete clicked');
    // TODO: Implement delete logic
  };

  const handleRefreshQR = () => {
    console.log('Refresh QR clicked');
    // TODO: Implement refresh QR logic
  };

  const handleSave = () => {
    console.log('Save clicked');
    // TODO: Implement save logic
  };

  const handlePhotoEdit = () => {
    console.log('Photo edit clicked');
    // TODO: Implement photo upload logic
  };

  const handleTitleEdit = () => {
    setIsEditingTitle(!isEditingTitle);
  };

  const handleInfoEdit = () => {
    setIsEditingInfo(!isEditingInfo);
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
              <div className="relative inline-block">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="text-gray-400 dark:text-gray-500 text-2xl">
                    👤
                  </div>
                </div>
                <Button
                  onClick={handlePhotoEdit}
                  className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 p-0 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full shadow-none hover:shadow-none transform-none hover:transform-none"
                >
                  <Edit className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white" />
                </Button>
              </div>
            </div>

            {/* Text Lines */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                {isEditingTitle ? (
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={() => setIsEditingTitle(false)}
                    onKeyDown={(e) => e.key === 'Enter' && setIsEditingTitle(false)}
                    className="text-center text-xl sm:text-2xl font-black max-w-xs"
                    autoFocus
                  />
                ) : (
                  <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white">
                    {title}
                  </h2>
                )}
                <Button
                  onClick={handleTitleEdit}
                  className="w-6 h-6 p-0 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded shadow-none hover:shadow-none transform-none hover:transform-none"
                >
                  <Edit className="w-3 h-3 text-black dark:text-white" />
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                {isEditingInfo ? (
                  <Input
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                    onBlur={() => setIsEditingInfo(false)}
                    onKeyDown={(e) => e.key === 'Enter' && setIsEditingInfo(false)}
                    className="text-center text-base sm:text-lg font-bold max-w-xs"
                    autoFocus
                  />
                ) : (
                  <h3 className="text-base sm:text-lg font-bold text-gray-600 dark:text-gray-300">
                    {info}
                  </h3>
                )}
                <Button
                  onClick={handleInfoEdit}
                  className="w-6 h-6 p-0 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded shadow-none hover:shadow-none transform-none hover:transform-none"
                >
                  <Edit className="w-3 h-3 text-black dark:text-white" />
                </Button>
              </div>
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
                <span className="hidden sm:inline">Refresh QR</span>
                <span className="sm:hidden">Ref QR</span>
              </Button>
              
              <Button
                onClick={handleSave}
                className="flex-1 bg-green-400 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 text-black dark:text-white font-black text-xs sm:text-sm"
              >
                <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Save</span>
                <span className="sm:hidden">Sav</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQRPage;
