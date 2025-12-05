import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Filter, Search, ShoppingCart } from 'lucide-react';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Steel', 'Cement', 'Bricks', 'Aggregates', 'Finishing', 'Paints', 'Electrical', 'Plumbing'];

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold text-slate-900">Marketplace</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input 
                    type="text" 
                    placeholder="Search materials..." 
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {/* Filter Toggle (Mock) */}
            <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-700">
                <Filter className="h-5 w-5" />
                <span className="md:hidden">Filter</span>
            </button>
        </div>
      </div>

      {/* Category Pills (Scrollable on mobile) */}
      <div className="flex overflow-x-auto pb-4 mb-6 space-x-2 no-scrollbar">
        {categories.map((cat) => (
            <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* Products Grid - Responsive Cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden flex flex-col">
            <div className="relative h-48 bg-slate-200">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-800 shadow-sm">
                {product.category}
              </div>
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="font-bold text-slate-900 line-clamp-2">{product.name}</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4">{product.supplier}</p>
              
              <div className="mt-auto flex items-end justify-between">
                <div>
                    <p className="text-xs text-slate-400">Price per {product.unit}</p>
                    <p className="text-lg font-bold text-orange-600">
                        {product.price.toLocaleString()} <span className="text-xs font-normal text-slate-500">EGP</span>
                    </p>
                </div>
                <button className="bg-slate-900 hover:bg-slate-800 text-white p-2 rounded-lg transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
              No products found matching your search.
          </div>
      )}
    </div>
  );
};

export default Products;