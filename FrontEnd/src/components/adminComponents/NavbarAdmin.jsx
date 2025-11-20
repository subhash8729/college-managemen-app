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


}

export default NavbarAdmin