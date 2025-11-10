import React from 'react'
import { Link } from 'react-router-dom'
import { useMenuStore } from '../stores/useUiStore'

const NavbarStudent = () => {
    const {setSelectedMenu , selectedMenu} = useMenuStore();

  return (
    <div>
        {/* navbar */}
      <div className='w-full fixed z-10 bg-[#3E4CB1] h-auto px-8 py-5 text-white flex flex-wrap gap-6 content-start'>
        <Link onClick={()=>{setSelectedMenu(0)}} to={"/"} className={`${selectedMenu==0? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Events</ Link>
        <Link onClick={()=>{setSelectedMenu(1)}} to={"/why"} className={`${selectedMenu==1? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Attendance</ Link>
        <Link onClick={()=>{setSelectedMenu(2)}} to={"/guide"} className={`${selectedMenu==2? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Compolsory</ Link>
        <Link onClick={()=>{setSelectedMenu(3)}} to={"/important"} className={`${selectedMenu==3? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Calendar</ Link>
        <Link onClick={()=>{setSelectedMenu(3)}} to={"/important"} className={`${selectedMenu==3? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Fees</ Link>
        <Link onClick={()=>{setSelectedMenu(3)}} to={"/important"} className={`${selectedMenu==3? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >Time Table</ Link>
        <Link onClick={()=>{setSelectedMenu(3)}} to={"/important"} className={`${selectedMenu==3? "bg-amber-800 -translate-y-1 scale-110": "bg-black"} hover:scale-110 cursor-pointer hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg`} >New</ Link>
      </div>
      <div className='w-full bg-[#3E4CB1] h-auto px-8 py-5 text-white flex flex-wrap gap-6 content-start'>
        <div className='bg-black hover:scale-110 hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg ' >Home</ div>
        <div className='bg-black hover:scale-110 hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg ' >Why This App?</ div>
        <div className='bg-black hover:scale-110 hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg ' >Guide me</ div>
        <div className='bg-black hover:scale-110 hover:bg-amber-300/40 hover:-translate-y-1 duration-300 px-4 py-2 rounded-lg ' >Important info</ div>
      </div>
    </div>
  )
}

export default NavbarStudent