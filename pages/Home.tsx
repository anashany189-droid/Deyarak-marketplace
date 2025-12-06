
import React from 'react';
import { ArrowRight, Activity, Truck, Calculator, Clock, Layers, ShieldCheck, Smartphone, BarChart3, QrCode } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-600" />,
      title: "Real-Time Price Comparison",
      description: "Compare material prices from multiple suppliers in seconds. No need to visit 10 different stores."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Save Time & Effort",
      description: "Find everything you need in 3 seconds instead of wasting days searching the market."
    },
    {
      icon: <Calculator className="h-6 w-6 text-purple-600" />,
      title: "Smart AI Estimation",
      description: "Ask our AI: 'How much cement for a 100m² apartment?' and get instant quantity calculations."
    },
    {
      icon: <Layers className="h-6 w-6 text-green-600" />,
      title: "Unified Platform",
      description: "One-stop-shop for everything: Cement, Steel, Ceramics, Paints, Plumbing, and Electrical."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-red-600" />,
      title: "Mobile-First Experience",
      description: "A seamless experience whether you are on your phone at the site or on a laptop at the office."
    },
    {
      icon: <Truck className="h-6 w-6 text-indigo-600" />,
      title: "Live Order Tracking",
      description: "Track your order steps: Processing → Aggregation Point → Out for Delivery."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-teal-600" />,
      title: "Verified Suppliers",
      description: "We partner only with trusted distributors to ensure quality, accurate prices, and official warranties."
    }
  ];

  // Get current URL for QR code, fallback to a generic one if window is undefined
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://deyarak.com';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 opacity-50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Build Smarter in <span className="text-orange-500">Egypt</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0">
              The smart digital platform connecting homeowners, contractors, and engineers with the best material prices in real-time. Calculate, compare, and order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => onNavigate('products')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
              >
                Browse Materials <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => onNavigate('dashboard')}
                className="bg-transparent border-2 border-slate-500 hover:border-white text-white px-8 py-3 rounded-lg font-bold text-lg transition-all"
              >
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Why Deyarak?</h2>
          <p className="text-slate-500 mt-2">7 Reasons why we are Egypt's #1 Construction Marketplace.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Mobile App & QR Code Section */}
       <section className="bg-slate-100 py-16 px-4">
         <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
               <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Manage your project on the go</h2>
               <p className="text-slate-600 mb-6">
                 Scan the QR code to open Deyarak instantly on your mobile device. Access real-time prices and order tracking from the construction site.
               </p>
               <div className="flex gap-4">
                 <button className="h-12 px-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-slate-800 transition-colors">
                    App Store
                 </button>
                 <button className="h-12 px-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-slate-800 transition-colors">
                    Google Play
                 </button>
               </div>
            </div>
            
            <div className="md:w-1/2 bg-slate-50 p-8 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-slate-200">
               <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 mb-4 transform hover:scale-105 transition-transform duration-300">
                 <img 
                   src={qrCodeUrl} 
                   alt="Deyarak QR Code" 
                   className="w-48 h-48 object-contain"
                 />
               </div>
               <div className="flex items-center text-slate-500 font-medium text-sm">
                 <QrCode className="w-4 h-4 mr-2" />
                 Scan to open on mobile
               </div>
            </div>
         </div>
       </section>
    </div>
  );
};

export default Home;
