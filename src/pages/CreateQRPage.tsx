
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Trash2 } from 'lucide-react';
import Header from '@/components/Header';

const CreateQRPage = () => {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [link, setLink] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setName('');
    setInfo('');
    setLink('');
    setUploadedImage(null);
  };

  const handleGenerateQR = () => {
    console.log('Generating QR with:', { name, info, link, uploadedImage });
    // TODO: Implement QR generation logic
  };

  return (
    <div className="min-h-screen bg-green-400 dark:bg-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-4 transform -rotate-1">
              Create Your QR
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black dark:text-gray-900 font-bold bg-yellow-400 dark:bg-yellow-500 inline-block px-4 py-2 transform rotate-1 rounded-lg">
              Fill in the details to generate your custom QR code
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg space-y-6">
            {/* Photo Upload Section */}
            <div className="text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                {uploadedImage ? (
                  <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-gray-400 dark:text-gray-500">
                    <Upload size={32} />
                  </div>
                )}
              </div>
              
              <div className="relative inline-block">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Button className="bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black dark:text-gray-900 font-black text-sm sm:text-base">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload photo
                </Button>
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name/Title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-lg sm:text-xl font-bold"
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  className="text-base sm:text-lg font-bold"
                />
              </div>

              <div>
                <Input
                  type="url"
                  placeholder="That awesome link, please"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="text-base sm:text-lg font-bold"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 sm:gap-4 pt-4">
              <Button
                onClick={handleDelete}
                variant="destructive"
                className="flex-1 max-w-[33%] bg-red-400 hover:bg-red-300 dark:bg-red-500 dark:hover:bg-red-400 text-black dark:text-white font-black text-sm sm:text-base"
              >
                <Trash2 className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Delete</span>
              </Button>
              
              <Button
                onClick={handleGenerateQR}
                className="flex-1 bg-green-400 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400 text-black dark:text-white font-black text-sm sm:text-base"
              >
                <span className="sm:hidden">Generate QR!</span>
                <span className="hidden sm:inline">Generate QR!</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQRPage;
