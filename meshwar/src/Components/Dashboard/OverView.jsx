import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Calendar, DollarSign } from 'lucide-react';

export default function DashboardOverview({ users, outingPlans }) {
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    totalOutings: 0,
    totalProfit: 0
  });
  
  const [profitData, setProfitData] = useState([]);

  useEffect(() => {
    if (users && outingPlans) {
      // Calculate basic metrics
      const activeUsers = users.filter(user => user.isActive).length;
      const totalOutings = outingPlans.length;
      const totalProfit = outingPlans.reduce((sum, plan) => sum + (plan.totalCost * 0.05), 0);

      setMetrics({
        totalUsers: activeUsers,
        totalOutings,
        totalProfit: totalProfit.toFixed(2)
      });

      // Process daily profit data
      const profitsByDate = outingPlans.reduce((acc, plan) => {
        const date = new Date(plan.date).toISOString().split('T')[0];
        const profit = plan.totalCost * 0.05;
        
        if (!acc[date]) {
          acc[date] = 0;
        }
        acc[date] += profit;
        return acc;
      }, {});

      // Convert to array and sort by date
      const chartData = Object.entries(profitsByDate)
        .map(([date, profit]) => ({
          date,
          profit: Number(profit.toFixed(2))
        }))
        .sort((a, b) => new Date(a.date) - new Date(b.date));

      setProfitData(chartData);
    }
  }, [users, outingPlans]);

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Overview</h2>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Users Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Active Users</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{metrics.totalUsers}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-blue-100 rounded-full">
              <div className="h-2 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        {/* Outings Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Outings</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{metrics.totalOutings}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-green-100 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* Profit Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Profit (5%)</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">${metrics.totalProfit}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-purple-100 rounded-full">
              <div className="h-2 bg-purple-500 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Profit Chart */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Daily Profit Trend</h3>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="text-sm text-gray-600">Profit (5% of Total Cost)</span>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={profitData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
                stroke="#9ca3af"
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => `$${value}`}
                stroke="#9ca3af"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem'
                }}
                formatter={(value) => [`$${value}`, 'Profit']}
                labelFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <Line 
                type="monotone" 
                dataKey="profit" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}