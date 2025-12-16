import React, { useEffect, useState } from 'react'
import { Loader } from 'lucide-react';
import TopNavbar from '../../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../../components/managerComponents/Sidebar';
import { useAuthStore } from '../../../stores/useAuthStore';
import { useAdminStore } from '../../../stores/useAdminStore';

const Admin_addEmployees = () => {
    const { setIsLoading, isLoading } = useAuthStore();
    const [is_custom_role_opened, set_is_custom_role_opened] = useState(false)
    const { add_employee } = useAdminStore();
    const [formData, setFormData] = useState({
        employee_name: "",
        employee_year: "",
        employee_role: "",
        token: "",
    })
    const handle_select_change = (e) => {
        if (e.target.value === "other") set_is_custom_role_opened(true)
        else set_is_custom_role_opened(false)
    }

    const handle_change = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handle_submit = (e) => {
        e.preventDefault();
        add_employee(formData);

    }

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
                    <form onChange={handle_change} >


                        <div className='w-full grid gap-4 md:grid-cols-2'>
                            <div>
                                <div className='text-2xl p-2 text-white/70 font-extrabold'>Enter the employee name</div>
                                <input className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' type='text' name="employee_name" id="year" />
                            </div>
                            <div>
                                <div className='text-2xl p-2 text-white/70 font-extrabold'>Select the Role of Employee</div>
                                <select onChange={handle_select_change} className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' name="employee_role" id="role">
                                    <option value="">-  -  -  Select a Role  -  -  -</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="mentor">Mentor</option>
                                    <option value="staff">Peon</option>
                                    <option value="principal">Principal</option>
                                    <option value="professor">Professor</option>
                                    <option value="hod">HOD (Head of Department)</option>
                                    <option value="other">Other (not mentioned above)</option>
                                </select>
                            </div>


                            <div>
                                <div className='text-2xl p-2 text-white/70 font-extrabold'>Year <span className='text-sm font-medium text-gray-300'>(in which the perticular staff is working )</span></div>
                                <select className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' name="employee_year" id="role">
                                    <option value="">-  -  -  Select a year  -  -  -</option>
                                    <option value="every_year">Every-Year Staff</option>
                                    <option value="first_year">First-Year Staff</option>
                                    <option value="second_year">Second-Year Staff</option>
                                    <option value="third_year">Third-Year Staff</option>
                                    <option value="fourth_year">Fourth-Year Staff</option>

                                </select>
                            </div>
                            {
                                is_custom_role_opened && (
                                    <div>
                                        <div className='text-2xl p-2 text-white/70 font-extrabold'>mention name of other role</div>
                                        <input maxLength={30} className='h-[60px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-lg font-medium' type='text' name="employee_role" id="year" />
                                    </div>
                                )
                            }
                        </div>
                        <button onClick={handle_submit} className='px-4 py-2 text-white font-bold mt-5 block mx-auto bg-green-800 rounded-md' type='button'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Admin_addEmployees
