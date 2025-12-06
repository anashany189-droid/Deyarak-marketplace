
import React from 'react';
import { MOCK_SUPPLIERS } from '../constants';
import { MapPin, Phone, Star, ShieldCheck } from 'lucide-react';

const Suppliers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Verified Suppliers</h2>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
          We partner with Egypt's most trusted distributors and factories to ensure you get authentic products with official warranties.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_SUPPLIERS.map((supplier) => (
          <div key={supplier.id} className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <img src={supplier.logo} alt={supplier.name} className="w-16 h-16 rounded-full border border-slate-200" />
              <div>
                <h3 className="font-bold text-lg text-slate-900 leading-tight">{supplier.name}</h3>
                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full mt-1 inline-block">Verified Partner</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-600">
                <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                {supplier.location}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <ShieldCheck className="h-4 w-4 mr-2 text-green-500" />
                Specialty: {supplier.specialty}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Phone className="h-4 w-4 mr-2 text-slate-400" />
                {supplier.phone}
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 mr-2 text-yellow-500 fill-current" />
                <span className="font-bold text-slate-900 mr-1">{supplier.rating}</span>
                <span className="text-slate-400">/ 5.0 Rating</span>
              </div>
            </div>

            <button className="w-full mt-6 border border-slate-300 hover:border-orange-500 hover:text-orange-600 text-slate-700 font-medium py-2 rounded-lg transition-colors">
              View Products
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
