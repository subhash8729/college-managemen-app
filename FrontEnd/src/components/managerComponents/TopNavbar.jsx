import React from 'react'
import {MenuIcon} from "lucide-react"
import { useUiStore } from '../../stores/useUiStore'

const TopNavbar = () => {
  const  {isMenuOpened,setIsMenuOpened} = useUiStore();
  return (
    <div className='w-full h-[50px] bg-blue-900 justify-between px-6'>
        <MenuIcon onClick={()=>setIsMenuOpened(true)} className='text-white h-full' />
    </div>
  )
}

export default TopNavbar