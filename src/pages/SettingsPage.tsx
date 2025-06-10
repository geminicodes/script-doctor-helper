
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import Header from '@/components/Header';

const SettingsPage = () => {
  const handleDeleteAccount = () => {
    console.log('Delete Account clicked');
    // TODO: Implement delete account logic
  };

  return (
    <div className="min-h-screen bg-green-400 dark:bg-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-4 transform -rotate-1">
              Settings
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black dark:text-gray-900 font-bold bg-yellow-400 dark:bg-yellow-500 inline-block px-4 py-2 transform rotate-1 rounded-lg">
              Manage your account settings
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg">
            <div className="text-center">
              <Button
                onClick={handleDeleteAccount}
                variant="destructive"
                className="bg-red-400 hover:bg-red-300 dark:bg-red-500 dark:hover:bg-red-400 text-black dark:text-white font-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
