
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header: React.FC = () => {
  const { user, signInWithGoogle, signOut, loading } = useAuth();

  return (
    <header className="bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center transform rotate-3">
              <img src="/icon.png" className="w-full h-full object-contain" />
              <QrCode className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black transform -rotate-1">snapqr</h1>
          </div>
          
          {loading ? (
            <div className="w-8 h-8 animate-spin rounded-full border-4 border-black border-t-pink-500" />
          ) : user ? (
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-yellow-300 border-2 sm:border-4 border-black px-2 sm:px-4 py-1 sm:py-2 flex items-center gap-2 sm:gap-3 shadow-[2px_2px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000]">
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black">
                  <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name} />
                  <AvatarFallback className="bg-green-400 text-black font-bold text-xs sm:text-sm">
                    {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:block text-sm sm:text-lg font-bold text-black">
                  {user.user_metadata?.full_name || user.email}
                </span>
              </div>
              <Button 
                onClick={signOut}
                className="bg-red-400 hover:bg-red-300 border-2 sm:border-4 border-black text-black font-black px-3 sm:px-6 py-2 sm:py-3 shadow-[2px_2px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] sm:hover:shadow-[2px_2px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
              >
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                <span className="hidden sm:block">Sign Out</span>
              </Button>
            </div>
          ) : (
            <Button 
              onClick={signInWithGoogle}
              className="bg-blue-400 hover:bg-blue-300 border-2 sm:border-4 border-black text-black font-black text-sm sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[6px_6px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] sm:hover:shadow-[3px_3px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              <span className="hidden sm:inline">Sign in with Google</span>
              <span className="sm:hidden">Sign in</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
