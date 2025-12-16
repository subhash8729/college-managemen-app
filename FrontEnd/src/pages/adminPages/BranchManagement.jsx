import React, { useEffect, useState } from 'react'
import { Loader} from 'lucide-react';
import TopNavbar from '../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../components/managerComponents/Sidebar';



const Admin_branchManagement_home = () => {
    const handle_change = ()=>{
        console.log("llalall")
    }

    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>

            <div className='w-full hidden h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                <Loader className='scale-300 animate-spin' />
            </div>


            <TopNavbar />
            <NavbarAdmin props={"branchManagement"} />
            <Sidebar props={"admin"} />

            <div className='p-3'>
                <div className='w-full p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40'>
                    <form onChange={handle_change} >


                        <div className='w-full grid gap-4 md:grid-cols-2'>
                            Content........
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Admin_branchManagement_home;
