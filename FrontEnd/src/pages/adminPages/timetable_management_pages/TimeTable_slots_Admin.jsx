import React, { useEffect, useState } from 'react'
import { Loader } from 'lucide-react';
import TopNavbar from '../../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../../components/managerComponents/Sidebar';


const Admin_TimeTable_slots = () => {
    const handle_change = () => {
        console.log("llalall")
    }

    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>

            <div className='w-full hidden h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                <Loader className='scale-300 animate-spin' />
            </div>


            <TopNavbar />
            <NavbarAdmin props={"timetableManagement"} />
            <Sidebar props={"admin"} />

            <div className='p-3'>
                <div className='w-full p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40'>
                    <form onChange={handle_change} >
                        <p className='text-2xl p-2 text-white/70 tracking-wide font-extrabold'>Select a Class</p>
                        <div className='md:flex space-y-5 md:space-y-0 gap-5'>
                            <select className='h-[40px] w-full md:w-auto block md:inline-block bg-white/30 rounded-lg px-4 -tracking-tighter text-black text-lg font-medium' name="employee_role" id="role">
                                <option value="">-  Choose the Class  -</option>
                                <option value="teacher">CSE</option>
                                <option value="mentor">ECE</option>
                                <option value="staff">AIDS</option>
                                <option value="principal">IT</option>
                            </select>

                            <div className='flex justify-between'>
                                <select className='h-[40px] bg-white/30 rounded-lg px-4 -tracking-tighter text-black text-lg font-medium' name="employee_role" id="role">
                                    <option value="">- Section -</option>
                                    <option value="teacher">A</option>
                                    <option value="mentor">B</option>
                                    <option value="staff">C</option>
                                    <option value="principal">D</option>
                                    <option value="professor">E</option>
                                    <option value="hod">F</option>
                                </select>

                                <button className='px-5 md:ml-5 text-white font-bold bg-green-800 rounded-md' type='button'>Submit</button>
                            </div>
                        </div>

                    </form>
                    <div className='w-full grid gap-4 md:grid-cols-3 lg:grid-cols-4'>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Admin_TimeTable_slots;
