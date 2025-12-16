import React, { useEffect, useState } from 'react'
import { Loader } from 'lucide-react';
import TopNavbar from '../../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../../components/managerComponents/Sidebar';
import { useAuthStore } from '../../../stores/useAuthStore';
import { useAdminStore } from '../../../stores/useAdminStore';




const AddSubject = () => {
    const { setIsLoading, isLoading } = useAuthStore();
    const { add_subject } = useAdminStore();
    const [formdata, setFormdata] = useState({
        subject_year: "",
        subject_name: "",
        subject_alias: "",
    });

    const handle_submit = (e) => {
        e.preventDefault();
        formdata.subject_year = e.target.subject_year.value
        formdata.subject_name = e.target.subject_name.value
        formdata.subject_alias = e.target.subject_alias.value
        add_subject(formdata)
    }

    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>

            {
                isLoading && (<div className='w-full h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                    <Loader className='scale-300 animate-spin' />
                </div>)
            }


            <TopNavbar />
            <NavbarAdmin props={"subjectManagement"} />
            <Sidebar props={"admin"} />

            <div className='p-3'>
                <div className='w-full p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40'>
                    <form onSubmit={handle_submit}>
                        <div className='w-full'>

                            <div>
                                <div className='text-2xl p-2 text-white/70 font-extrabold'>Create Subject</div>
                                <div className='w-full grid gap-4 md:grid-cols-3'>
                                    <div>
                                        <div className='text-2xl p-2 text-white/70 font-extrabold'>Year</div>
                                        <select className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' name="subject_year" id="role">
                                            <option value="">-  -  -  Select a year  -  -  -</option>
                                            <option value="first_year">First-Year</option>
                                            <option value="second_year">Second-Year</option>
                                            <option value="third_year">Third-Year</option>
                                            <option value="fourth_year">Fourth-Year</option>
                                            <option value="every_year">Common</option>
                                        </select>
                                    </div>

                                    <div>
                                        <div className='text-2xl p-2 text-white/70 font-extrabold'>Subject Name</div>
                                        <input className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' type='text' name="subject_name" id="class" />
                                    </div>

                                    <div>
                                        <div className='text-2xl p-2 text-white/70 font-extrabold'>Subject Alias</div>
                                        <input className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' type='text' name="subject_alias" id="class" />
                                    </div>
                                </div>
                            </div>
                            <button className='px-4 py-2 text-white font-bold mt-5 block mx-auto bg-green-800 rounded-md' type='submit'>+ Add</button>

                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default AddSubject;
