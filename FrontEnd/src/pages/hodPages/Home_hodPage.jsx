import React, { useEffect, useState } from 'react'
import { Loader } from 'lucide-react';
import TopNavbar from '../../components/managerComponents/TopNavbar';
import Sidebar from '../../components/managerComponents/Sidebar';
import NavbarAdmin from '../../components/adminComponents/NavbarAdmin';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RefreshCw } from 'lucide-react';

const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

const Home_hodPage = () => {
    
    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-[#10172C] via-[#453181] to-[#3B1C63]'>

            <div className='w-full hidden h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                <Loader className='scale-300 animate-spin' />
            </div>


            <TopNavbar />
            <NavbarAdmin props={"home"} />
            <Sidebar props={"hod"} />





            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
                
                   
            </div>

        </div>
    )
}

export default Home_hodPage
