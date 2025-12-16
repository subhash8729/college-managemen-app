import React from 'react'
import { Link } from 'react-router-dom'
import { useUiStore } from '../../stores/useUiStore'

const NavbarAdmin = ({ props }) => {
    const { setSelectedMenu, selectedMenu } = useUiStore();
    React.useEffect(() => {
        setSelectedMenu(0);
    }, [])

    //for admin Home
    if (props == "home") return (
        <div>
            {/* navbar */}
            <div className='w-full bg-[#3E4CB1] h-auto px-8 py-5 text-white flex flex-wrap gap-6 content-start'>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Home</ Link>
            </div>
        </div>
    )

    //for admin Class management
    else if (props == "classManagement") return (
        <div>
            {/* navbar */}
            <div className='w-full bg-[#3E4CB1] h-auto px-8 py-5 text-white flex flex-wrap gap-6 content-start'>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/class-management/add-class"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Add class</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/class-management/add-class"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >View Classes</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/class-management/edit-class"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Edit Classes</ Link>
            </div>
        </div>
    )

    // Subject management - Admin
    else if (props == "subjectManagement") return (
        <div>
            {/* navbar */}
            <div className='w-full bg-[#3E4CB1] h-auto px-8 py-5 text-white flex flex-wrap gap-6 content-start'>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/subject-management/add-subject"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Add a new Subject</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/subject-management/edit-subject"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Edit Subjects</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/class-management/edit-class"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} > . . . . . </ Link>
            </div>
        </div>
    )

    //Employees management - Admin
    else if (props == "employeesManagement") return (
        <div>
            {/* navbar */}
            <div className='w-full bg-[#3E4CB1] h-auto px-8 py-5 text-white flex flex-wrap gap-6 content-start'>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/employees-management/add-employees"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Add a new Employee</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/employees-management/edit-employees"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Edit Employees</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/class-management/edit-class"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} > . . . . . </ Link>
            </div>
        </div>
    )

    //Time-table management - Admin
    else if (props == "timetableManagement") return (
        <div>
            {/* navbar */}
            <div className='w-full bg-[#3E4CB1] h-auto px-8 py-5 text-white flex flex-wrap gap-6 content-start'>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/employees-management/add-employees"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Time Slot Setup</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/employees-management/edit-employees"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Time-Table Enteries</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/class-management/edit-class"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} > . . . . . </ Link>
            </div>
        </div>
    )
    else if (props == "branchManagement") return (
        <div>
            {/* navbar */}
            <div className='w-full bg-[#3E4CB1] h-auto px-8 py-5 text-white flex flex-wrap gap-6 content-start'>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/branch-management/add-branch"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Add a new Branch</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/branch-management/edit-branches"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Manage Branches</ Link>
                <Link onClick={() => { setSelectedMenu(0) }} to={"/admin/class-management/edit-class"} className={`${selectedMenu == 0 ? "bg-amber-800 -translate-y-1 scale-110" : "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} > . . . . . </ Link>
            </div>
        </div>
    )


}

export default NavbarAdmin