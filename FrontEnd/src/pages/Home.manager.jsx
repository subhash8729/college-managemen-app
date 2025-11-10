import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, Users, TrendingUp, Settings, Bell, Search } from 'lucide-react';
import NavbarManager from '../components/NavbarManager';

export default function DashboardHomepage() {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const data = [65, 45, 78, 52, 88, 70, 95];
    const barWidth = canvas.width / data.length;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    data.forEach((value, index) => {
      const barHeight = (value / 100) * canvas.height;
      const x = index * barWidth;
      const y = canvas.height - barHeight;
      
      const gradient = ctx.createLinearGradient(0, y, 0, canvas.height);
      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(1, '#1e40af');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x + 5, y, barWidth - 10, barHeight);
    });
  }, []);

  const stats = [
    { label: 'Total Users', value: '12,543', change: '+12.5%', icon: Users },
    { label: 'Revenue', value: '$45,231', change: '+8.2%', icon: TrendingUp },
    { label: 'Active Projects', value: '24', change: '+3', icon: BarChart3 },
  ];

  const recentActivity = [
    { user: 'Sarah Chen', action: 'completed Project Alpha', time: '2 hours ago' },
    { user: 'Mike Johnson', action: 'added new client', time: '4 hours ago' },
    { user: 'Emma Wilson', action: 'updated dashboard', time: '5 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <NavbarManager />
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          {['overview', 'analytics', 'reports', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition capitalize ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="text-blue-500" size={24} />
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <p className="text-white text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Canvas */}
          <div className="lg:col-span-2 bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-white text-lg font-semibold mb-4">Weekly Performance</h3>
            <canvas ref={canvasRef} className="w-full h-64"></canvas>
            <div className="flex justify-between mt-4 text-xs text-slate-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-white text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="pb-4 border-b border-slate-700 last:border-0">
                  <p className="text-white text-sm font-medium">{activity.user}</p>
                  <p className="text-slate-400 text-xs mt-1">{activity.action}</p>
                  <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['New Project', 'Add User', 'View Reports', 'Export Data'].map((action) => (
            <button
              key={action}
              className="bg-slate-800 hover:bg-slate-700 text-white rounded-lg py-4 px-6 transition border border-slate-700"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}