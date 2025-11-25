import React, { useEffect, useState } from 'react'
import { Loader } from 'lucide-react';
import TopNavbar from '../../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../../components/managerComponents/Sidebar';
import { useAuthStore } from '../../../stores/useAuthStore';
import { useAdminStore } from '../../../stores/useAdminStore';




const Admin_branchManagement_add_branch = () => {
    const { setIsLoading, isLoading } = useAuthStore();
    const { add_branch } = useAdminStore();
    const [formdata, setFormdata] = useState({
        branch_name: "",
    });

    const handle_change = (e) => {
        setFormdata({ [e.target.name]: e.target.value });
    }
    const handle_submit = (e) => {
        e.preventDefault();
        add_branch(formdata)
    }

    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>

            {
                isLoading && (<div className='w-full h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                    <Loader className='scale-300 animate-spin' />
                </div>)
            }


            <TopNavbar />
            <NavbarAdmin props={"branchManagement"} />
            <Sidebar props={"admin"} />

            <div className='p-3'>
                <div className='w-full p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40'>
                    <form onChange={handle_change} onSubmit={handle_submit}>
                        <div className='w-full'>

                            <div>
                                <div className='text-2xl p-2 text-white/70 font-extrabold'>Branch Name</div>
                                <input className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' type='text' name="branch_name" id="year" />
                                <button className='px-4 py-2 text-white font-bold mt-5 block mx-auto bg-green-800 rounded-md' type='submit'>+ Add</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Admin_branchManagement_add_branch;
