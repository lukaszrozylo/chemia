import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, User, LogOut, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isLoggedIn, currentUser, logout } = useAuth();

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">ChemiaOnline</span>
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
                Strona główna
              </Link>
              <Link to="/courses" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
                Kursy
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
                O nas
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                <Link to="/my-courses" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-1" />
                  Moje kursy
                </Link>
                <div className="px-3 py-2 rounded-md text-sm font-medium">
                  <User className="h-5 w-5 inline mr-1" />
                  {currentUser?.name}
                </div>
                <button 
                  onClick={logout}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Wyloguj
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
                  Logowanie
                </Link>
                <Link to="/register" className="ml-2 px-3 py-2 bg-white text-indigo-700 rounded-md text-sm font-medium hover:bg-gray-100">
                  Rejestracja
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;