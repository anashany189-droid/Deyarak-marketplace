import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { PRICE_HISTORY_DATA } from '../constants';
import { Package, Truck, DollarSign, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Contractor Dashboard</h2>
      
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
                <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Processing</span></td>
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