import { Loader } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full flex items-center bg-white/20 backdrop-blur-2xl justify-center h-screen'>
        <Loader />
    </div>
  ) 
}

export default Loading