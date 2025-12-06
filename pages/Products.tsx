
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Filter, Search, ShoppingCart, Star } from 'lucide-react';

interface ProductsProps {
  onProductClick: (productId: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
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
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Marketplace</h2>
          <p className="text-sm text-slate-500">Find the best prices for Egyptian construction materials.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-grow md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input 
                    type="text" 
                    placeholder="Search paints, cables, cement..." 
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            onClick={() => onProductClick(product.id)}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col cursor-pointer group"
          >
            <div className="relative h-56 bg-white flex items-center justify-center p-4">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
              {product.oldPrice && (
                 <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                   SALE
                 </div>
              )}
            </div>
            
            <div className="p-4 flex-grow flex flex-col border-t border-slate-50">
              <div className="mb-2">
                <p className="text-xs text-slate-500 mb-1">{product.category}</p>
                <h3 className="font-bold text-slate-900 line-clamp-2 h-12 hover:text-orange-600 transition-colors">{product.name}</h3>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-xs text-slate-400 ml-2">({product.reviewsCount})</span>
              </div>

              <div className="mt-auto">
                <div className="flex items-baseline space-x-2">
                   <p className="text-lg font-bold text-slate-900">
                      EGP {product.price.toLocaleString()} 
                   </p>
                   {product.oldPrice && (
                     <p className="text-sm text-slate-400 line-through">EGP {product.oldPrice.toLocaleString()}</p>
                   )}
                </div>
                <p className="text-xs text-slate-500 mb-3">per {product.unit}</p>

                <button 
                  className="w-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-900 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    // In a real app, this adds to cart
                    onProductClick(product.id);
                  }}
                >
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500">
              <Search className="h-12 w-12 text-slate-300 mb-4" />
              <p className="text-lg">No products found matching "{searchTerm}".</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-4 text-orange-600 font-medium hover:underline"
              >
                Clear Filters
              </button>
          </div>
      )}
    </div>
  );
};

export default Products;
