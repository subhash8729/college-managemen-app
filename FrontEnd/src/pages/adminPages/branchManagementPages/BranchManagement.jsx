import React, { useEffect, useState } from 'react'
import { Loader, SquarePen } from 'lucide-react';
import { useAuthStore } from '../../../stores/useAuthStore';
import TopNavbar from '../../../components/managerComponents/TopNavbar';
import NavbarAdmin from '../../../components/adminComponents/NavbarAdmin';
import Sidebar from '../../../components/managerComponents/Sidebar';
import { useAdminStore } from '../../../stores/useAdminStore';
import Edit_branchPopUp from '../../../components/adminComponents/Edit_branchPopUp';
import { useUiStore } from '../../../stores/useUiStore';

//getting branch name( full name )


const Admin_branchManagement_edit_branches = () => {
    const [branch_id, setBranch_id] = useState("");
    const { isLoading } = useAuthStore();
    const { branches, getBranches } = useAdminStore();
    const {isPopUpOpened, setIsPopUpOpened} = useUiStore();
    const handle_change = () => {
        console.log("change handeling logics")
    }
    useEffect(() => {
        getBranches();
    }, []);
    
    const handle_overlay = (branchId)=>{
        setIsPopUpOpened(true);
        setBranch_id(branchId);
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
                {/* This is a Overlay based upon the state of open */}
                {
                    isPopUpOpened && <Edit_branchPopUp branch_id={branch_id} />   // here we are sending the value.branches_id only as a prop other data will be handled with help of global prop
                }

                <div className='w-full p-4 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40'>
                    <form onChange={handle_change} >

                        <div className='w-full grid gap-4 md:grid-cols-2'>
                            {
                                branches.length > 0 ? (branches.map((value, index) => (

                                    <div key={value.branches_id} className='min-h-[60px]  p-2 flex items-center justify-between bg-white/30 rounded-lg px-4 -tracking-tighter w-full text-black text-sm font-medium'>
                                        <div className='flex items-center gap-5'>
                                            <span className='h-full  px-4 rounded-sm py-1 bg-white/80'>{value.branch_name}
                                            </span>
                                        </div>

                                        <div className='h-full flex items-center'>
                                            <SquarePen onClick={() => { handle_overlay(value.branches_id) }} className='hover:text-red-700 transition-all ' />
                                        </div>
                                    </div>

                                ))) : <div className='text-red-900 px-1'>Branches not found</div>
                            }
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Admin_branchManagement_edit_branches;
