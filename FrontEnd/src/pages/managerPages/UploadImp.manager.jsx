import React, { useEffect, useState } from 'react'
import NavbarManager from '../../components/managerComponents/NavbarManager'
import axiosInstance from '../../functions/axios';
import TopNavbar from '../../components/managerComponents/TopNavbar';
import Sidebar from '../../components/managerComponents/Sidebar';

export const Upload_important_info = () => {
    const [visible_confirm, setvisible_confirm] = useState(false)


    const [formData, setFormData] = useState({
        icon: 0,
        heading: "",
        main: "",
        description: "",
        link1: "",
        link2: "",
        link3: "",
        token: ""
    });

    //handle_key_down

    const handleKeyDown = (e) => {
        // if (e.key === "Enter") {
        //   e.preventDefault();
        // }
    };


    const handle_change = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handle_submit = async (e) => {
        e.preventDefault();
        setFormData(prev => ({ ...prev, token: localStorage.getItem("token") }));
        const res = await axiosInstance.post("/manager/upload-important-info", formData);
        console.log(formData);
        console.log(res);
    }
    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-[#10172C] via-[#453181] to-[#3B1C63]'>
            <TopNavbar />
            <NavbarManager />
            <Sidebar />
            <div className={`${visible_confirm? "w-full" : "w-0"}  transition-all flex duration-500 h-screen fixed inset-0 z-10 items-center justify-center backdrop-blur-sm bg-black/40`}>
                <div className={`${visible_confirm? "opacity-100 duration-300 delay-200" : "opacity-0 duration-0"} transition-all bg-white/90 p-6 rounded-2xl shadow-2xl text-center space-y-4 max-w-sm w-[90%]`}>
                    <h1 className="text-lg font-semibold text-gray-800">
                        Upload the Message in Important Information Section
                    </h1>
                    <div className="flex justify-center gap-4">
                        <button onClick={handle_submit} className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                            Confirm
                        </button>
                        <button onClick={()=>setvisible_confirm(false)} className="px-5 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 transition">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            <form onKeyDown={handleKeyDown} onChange={handle_change} autoComplete='off' onSubmit={handle_submit}>
                <div className='p-4 flex gap-4 flex-wrap content-start'>
                    {/* div with icon selection */}
                    <div className='bg-white/20 basis-[400px] flex-1 p-3 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg'>
                        <h2 className='text-2xl text-white font-extrabold'>Choose a Icon</h2>
                        <div className='mt-7'>
                            <img className='h-[50px]' src="/images/mess-icons.png" alt="icons" />
                        </div>
                        <div className='mt-7'>
                            <select className='border-2 p-2 text-white bg-black/60 border-white focus:border-green-500 focus:outline-none rounded-lg' name="icon" id="icon">
                                <option value="0">default - Message Icon</option>
                                <option value="1">Black Dot Icon</option>
                                <option value="2">Mobile Icon</option>
                                <option value="3">Education Icon</option>
                                <option value="4">Money Icon</option>
                            </select>
                        </div>
                    </div>

                    {/* div for Title */}
                    <div className='bg-white/20 basis-[400px] flex-1 p-3 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg'>
                        <h2 className='text-2xl text-white font-extrabold'>Title</h2>
                        <div>
                            <input maxLength={40} className='w-full mt-2 focus:outline-none focus:border-none focus:bg-white/20' name="heading" id="heading" placeholder='Write Title (50 letters are allowed)' />
                        </div>

                    </div>

                    {/* div for main */}
                    <div className='bg-white/20 basis-[400px] flex-1 p-3 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg'>

                        <h2 className='text-2xl text-white font-extrabold'>Main</h2>
                        <div>
                            <textarea maxLength={100} className='w-full mt-2 focus:outline-none focus:border-none focus:bg-white/20' name="main" id="main" placeholder='write main part (100 letters are allowed)'></textarea>
                        </div>

                    </div>
                    <div className='bg-white/20 basis-[400px]  flex-1 p-3 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg'>

                        <h2 className='text-2xl text-white font-extrabold'>Description</h2>
                        <div>
                            <textarea maxLength={500} className='w-full mt-2 focus:outline-none focus:border-none focus:bg-white/20' name="description" id="description" placeholder='Write Description (500 letters are allowed)'></textarea>
                        </div>

                    </div>
                    <div className='bg-white/20 basis-[400px]  flex-1 p-3 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg'>

                        <h2 className='text-2xl text-white font-extrabold'>Links</h2>
                        <div>
                            <input className='w-full mt-2 focus:outline-none focus:border-none bg-white/60 p-2 rounded-md' name="link1" id="links" placeholder='Link 1' />
                            <input className='w-full mt-2 focus:outline-none focus:border-none bg-white/60 p-2 rounded-md' name="link2" id="links" placeholder='Link 2' />
                            <input className='w-full mt-2 focus:outline-none focus:border-none bg-white/60 p-2 rounded-md' name="link3" id="links" placeholder='Link 3' />
                        </div>

                    </div>
                </div>
                <div className='flex justify-center'>
                    <button onClick={()=>setvisible_confirm(true)} className='bg-black/50 text-white font-bold px-6 py-4 rounded-2xl mx-auto' type="button">Submit Message</button>

                </div>
            </form>

        </div>
    )
}
