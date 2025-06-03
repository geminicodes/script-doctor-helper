
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode } from 'lucide-react';

interface HeaderProps {
  onAuthClick: () => void;
  isAuthenticated: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick, isAuthenticated, userName }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">QR Connect</h1>
          </div>
          
          <Button 
            onClick={onAuthClick}
            variant={isAuthenticated ? "outline" : "default"}
            className="font-semibold"
          >
            {isAuthenticated ? `Hello, ${userName}` : 'Sign in with Google'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
