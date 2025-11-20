import React, { useEffect, useState } from 'react'
import { Loader } from 'lucide-react';
import TopNavbar from '../../components/managerComponents/TopNavbar';
import Sidebar from '../../components/managerComponents/Sidebar';
import NavbarAdmin from '../../components/adminComponents/NavbarAdmin';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RefreshCw } from 'lucide-react';

const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

const Admin_home = () => {
    const [data, setData] = useState([]);
    const [pieData, setPieData] = useState([]);

    const generateData = () => {
        const newData = Array.from({ length: 8 }, (_, i) => ({
            name: `Point ${i + 1}`,
            value1: Math.floor(Math.random() * 100),
            value2: Math.floor(Math.random() * 100),
            value3: Math.floor(Math.random() * 100),
        }));
        setData(newData);

        const newPieData = Array.from({ length: 5 }, (_, i) => ({
            name: `Category ${String.fromCharCode(65 + i)}`,
            value: Math.floor(Math.random() * 100) + 20,
        }));
        setPieData(newPieData);
    };

    useEffect(() => {
        generateData();
    }, []);

    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-[#10172C] via-[#453181] to-[#3B1C63]'>

            <div className='w-full hidden h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                <Loader className='scale-300 animate-spin' />
            </div>


            <TopNavbar />
            <NavbarAdmin props={"home"} />
            <Sidebar props={"admin"} />

            {/* lll */}





            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-bold text-white">Random Graph Generator</h1>
                        <button
                            onClick={generateData}
                            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            <RefreshCw className="w-5 h-5" />
                            Regenerate
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Line Chart */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl">
                            <h2 className="text-xl font-semibold text-white mb-4">Line Chart</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                                    <XAxis dataKey="name" stroke="#fff" />
                                    <YAxis stroke="#fff" />
                                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                                    <Legend />
                                    <Line type="monotone" dataKey="value1" stroke="#8b5cf6" strokeWidth={2} />
                                    <Line type="monotone" dataKey="value2" stroke="#ec4899" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Bar Chart */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl">
                            <h2 className="text-xl font-semibold text-white mb-4">Bar Chart</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                                    <XAxis dataKey="name" stroke="#fff" />
                                    <YAxis stroke="#fff" />
                                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                                    <Legend />
                                    <Bar dataKey="value1" fill="#10b981" />
                                    <Bar dataKey="value2" fill="#f59e0b" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Area Chart */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl">
                            <h2 className="text-xl font-semibold text-white mb-4">Area Chart</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                                    <XAxis dataKey="name" stroke="#fff" />
                                    <YAxis stroke="#fff" />
                                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                                    <Legend />
                                    <Area type="monotone" dataKey="value1" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                                    <Area type="monotone" dataKey="value2" stackId="1" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Pie Chart */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl">
                            <h2 className="text-xl font-semibold text-white mb-4">Pie Chart</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Admin_home
