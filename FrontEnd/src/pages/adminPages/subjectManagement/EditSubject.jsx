import React, { useEffect, useState } from 'react'
import { Loader, RefreshCcwIcon, SquarePen } from 'lucide-react';
import TopNavbar from '../../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../../components/managerComponents/Sidebar';
import { useAuthStore } from '../../../stores/useAuthStore';
import { useAdminStore } from '../../../stores/useAdminStore';
import Popup_subjectEdit from '../../../components/adminComponents/Popup_subjectEdit';
import { useUiStore } from '../../../stores/useUiStore';

const Admin_EditSubject = () => {

    const { isLoading } = useAuthStore();
    const { getSubjects, subjects } = useAdminStore();
    const [subject_id, setSubject_id] = useState("");
    const { isPopUpOpened, setIsPopUpOpened } = useUiStore();
    const [first_year_subjects, set_first_year_subjects] = useState([])
    const [second_year_subjects, set_second_year_subjects] = useState([])
    const [third_year_subjects, set_third_year_subjects] = useState([])
    const [fourth_year_subjects, set_fourth_year_subjects] = useState([])
    const [common_year_subjects, set_common_year_subjects] = useState([]);

    useEffect(() => {
        set_first_year_subjects(subjects.filter(value => value.subject_year === "first_year"))
        set_second_year_subjects(subjects.filter(value => value.subject_year === "second_year"))
        set_third_year_subjects(subjects.filter(value => value.subject_year === "third_year"))
        set_fourth_year_subjects(subjects.filter(value => value.subject_year === "fourth_year"))
        set_common_year_subjects(subjects.filter(value => value.subject_year === "common"))
    }, [subjects])

    //interface should be - first year - cse-a, cse-b, cse-c, aids-a, aids-b, it 
    //getting class names by calling the api like getClasses
    //getting class state
    //filtering data into first_year, second_year, third_year, fourth_year

    useEffect(() => {
        //here we have to fetch all the classes from server to show below right
        getSubjects();
    }, [])

    const handle_overlay = (subjectId) => {
        setSubject_id(subjectId)
        setIsPopUpOpened(true);
    }
    const refresh = ()=>{
        getSubjects();
    }

    return (
        <div className='w-full relative min-h-screen bg-gradient-to-br from-[#10172C] via-[#453181] to-[#3B1C63]'>

            {
                isLoading && (<div className='w-full h-screen top-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                    <Loader className='scale-300 animate-spin' />
                </div>)
            }
            {
                isPopUpOpened && <Popup_subjectEdit subject_id={subject_id} />
            }
            <TopNavbar />
            <NavbarAdmin props={"subjectManagement"} />
            <Sidebar props={"admin"} />

            {/* edit classes page */}
            <div className='py-4 px-2'>
                <div className='w=full p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40'>
                    <div className='flex justify-between pr-5'>
                        <div className='font-bold text-3xl text-white px-1'>Subjects Data</div>
                        <div onClick={refresh} className='px-4 rounded-sm text-sm py-1 bg-green-500/80'><RefreshCcwIcon className='inline scale-50' /> Refresh</div>
                    </div>

                    {/* First year data */}
                    <div className='font-bold text-lg mt-6 mb-2 text-black px-1'>First Year</div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                        {
                            first_year_subjects.length > 0 ? (first_year_subjects.map((value) => (

                                <div key={value.subject_id} className='min-h-[60px] p-2 text-sm flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black font-medium'>
                                    <div className='flex items-center gap-5'>
                                        <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.subject_alias}
                                        </span>
                                    </div>

                                    <div className='h-full flex items-center'>
                                        <SquarePen onClick={() => handle_overlay(value.subject_id)} className='hover:text-red-700 transition-all ' />
                                    </div>
                                </div>

                            ))) : <div className='text-red-900 px-1'>No classes found for First year</div>
                        }


                    </div>

                    {/* Second year data */}
                    <div className='font-bold text-lg mt-6 mb-2 text-black px-1'>Second Year</div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                        {
                            second_year_subjects.length > 0 ? (second_year_subjects.map((value) => (

                                <div key={value.subject_id} className='min-h-[60px] p-2 text-sm flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black font-medium'>
                                    <div className='flex items-center gap-5'>
                                        <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.subject_alias}
                                        </span>
                                    </div>

                                    <div className='h-full flex items-center'>
                                        <SquarePen onClick={() => handle_overlay(value.subject_id)} className='hover:text-red-700 transition-all ' />
                                    </div>
                                </div>

                            ))) : <div className='text-red-900 px-1'>No classes found for First year</div>
                        }

                    </div>

                    {/* Third year data */}
                    <div className='font-bold text-lg mt-6 mb-2 text-black px-1'>Third Year</div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                        {
                            third_year_subjects.length > 0 ? (third_year_subjects.map((value) => (

                                <div key={value.subject_id} className='min-h-[60px] p-2 text-sm flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black font-medium'>
                                    <div className='flex items-center gap-5'>
                                        <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.subject_alias}
                                        </span>
                                    </div>

                                    <div className='h-full flex items-center'>
                                        <SquarePen onClick={() => handle_overlay(value.subject_id)} className='hover:text-red-700 transition-all ' />
                                    </div>
                                </div>

                            ))) : <div className='text-red-900 px-1'>No classes found for First year</div>
                        }


                    </div>


                    {/* Fourth year data */}
                    <div className='font-bold text-lg mt-6 mb-2 text-black px-1'>Fourth Year</div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                        {
                            fourth_year_subjects.length > 0 ? (fourth_year_subjects.map((value) => (

                                <div key={value.subject_id} className='min-h-[60px] p-2 text-sm flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black font-medium'>
                                    <div className='flex items-center gap-5'>
                                        <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.subject_alias}
                                        </span>
                                    </div>

                                    <div className='h-full flex items-center'>
                                        <SquarePen onClick={() => handle_overlay(value.subject_id)} className='hover:text-red-700 transition-all ' />
                                    </div>
                                </div>

                            ))) : <div className='text-red-900 px-1'>No classes found for First year</div>
                        }


                    </div>

                    <div className='font-bold text-lg mt-6 mb-2 text-black px-1'>Common Subject</div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>

                        {
                            common_year_subjects.length > 0 ? (common_year_subjects.map((value) => (

                                <div key={value.subject_id} className='min-h-[60px] p-2 text-sm flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black font-medium'>
                                    <div className='flex items-center gap-5'>
                                        <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.subject_alias}
                                        </span>
                                    </div>

                                    <div className='h-full flex items-center'>
                                        <SquarePen onClick={() => handle_overlay(value.subject_id)} className='hover:text-red-700 transition-all ' />
                                    </div>
                                </div>

                            ))) : <div className='text-red-900 px-1'>No classes found for First year</div>
                        }


                    </div>



                </div>
            </div>
        </div>
    )
}

export default Admin_EditSubject
