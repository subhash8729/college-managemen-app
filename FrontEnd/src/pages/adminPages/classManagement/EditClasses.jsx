import React, { useEffect, useState } from 'react'
import { Loader, SquarePen } from 'lucide-react';
import TopNavbar from '../../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../../components/managerComponents/Sidebar';
import { useAuthStore } from '../../../stores/useAuthStore';
import { useAdminStore } from '../../../stores/useAdminStore';

const Admin_EditClasses = () => {

    const { isLoading } = useAuthStore();
    const { fetchClasses, getClasses } = useAdminStore();
    const { classes } = useAdminStore();

//interface should be - first year - cse-a, cse-b, cse-c, aids-a, aids-b, it 
//getting class names by calling the api like getClasses
//getting class state
//filtering data into first_year, second_year, third_year, fourth_year

    useEffect(() => {
        //here we have to fetch all the classes from server to show below right
        getClasses();
    }, [])
    

    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-[#10172C] via-[#453181] to-[#3B1C63]'>

            {
                isLoading && (<div className='w-full h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                    <Loader className='scale-300 animate-spin' />
                </div>)
            }

            <TopNavbar />
            <NavbarAdmin props={"classManagement"} />
            <Sidebar props={"admin"} />

            {/* edit classes page */}
            <div className='py-4 px-2'>
                <div className='w=full p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40'>
                    <div className='font-bold text-3xl text-white px-1'>Classname</div>

                    {/* First year data */}
                    <div className='font-bold text-lg mt-6 mb-2 text-black px-1'>First Year</div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                        {
                            classes.length > 0 ? (classes.map((value) => (

                                <div key={value.class_id} className='min-h-[60px] p-2 text-sm flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black font-medium'>
                                    <div className='flex items-center gap-5'>
                                        <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.class_name}
                                        </span>
                                    </div>

                                    <div className='h-full flex items-center'>
                                        <SquarePen className='hover:text-red-700 transition-all ' />
                                    </div>
                                </div>

                            ))) : <div className='text-red-900 px-1'>No classes found for First year</div>
                        }


                    </div>

                    {/* Second year data */}
                    <div className='font-bold text-lg mt-6 mb-2 text-black px-1'>Second Year</div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                        {
                            classes.length > 0 ? (classes.map((value) => (

                                <div key={value.class_id} className='min-h-[60px] p-2 text-sm flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black font-medium'>
                                    <div className='flex items-center gap-5'>
                                        <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.class_name}
                                        </span>
                                    </div>

                                    <div className='h-full flex items-center'>
                                        <SquarePen className='hover:text-red-700 transition-all ' />
                                    </div>
                                </div>

                            ))) : <div className='text-red-900 px-1'>No classes found for Second year</div>
                        }

                    </div>

                    {/* Third year data */}
                    <div className='font-bold text-lg mt-6 mb-2 text-black px-1'>Third Year</div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                        {
                            classes.length > 0 ? (classes.map((value) => (

                                <div key={value.class_id} className='min-h-[60px] p-2 text-sm flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black font-medium'>
                                    <div className='flex items-center gap-5'>
                                        <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.class_name}
                                        </span>
                                    </div>

                                    <div className='h-full flex items-center'>
                                        <SquarePen className='hover:text-red-700 transition-all ' />
                                    </div>
                                </div>

                            ))) : <div className='text-red-900 px-1'>No classes found for Third year</div>
                        }


                    </div>


                    {/* Fourth year data */}
                    <div className='font-bold text-lg mt-6 mb-2 text-black px-1'>Fourth Year</div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                        {
                            classes.length > 0 ? (classes.map((value) => (

                                <div key={value.class_id} className='min-h-[60px] p-2 text-sm flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black font-medium'>
                                    <div className='flex items-center gap-5'>
                                        <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.class_name}
                                        </span>
                                    </div>

                                    <div className='h-full flex items-center'>
                                        <SquarePen className='hover:text-red-700 transition-all ' />
                                    </div>
                                </div>

                            ))) : <div className='text-red-900 px-1'>No classes found for Fourth year</div>
                        }


                    </div>



                </div>
            </div>
        </div>
    )
}

export default Admin_EditClasses
