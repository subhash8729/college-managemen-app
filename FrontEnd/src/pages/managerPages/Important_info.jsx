import React, { useEffect, useState } from 'react';
import Navbar from '../../components/managerComponents/Navbar';
import { useAuthStore } from '../../stores/useAuthStore';
import axiosInstance from '../../functions/axios';
import TopNavbar from '../../components/managerComponents/TopNavbar';
import Sidebar from '../../components/managerComponents/Sidebar';

const Important_info_home = () => {
  const { isLoading, setAuthUser, setIsLoading, authUser } = useAuthStore();
  const [data, setData] = useState([])
  //show loading bar
  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get("/public/get-important-info");
      setData(res.data);
    }
    getData()
  }, [])
  //making a get request to get the data
  //showing data based upon data came

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <TopNavbar />
      <Navbar />
      <Sidebar />
        <div className='flex flex-wrap gap-5 p-4'>
      {
        data.map((value) => (
          <div key={value.number} className='bg-white/20 flex flex-col w-full basis-[400px] flex-1 p-3 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg' >
            {/* for icon and heading */}
            <div className='w-full flex'>
              <div className='w-12 h-12 p-3 rounded-sm'>
                <img className='w-full h-full' src={`/images/${value.icon? value.icon :"one.png"}`} alt="icon" />
              </div>
              <div className='text-white -tracking-tighter mt-2 font-extrabold text-lg'>
                {value.heading}
              </div>

            </div>
            <h1 className='text-black font-extrabold -tracking-tighter text-lg'>Main</h1>
            <p className='text-white'>{value.main}</p>

            <h1 className='text-black -tracking-tighter font-extrabold mt-4 text-lg'>Description</h1>
            <p className='text-white'>{value.description}</p>

            <h1 className='text-black -tracking-tighter font-extrabold mt-4 text-lg'>Links</h1>
            <div className='flex gap-3'>
              <a className='text-white bg-black/30 px-2 py-1 rounded-lg' target='_blank' href={value.link1}>Youtube</a>
              <a className='text-white bg-black/30 px-2 py-1 rounded-lg' target='_blank' href={value.link2}>Instagram</a>
              <a className='text-white bg-black/30 px-2 py-1 rounded-lg' target='_blank' href={value.link3}>Chatgpt</a>
            </div>

          </div>
        ))
      }
          </div>
    </div>

  );
};

export default Important_info_home;