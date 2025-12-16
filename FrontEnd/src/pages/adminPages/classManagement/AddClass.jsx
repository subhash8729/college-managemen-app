import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Loader } from 'lucide-react';
import TopNavbar from '../../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../../components/managerComponents/Sidebar';
import { useAuthStore } from '../../../stores/useAuthStore';
import { useAdminStore } from '../../../stores/useAdminStore';

const Admin_AddClass = () => {
    const { setIsLoading, isLoading } = useAuthStore();
    const { add_class, get_branches_details, branches_details } = useAdminStore();
    const [formData, setFormData] = useState({
        class_id:"",
        branches_id: "",
        section: ""
    })

    useEffect(() => {
        get_branches_details();

    }, [])


    const handle_change = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handle_submit = (e) => {
        e.preventDefault();
        add_class(formData);

    }
    useEffect(() => {
        console.log(formData)
    }, [formData])



    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-[#10172C] via-[#453181] to-[#3B1C63]'>

            {
                isLoading && (
                    <div className='w-full relative min-h-screen bg-gradient-to-br from-[#10172C] via-[#453181] to-[#3B1C63]'>
                        <div className='w-full h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                            <Loader className='scale-300 animate-spin' />
                        </div>
                    </div>)
            }

            <TopNavbar />
            <NavbarAdmin props={"classManagement"} />
            <Sidebar props={"admin"} />

            <div className='p-3'>
                <div className='w-full p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40'>
                    <form onChange={handle_change} onSubmit={handle_submit} >
                        <div className='w-full grid gap-4 md:grid-cols-2'>

                            <div>
                                <div className='text-2xl p-2 text-white/70 font-extrabold'>Branch</div>
                                <select className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' name="branches_id" id="year">
                                    <option value="">-  -  -  Select a Branch  -  -  -</option>
                                    {
                                        branches_details.map(value => (
                                            <option key={value.branches_id} value={value.branches_id}>{value.branches_alias}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div>
                                <div className='text-2xl p-2 text-white/70 font-extrabold'>Section</div>
                                <input className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' type='text' name="section" id="class" />

                            </div>

                        </div>
                        <button className='px-4 py-2 text-white font-bold mt-5 block mx-auto bg-green-800 rounded-md' type='submit'>Create class</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Admin_AddClass
