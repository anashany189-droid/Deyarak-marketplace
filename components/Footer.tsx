
import React from 'react';

const Footer: React.FC = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://deyarak.com';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(currentUrl)}`;

  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
            Deyarak
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Smart construction solutions for the modern Egyptian market. From foundation to finishing, we connect you with the best.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><button className="hover:text-orange-500 transition-colors">Products Marketplace</button></li>
            <li><button className="hover:text-orange-500 transition-colors">Verified Suppliers</button></li>
            <li><button className="hover:text-orange-500 transition-colors">Price Dashboard</button></li>
            <li><button className="hover:text-orange-500 transition-colors">Terms of Service</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">Nasr City, Cairo, Egypt</p>
          <p className="text-sm mb-2">support@deyarak.com</p>
          <p className="text-sm">+20 123 456 7890</p>
        </div>

        {/* Mobile QR */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Get the App</h3>
          <div className="flex flex-col items-start">
             <div className="bg-white p-2 rounded-lg mb-2">
                <img 
                  src={qrCodeUrl} 
                  alt="Scan QR" 
                  className="w-24 h-24"
                />
             </div>
             <p className="text-xs text-slate-500">Scan to browse on mobile</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center text-xs text-slate-600 border-t border-slate-800 pt-6">
        © 2024 Deyarak. All rights reserved. Made with ❤️ in Egypt.
      </div>
    </footer>
  );
};

export default Footer;
