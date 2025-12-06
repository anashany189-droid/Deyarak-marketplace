
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Star, Truck, Shield, RotateCcw, ShoppingCart, Heart, Share2, Check } from 'lucide-react';

interface ProductDetailsProps {
  productId: string;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId, onBack }) => {
  const product = MOCK_PRODUCTS.find(p => p.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image);
  const [qty, setQty] = useState(1);

  if (!product) return <div>Product not found</div>;

  const images = product.images || [product.image];

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-3 px-4 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-sm text-slate-500">
          <button onClick={onBack} className="hover:text-orange-600">Products</button> 
          <span className="mx-2">/</span> 
          <span>{product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Images */}
          <div className="md:col-span-5">
            <div className="border border-slate-200 rounded-lg p-4 mb-4 flex items-center justify-center bg-white h-96">
              <img src={activeImage} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`border-2 rounded-md p-1 w-20 h-20 flex-shrink-0 flex items-center justify-center bg-white ${activeImage === img ? 'border-orange-500' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <img src={img} alt="thumbnail" className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Middle Column: Info */}
          <div className="md:col-span-4">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-blue-600 hover:underline cursor-pointer text-sm">{product.reviewsCount} ratings</span>
            </div>

            <div className="border-t border-b border-slate-100 py-4 mb-4">
               <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-slate-900">EGP {product.price.toLocaleString()}</span>
                  {product.oldPrice && <span className="text-slate-500 line-through text-lg">EGP {product.oldPrice.toLocaleString()}</span>}
               </div>
               <p className="text-sm text-slate-500 mt-1">All prices include VAT</p>
            </div>

            <div className="space-y-4 mb-6">
               <div className="flex items-start gap-3">
                 <div className="p-2 bg-slate-100 rounded-full"><Truck size={18} className="text-slate-600"/></div>
                 <div>
                   <p className="font-semibold text-sm">Fast Delivery</p>
                   <p className="text-xs text-slate-500">Delivered within 2-4 days to Cairo & Giza</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="p-2 bg-slate-100 rounded-full"><RotateCcw size={18} className="text-slate-600"/></div>
                 <div>
                   <p className="font-semibold text-sm">14 Days Return</p>
                   <p className="text-xs text-slate-500">Free returns if product is sealed</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <div className="p-2 bg-slate-100 rounded-full"><Shield size={18} className="text-slate-600"/></div>
                 <div>
                   <p className="font-semibold text-sm">Genuine Product</p>
                   <p className="text-xs text-slate-500">Sold by verified supplier: <span className="font-bold text-blue-600">{product.supplier}</span></p>
                 </div>
               </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">About this item</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
            </div>
          </div>

          {/* Right Column: Buy Box */}
          <div className="md:col-span-3">
            <div className="border border-slate-200 rounded-lg p-6 shadow-sm bg-white sticky top-24">
              <div className="text-2xl font-bold text-slate-900 mb-2">EGP {product.price.toLocaleString()}</div>
              
              <div className="text-green-600 text-sm font-semibold mb-4 flex items-center">
                <Check size={16} className="mr-1"/> In Stock
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                <select 
                  value={qty} 
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="block w-full border border-slate-300 rounded-md p-2 text-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  {[1,2,3,4,5,10,20,50].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-full mb-3 transition-colors shadow-md flex items-center justify-center gap-2">
                 <ShoppingCart size={18} /> Add to Cart
              </button>
              
              <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-800 font-bold py-2 px-4 rounded-full mb-4 transition-colors text-sm">
                 Buy Now
              </button>

              <div className="border-t border-slate-100 pt-4 text-xs text-slate-500 space-y-2">
                 <div className="flex justify-between"><span>Ships from</span> <span className="font-medium text-slate-900">Deyarak Logistics</span></div>
                 <div className="flex justify-between"><span>Sold by</span> <span className="font-medium text-blue-600">{product.supplier}</span></div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center gap-4">
                 <button className="text-slate-500 hover:text-red-500 flex items-center gap-1 text-sm"><Heart size={16}/> Wishlist</button>
                 <button className="text-slate-500 hover:text-blue-500 flex items-center gap-1 text-sm"><Share2 size={16}/> Share</button>
              </div>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div className="mt-12 bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Technical Specifications</h3>
          </div>
          <div className="p-6">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
              {Object.entries(product.specs).map(([key, value], idx) => (
                <div key={key} className={`flex border-b border-slate-100 pb-2 ${idx % 2 === 0 ? 'bg-slate-50/50' : ''}`}>
                  <dt className="w-1/3 font-medium text-slate-500 text-sm">{key}</dt>
                  <dd className="w-2/3 text-slate-900 text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8">
           <h3 className="text-xl font-bold text-slate-900 mb-4">Customer Reviews</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map(review => (
                  <div key={review.id} className="border border-slate-200 p-4 rounded-lg bg-white shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center font-bold text-slate-600">
                          {review.user.charAt(0)}
                       </div>
                       <span className="font-bold text-sm">{review.user}</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm">{review.comment}</p>
                    <span className="text-xs text-slate-400 mt-2 block">{review.date}</span>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 italic">No reviews yet for this product.</p>
              )}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
