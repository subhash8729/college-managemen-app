import React from 'react'
import { Link } from 'react-router-dom'
import { useMenuStore } from '../stores/useUiStore'

const NavbarManager = () => {
    const {setSelectedMenu , selectedMenu} = useMenuStore();

  return (
    <div>
        {/* navbar */}
      <div className='w-full bg-[#3E4CB1] h-auto px-8 py-5 text-white flex flex-wrap gap-6 content-start'>
        <Link onClick={()=>{setSelectedMenu(0)}} to={"/manager"} className={`${selectedMenu==0? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Home</ Link>
        <Link onClick={()=>{setSelectedMenu(1)}} to={"/manager/upload-important-info"}  className={`${selectedMenu==1? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Upload important info.</ Link>
        <Link onClick={()=>{setSelectedMenu(2)}}  className={`${selectedMenu==2? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >coming soon</ Link>
        <Link onClick={()=>{setSelectedMenu(3)}}  className={`${selectedMenu==3? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >coming soon</ Link>
      </div>
    </div>
  )
}

export default NavbarManager