
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmartAssistant from './components/SmartAssistant';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Suppliers from './pages/Suppliers';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const navigateToProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-details');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <Products onProductClick={navigateToProduct} />;
      case 'product-details':
        return (
          <ProductDetails 
            productId={selectedProductId!} 
            onBack={() => setCurrentPage('products')} 
          />
        );
      case 'suppliers':
        return <Suppliers />;
      case 'login':
        return (
           <div className="flex items-center justify-center min-h-[60vh] px-4">
             <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Welcome Back</h2>
                <input type="email" placeholder="Email Address" className="w-full mb-4 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                <input type="password" placeholder="Password" className="w-full mb-6 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">Login</button>
                <p className="mt-4 text-center text-sm text-slate-500">
                  Don't have an account? <span className="text-orange-600 font-bold cursor-pointer">Register</span>
                </p>
             </div>
           </div>
        );
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      
      {/* Smart Assistant is always available */}
      <SmartAssistant />
    </div>
  );
};

export default App;
