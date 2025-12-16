import React, { useEffect, useState } from 'react'
import { Loader, PencilIcon } from 'lucide-react';
import TopNavbar from '../../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../../components/managerComponents/Sidebar';
import { useAuthStore } from '../../../stores/useAuthStore';
import { useAdminStore } from '../../../stores/useAdminStore';


const Admin_editEmployees = () => {
    const { setIsLoading, isLoading } = useAuthStore();
    const { edit_employee_form_fn } = useAdminStore();
    const [data, setData] = useState([])
    const [form_data, setForm_data] = useState({
        selected_year: ""
    });
    const handle_change = (e) => {
        setForm_data({ [e.target.name]: e.target.value })
    }
    const handle_submit = async (e) => {
        e.preventDefault();
        const data = await edit_employee_form_fn(form_data);
        setData(data.data || []);
    }
    useEffect(() => {
        console.log("value of data", data)
        console.log("length of data", data.length)
    }, [data])
    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-[#10172C] via-[#453181] to-[#3B1C63]'>

            {
                isLoading && (<div className='w-full h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                    <Loader className='scale-300 animate-spin' />
                </div>)
            }


            <TopNavbar />
            <NavbarAdmin props={"employeesManagement"} />
            <Sidebar props={"admin"} />

            <div className='p-3'>
                <div className='w-full p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40'>
                    <h1 className='text-2xl tracking-wide p-2 text-white/70 font-bold'>Edit Employees Data</h1>
                    <form onSubmit={handle_submit} onChange={handle_change}>
                        <p className='text-2xl p-2 text-white/70 font-bold'>Select a Year</p>
                        <div className='flex justify-between md:justify-normal md:gap-8'>
                            <select className='bg-white/60 px-3 md:px-10 py-2 md:py-3 rounded-lg' name="employees_year" id="employees_year">
                                <option value=""> - - - Select Year - - - </option>
                                <option value="first_year">First-Year Employees</option>
                                <option value="second_year">Second-Year Employees</option>
                                <option value="third_year">Third-Year Employees</option>
                                <option value="fourth_year">Fourth-Year Employees</option>
                                <option value="every_year">Common Employees</option>
                            </select>
                            <button className='px-5 py-2 bg-green-900 rounded-lg' type="submit">Find</button>
                        </div>
                    </form>
                    <p className='text-2xl tracking-wide mt-12 mb-5 text-white/70 font-bold'>Employees Detail</p>
                    <div className='w-full '>
                        {
                            data.length > 0 ? (
                                <div className='grid gap-2 md:grid-cols-2 p-1 rounded-sm'>
                                    {
                                        data.map(value => (
                                            <div className='w-full bg-white/60 p-1 rounded-sm'>
                                                {/* div for name information */}
                                                <div className='md:flex items-center'>
                                                    <p className='font-bold'>Name :</p>
                                                    <div className='bg-black/20 md:ml-4 rounded px-3 py-1'>{value.employee_name}</div>
                                                </div>

                                                {/* div for role information */}
                                                <div className='md:flex mt-2 items-center'>
                                                    <p className='font-bold'>Role :</p>
                                                    <div className='bg-black/20 md:ml-4 rounded px-3 py-1'>{value.employee_role}</div>
                                                </div>
                                                <button className='px-2 py-1 cursor-pointer bg-blue-500 text-white rounded-sm mt-2 flex items-center'><PencilIcon height={"18"} />Edit</button>
                                            </div>
                                        ))
                                    }
                                </div>

                            ) : (
                                <div className="text-red-200 font-light tracking-wide space-y-1">
                                    <p>1. Select the year in which the employee is working.</p>
                                    <p>2. Click “Find” to get details.</p>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Admin_editEmployees
