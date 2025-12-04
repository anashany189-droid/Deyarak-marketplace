import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Deyarak</h3>
          <p className="text-sm">
            Smart construction solutions for the modern Egyptian market. From foundation to finishing.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Products</a></li>
            <li><a href="#" className="hover:text-orange-500">Suppliers</a></li>
            <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
          <p className="text-sm">Cairo, Egypt</p>
          <p className="text-sm">support@deyarak.com</p>
          <p className="text-sm">+20 123 456 7890</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-600 border-t border-slate-800 pt-4">
        © 2024 Deyarak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;