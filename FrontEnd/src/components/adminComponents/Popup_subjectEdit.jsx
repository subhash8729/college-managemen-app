import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../stores/useAuthStore';
import { Loader } from 'lucide-react';
import { useAdminStore } from '../../stores/useAdminStore';
import { useUiStore } from '../../stores/useUiStore';
import { Toaster } from 'react-hot-toast';

const Popup_subjectEdit = (subject_id) => {
    const { isLoading } = useAuthStore();
    const [subjectObject, setSubjectObject] = useState({});
    const { setIsPopUpOpened } = useUiStore();
    const { update_subject, subjects, getSubjects } = useAdminStore();
    const [formData, setFormData] = useState({})

    //     useEffect(() => {
    //     const m = data[indexNumber]
    //     setMain_object(m)
    //     const d = branches_details.filter(value=> value.branches_id == m.branches_id)
    //     setDetails_object(d[0])
    //     setFormData(prev=>({...prev,branches_id:m.branches_id}))
    // }, []);


    useEffect(() => {
        setSubjectObject(subjects.filter(value => value.subject_id == subject_id.subject_id)[0]);
    }, [])

    const handle_change = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handle_submit = (e) => {
        e.preventDefault();
        formData.subject_alias = e.target.subject_alias.value;
        formData.subject_id = subject_id.subject_id;
        formData.subject_year = e.target.subject_year.value;
        update_subject(formData);
        getSubjects();
    }
    return (
        <div
            className='fixed top-0 p-4 z-2 left-0 w-screen h-screen backdrop-blur-2xl bg-black/50'>
            {
                isLoading && (<div className='w-full h-screen top-0 left-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                    <Loader className='scale-300 animate-spin' />
                </div>)
            }
            {/* INNER POPUP BOX */}
            <div className='w-full h-full' >

                <p className='text-2xl p-2 text-white/90 tracking-wide font-extrabold'>Subject Management</p>
                <form onChange={handle_change} onSubmit={handle_submit}>
                    <div className='grid gap-3 md:grid-cols-2'>
                        <div>
                            <p className='text-2xl p-2 text-white/90 tracking-wide font-medium'>Subject Name</p>
                            <div className='h-[40px] cursor-not-allowed flex items-center bg-black/40 rounded-lg px-4 -tracking-tighter w-full text-white/30 text-md font-medium'> {subjectObject?.subject_name || ""} </div>
                        </div>

                        <div>
                            <p className='text-2xl p-2 text-white/90 tracking-wide font-medium'>Subject Alias</p>
                            <input className='h-[40px] flex items-center bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-md font-medium' type='text' defaultValue={subjectObject?.subject_alias || ""} name="subject_alias" id="year" />
                        </div>
                        <div>
                            <p className='text-2xl p-2 text-white/90 tracking-wide font-medium'>Subject Code</p>
                            <div className='h-[40px] flex items-center bg-black/40 rounded-lg px-4 -tracking-tighter w-full cursor-not-allowed text-white/30 text-md font-medium' name="subject_code" id="year">{subjectObject?.subject_id || ""} </div>
                        </div>
                        {
                            subjectObject?.subject_year &&
                            <div>
                                <p className='text-2xl p-2 text-white/90 tracking-wide font-medium'>Year of Study</p>
                                <select defaultValue={subjectObject.subject_year || ""} className='h-[40px] bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-md font-medium' name="subject_year" id="syear">
                                    <option value="first_year">1st Year</option>
                                    <option value="second_year">2nd Year</option>
                                    <option value="third_year">3rd Year</option>
                                    <option value="fourth_year">4th Year</option>
                                    <option value="common">common subject</option>
                                </select>
                            </div>
                        }

                    </div>

                    <div className='flex gap-6'>
                        <button
                            type='submit'
                            className="mt-8 px-4 py-3 bg-green-700 text-white rounded-lg">
                            Update Data
                        </button>

                        <button
                            type='button'
                            className="mt-8 px-4 py-3 bg-red-500 text-white rounded-lg">
                            Delete Subject
                        </button>

                        <button
                            type='button'
                            onClick={() => setIsPopUpOpened(false)}
                            className="mt-8 px-4 py-3 bg-green-700 text-white rounded-lg">
                            close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Popup_subjectEdit