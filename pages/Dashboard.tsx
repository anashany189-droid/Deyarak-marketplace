import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { PRICE_HISTORY_DATA } from '../constants';
import { Package, Truck, DollarSign, Clock, CheckCircle2, MapPin, Box } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Contractor Dashboard</h2>
      
      {/* Active Order Tracking Section (New Feature) */}
      <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Track Order #ORD-493</h3>
            <p className="text-sm text-slate-500">Estimated Delivery: Today, 4:00 PM</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">In Transit</span>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full"></div>
          <div className="absolute top-1/2 left-0 w-2/3 h-1 bg-orange-500 -translate-y-1/2 rounded-full transition-all duration-1000"></div>
          
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white ring-4 ring-white">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-xs font-bold mt-2 text-slate-900">Confirmed</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white ring-4 ring-white">
                <Box size={16} />
              </div>
              <span className="text-xs font-bold mt-2 text-slate-900">Preparing</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white ring-4 ring-white">
                <MapPin size={16} />
              </div>
              <span className="text-xs font-bold mt-2 text-slate-900">Aggregation Point</span>
            </div>

             <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-orange-500 ring-4 ring-white animate-pulse">
                <Truck size={16} />
              </div>
              <span className="text-xs font-bold mt-2 text-orange-600">Out for Delivery</span>
            </div>

             <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 ring-4 ring-white">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-xs font-bold mt-2 text-slate-400">Delivered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm font-medium">Active Orders</span>
            <Package className="h-5 w-5 text-orange-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">12</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm font-medium">In Transit</span>
            <Truck className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">4</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
           <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm font-medium">Total Spent</span>
            <DollarSign className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">EGP 245k</p>
        </div>
         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
           <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm font-medium">Pending Est.</span>
            <Clock className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">2</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Steel Price History (EGP/Ton)</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={PRICE_HISTORY_DATA}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="price" stroke="#f97316" fillOpacity={1} fill="url(#colorPrice)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity Table - Responsive Wrapper */}
      <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-900">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Material</th>
                <th className="px-6 py-4 font-medium">Supplier</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">#ORD-492</td>
                <td className="px-6 py-4">10 Tons Steel</td>
                <td className="px-6 py-4">Ezz Steel</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Delivered</span></td>
                <td className="px-6 py-4 text-right">EGP 420,000</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">#ORD-493</td>
                <td className="px-6 py-4">5000 Bricks</td>
                <td className="px-6 py-4">Arab Contractors</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">In Transit</span></td>
                <td className="px-6 py-4 text-right">EGP 7,500</td>
              </tr>
               <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">#ORD-494</td>
                <td className="px-6 py-4">100 Sacks Cement</td>
                <td className="px-6 py-4">Amreyah</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">Pending</span></td>
                <td className="px-6 py-4 text-right">EGP 21,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;