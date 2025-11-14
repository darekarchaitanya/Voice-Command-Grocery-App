'use client';

import { ShoppingCart, Mic, LogOut, User } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-500 via-orange-400 to-red-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Mic className="w-6 h-6 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold">VoiceGrocery</h1>
        </div>
        <div className="flex items-center gap-4">
          {user && (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 px-3 py-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">{user.name || user.mobileNumber}</span>
              </button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm text-gray-700 font-semibold">{user.name || 'User'}</p>
                    <p className="text-xs text-gray-500">+91 {user.mobileNumber}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center gap-2 text-sm font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-red-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
