import React, { useEffect } from 'react'
import { useUiStore } from '../../stores/useUiStore'

const Sidebar = ({props}) => {
    const {isMenuOpened,setIsMenuOpened} = useUiStore();
    
// for students
  if(props=="student")
  return (
    <div className={`${isMenuOpened? "w-full":"w-0"}`+' z-4 flex duration-300 h-screen overflow-hidden fixed transition-all top-0 left-0'}>
        
        <div className={`${isMenuOpened? "w-[200px] p-3 md:w-[400px]":"w-0"} text-white transition-all duration-300 top-0 left-0 bg-[#0f0656] h-screen`}>
        
        <div className='p-4 my-1 rounded-lg bg-blue-900'>Main</div>
        <div className='p-4 my-1 rounded-lg bg-blue-900'>Student Corner</div>

        </div>

        <div onClick={()=>{setIsMenuOpened(false)}} className='flex-1 h-full'>
          {/* it is a div for adding side click to hide sidebar functionality */}
        </div>
    </div>
  )

  // for manager
  else if(props=="manager")
  return (
    <div className={`${isMenuOpened? "w-full":"w-0"}`+' z-4 flex duration-300 h-screen z-999 overflow-hidden fixed transition-all top-0 left-0'}>
        
        <div className={`${isMenuOpened? "w-[200px] p-3 md:w-[400px]":"w-0"} text-white transition-all duration-300 top-0 left-0 bg-[#0f0656] h-screen`}>
        
        <div className='p-4 my-1 rounded-lg bg-blue-900'>Main</div>
        <div className='p-4 my-1 rounded-lg bg-blue-900'>Profile</div>

        </div>

        <div onClick={()=>{setIsMenuOpened(false)}} className='flex-1 h-full'>
          {/* it is a div for adding side click to hide sidebar functionality */}
        </div>
    </div>
  )

  // else
  else
  return (
    <div className={`${isMenuOpened? "w-full":"w-0"}`+' z-4 flex duration-300 h-screen overflow-hidden fixed transition-all top-0 left-0'}>
        
        <div className={`${isMenuOpened? "w-[200px] p-3 md:w-[400px]":"w-0"} text-white transition-all duration-300 top-0 left-0 bg-[#0f0656] h-screen`}>
        
        <div className='p-4 my-1 rounded-lg bg-blue-900'>Main</div>
        <div className='p-4 my-1 rounded-lg bg-blue-900'>Go back</div>

        </div>

        <div onClick={()=>{setIsMenuOpened(false)}} className='flex-1 h-full'>
          {/* it is a div for adding side click to hide sidebar functionality */}
        </div>
    </div>
  )
}

export default Sidebar