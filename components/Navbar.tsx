import React, { useState } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Dashboard', id: 'dashboard' },
    { name: 'Products', id: 'products' },
    { name: 'Suppliers', id: 'suppliers' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <Hammer className="h-8 w-8 text-orange-500 mr-2" />
            <span className="font-bold text-2xl tracking-tight">Deyarak</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  currentPage === item.id ? 'text-orange-500 font-bold' : 'text-gray-300 hover:text-white'
                } transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('login')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  currentPage === item.id ? 'bg-slate-900 text-white' : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                } block w-full text-left px-3 py-4 rounded-md text-base font-medium border-b border-slate-700 last:border-0`}
              >
                {item.name}
              </button>
            ))}
            <button 
               onClick={() => handleNavClick('login')}
               className="w-full text-left px-3 py-4 text-orange-400 font-bold hover:bg-slate-700 rounded-md"
            >
              Login / Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;