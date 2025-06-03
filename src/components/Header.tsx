
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header: React.FC = () => {
  const { user, signInWithGoogle, signOut, loading } = useAuth();

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
          
          {loading ? (
            <div className="w-8 h-8 animate-spin rounded-full border-2 border-gray-300 border-t-purple-600" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name} />
                <AvatarFallback>
                  {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-sm text-gray-700">
                {user.user_metadata?.full_name || user.email}
              </span>
              <Button 
                onClick={signOut}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:block">Sign Out</span>
              </Button>
            </div>
          ) : (
            <Button 
              onClick={signInWithGoogle}
              className="font-semibold"
            >
              Sign in with Google
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
