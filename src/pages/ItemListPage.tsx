
import React from 'react';
import { Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const ItemListPage = () => {
  const items = [
    { id: 1, title: 'My Personal Website' },
    { id: 2, title: 'Instagram Profile' },
    { id: 3, title: 'LinkedIn Portfolio' },
    { id: 4, title: 'GitHub Repository' },
    { id: 5, title: 'YouTube Channel' }
  ];

  const handleEditItem = (id: number) => {
    console.log('Edit item clicked:', id);
    // TODO: Implement edit item logic
  };

  return (
    <div className="min-h-screen bg-green-400 dark:bg-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-4 transform -rotate-1">
              Item List
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black dark:text-gray-900 font-bold bg-yellow-400 dark:bg-yellow-500 inline-block px-4 py-2 transform rotate-1 rounded-lg">
              Manage your QR code items
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div 
                key={item.id}
                className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg border-4 border-black dark:border-gray-600 shadow-[4px_4px_0px_0px_#000000] dark:shadow-[4px_4px_0px_0px_#374151]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-black text-black dark:text-white">
                    {item.title}
                  </h3>
                  <Button
                    onClick={() => handleEditItem(item.id)}
                    className="w-8 h-8 sm:w-10 sm:h-10 p-0 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded shadow-none hover:shadow-none transform-none hover:transform-none"
                  >
                    <Edit className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListPage;
