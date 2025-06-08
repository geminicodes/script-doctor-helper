
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const { user, signInWithGoogle, signOut, loading } = useAuth();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg sm:text-xl md:text-2xl font-black text-black dark:text-white transform -rotate-1">
            <span className="hidden sm:inline">snap👋qr</span>
            <span className="sm:hidden">👋</span>
          </h1>
          
          {loading ? (
            <div className="w-8 h-8 animate-spin rounded-full border-4 border-black dark:border-white border-t-yellow-400" />
          ) : user ? (
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-yellow-400 dark:bg-yellow-500 px-2 sm:px-4 py-1 sm:py-2 flex items-center gap-2 sm:gap-3 rounded-lg">
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg">
                  <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name} />
                  <AvatarFallback className="bg-white dark:bg-gray-800 text-black dark:text-white font-bold text-xs sm:text-sm rounded-lg">
                    {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:block text-sm sm:text-lg font-bold text-black dark:text-gray-900">
                  {user.user_metadata?.full_name || user.email}
                </span>
              </div>
              
              <Button 
                onClick={signOut}
                className="bg-red-400 hover:bg-red-300 dark:bg-red-500 dark:hover:bg-red-400 text-black dark:text-white font-black px-3 sm:px-6 py-2 sm:py-3 rounded-lg"
              >
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                <span className="hidden sm:block">Sign Out</span>
              </Button>
              
              <div className="bg-yellow-400 dark:bg-yellow-500 px-3 sm:px-4 py-2 sm:py-3 rounded-lg h-12 flex items-center">
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                  className="data-[state=checked]:bg-black data-[state=unchecked]:bg-white"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-4">
              <Button 
                onClick={signInWithGoogle}
                className="bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-black dark:text-gray-900 font-black text-sm sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg"
              >
                <span className="hidden sm:inline">Login with Google</span>
                <span className="sm:hidden">Login</span>
              </Button>
              
              <div className="bg-yellow-400 dark:bg-yellow-500 px-3 sm:px-4 py-2 sm:py-3 rounded-lg h-12 flex items-center">
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                  className="data-[state=checked]:bg-black data-[state=unchecked]:bg-white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
