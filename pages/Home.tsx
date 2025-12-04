import React from 'react';
import { ArrowRight, Activity, Truck, Calculator } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
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
          <p className="text-slate-500 mt-2">Comprehensive solutions for your construction needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Real-Time Prices</h3>
            <p className="text-slate-600">Compare live prices from verified suppliers across Egypt for steel, cement, and finishing materials.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Smart Estimation</h3>
            <p className="text-slate-600">Use our AI assistant to calculate exact quantities needed for your apartment or building project.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100">
             <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Streamlined Logistics</h3>
            <p className="text-slate-600">Full ordering process from supplier to your doorstep via our partner delivery network.</p>
          </div>
        </div>
      </section>

       {/* Mobile App Call to Action */}
       <section className="bg-slate-100 py-16 px-4">
         <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 md:w-1/2">
               <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Manage your project on the go</h2>
               <p className="text-slate-600 mb-6">Access Deyarak from any device. Our responsive platform works perfectly on your mobile phone, tablet, and desktop.</p>
               <div className="flex gap-4">
                 <div className="h-12 w-32 bg-slate-800 rounded-md flex items-center justify-center text-white text-xs cursor-pointer">App Store</div>
                 <div className="h-12 w-32 bg-slate-800 rounded-md flex items-center justify-center text-white text-xs cursor-pointer">Google Play</div>
               </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto w-full bg-slate-200 flex items-center justify-center">
               <span className="text-slate-400 font-medium">App Preview Image</span>
            </div>
         </div>
       </section>
    </div>
  );
};

export default Home;