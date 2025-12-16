import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../stores/useAuthStore';
import { Loader } from 'lucide-react';
import { useAdminStore } from '../../stores/useAdminStore';
import { useUiStore } from '../../stores/useUiStore';

const Popup_classEdit = (branch_id) => {
    const { isLoading } = useAuthStore();
    const [branchObject, setBranchObject] = useState({});
    const [branch_alias, setBranch_alias] = useState(null);

    const { isPopUpOpened, setIsPopUpOpened } = useUiStore();
    const { updateBranchData, branches, get_branches_details, branches_details } = useAdminStore();
    const [formData, setFormData] = useState({
        branches_id: "",
        branches_alias: ""
    })


    //     useEffect(() => {
    //     const m = data[indexNumber]
    //     setMain_object(m)
    //     const d = branches_details.filter(value=> value.branches_id == m.branches_id)
    //     setDetails_object(d[0])
    //     setFormData(prev=>({...prev,branches_id:m.branches_id}))
    // }, []);


    useEffect(() => {
        get_branches_details();
        setBranchObject(branches.filter(value => value.branches_id == branch_id.branch_id)[0]);
    }, [])

    useEffect(() => {
        const particular_details_object_array = branches_details.filter(value => value.branches_id == branch_id.branch_id);
        setBranch_alias(particular_details_object_array[0] || "");
        console.log("branches details are",branches_details)
    }, [branches_details]);



    const handle_change = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handle_submit = (e) => {
        e.preventDefault();
        console.log(formData);
        formData.branches_alias = e.target.branches_alias.value;
        formData.branches_id = branch_id.branch_id;
        formData.branches_seats = e.target.branches_seats.value;
        formData.branches_desc = e.target.branches_desc.value;
        updateBranchData(formData);
    }
    return (

        <div
            className={`fixed top-0 p-4 z-2 left-0 w-screen h-screen backdrop-blur-2xl bg-black/50

        ${open ? "block" : "none"}`}
        >
            {
                isLoading && (<div className='w-full h-screen top-0 left-0 fixed z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
                    <Loader className='scale-300 animate-spin' />

                </div>)
            }
            {/* INNER POPUP BOX */}
            <div className='w-full h-full' >

                <p className='text-2xl p-2 text-white/90 tracking-wide font-extrabold'>Branch Management</p>
                <form onChange={handle_change} onSubmit={handle_submit}>
                    <div className='grid gap-3 md:grid-cols-2'>
                        <div>
                            <p className='text-2xl p-2 text-white/90 tracking-wide font-medium'>Branch Name</p>
                            <div className='h-[40px] cursor-not-allowed flex items-center bg-black/40 rounded-lg px-4 -tracking-tighter w-full text-white/30 text-md font-medium'> {branchObject?.branch_name || ""} </div>
                        </div>

                        <div>
                            <p className='text-2xl p-2 text-white/90 tracking-wide font-medium'>Branch Alias</p>
                            <input className='h-[40px] flex items-center bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-md font-medium' type='text' defaultValue={branch_alias?.branches_alias || ""} name="branches_alias" id="year" />
                        </div>
                        <div>
                            <p className='text-2xl p-2 text-white/90 tracking-wide font-medium'>Branch Code</p>
                            <div className='h-[40px] flex items-center bg-black/40 rounded-lg px-4 -tracking-tighter w-full cursor-not-allowed text-white/30 text-md font-medium' name="branches_code" id="year">{branch_alias?.branches_id || ""} </div>
                        </div>
                        <div>
                            <p className='text-2xl p-2 text-white/90 tracking-wide font-medium'>Available Seats</p>
                            <input className='h-[40px] flex items-center bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-md font-medium' type='number' defaultValue={branch_alias?.branch_seats || ""} name="branches_seats" id="year" />
                        </div>
                        <div>
                            <p className='text-2xl p-2 text-white/90 tracking-wide font-medium'>Description</p>
                            <textarea className='h-[80px] flex items-center bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-md font-medium' type='text' maxLength={150} defaultValue={branch_alias?.branch_desc || ""} name="branches_desc" id="year" />
                        </div>

                    </div>

                    <div className='flex gap-6'>
                        <button
                            type='submit'
                            className="mt-8 px-4 py-3 bg-red-500 text-white rounded-lg">
                            Update Data
                        </button>

                        <button
                            type='button'
                            onClick={() => setIsPopUpOpened(false)}
                            className="mt-8 px-4 py-3 bg-red-500 text-white rounded-lg">
                            close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Popup_classEdit