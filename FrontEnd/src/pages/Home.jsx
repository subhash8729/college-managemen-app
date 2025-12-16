import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css_files/home.css"
import Navbar from '../components/managerComponents/Navbar.jsx'
import axiosInstance from "../functions/axios.js"
import { useAuthStore } from '../stores/useAuthStore.js'
import { Loader } from 'lucide-react'
import TopNavbar from '../components/managerComponents/TopNavbar.jsx'
import Sidebar from '../components/managerComponents/Sidebar.jsx'

const Home = () => {
  const { isLoading, setAuthUser, setIsLoading, authUser, login} = useAuthStore();
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setIsLoading(true)
      const data = {
        token: localStorage.getItem("jwt")
      }
      axiosInstance.post("/check-auth", data)
    }


  }, [])
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: ""
  });

  const handle_change = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handle_submit = async (e) => {
    e.preventDefault();
    //here just login(formdata) have to be called
    
    //here just login(formdata) have to be called
    const result = await login(formData);
    if(result) navigate(`/${result}`)

    //making a auth req to server
    //if server responds with bad response, show error to user
    //if server set authUser value
     
    
  }

  return (
    <div className='relative w-full min-h-screen bg-gradient-to-br from-[#10172C] via-[#453181] to-[#3B1C63]'>
      {
        isLoading && (<div className='w-full h-screen fixed z-20 bg-white/10 backdrop-blur-[5px] flex items-center justify-center'>
          <Loader className='scale-300 animate-spin' />
        </div>)
      }
      <TopNavbar />
      <Navbar />
      <Sidebar />

      <div className='w-full flex px-3 flex-col bg-blue-400/20'>
        {/* college info */}
        <div className='w-full py-5 mt-3 rounded-lg'>
          <div className='image w-[150px] mx-auto h-[150px] mt-3' ></div>
          <div className='text-center font-bold text-2xl mt-4'>Arya College Of Engineering and I.T.</div>
        </div>

        {/* Login details */}
        <form onSubmit={handle_submit} onChange={handle_change} autoComplete='off'>
          <div className='w-full my-3 rounded-lg flex flex-col bg-blue-400/10'>
            <div className='mx-auto flex'>
              <span className='bg-white/40 rounded-b-2xl font-bold px-4 py-3'>Log In</span>
            </div>

            <div className='mt-2 flex flex-col'>
              <div className='mx-auto'>
                <p className='font-bold text-lg text-white px-1'>You are a</p>
                <select className='border-2 border-black/40 bg-white rounded-2xl px-4 py-2 w-[300px]' name="role" id="role">
                  <option value="none">-  -  -  -  -  -  -  - Select Role -  -  -  -  -  -  -  -</option>
                  <option value="student">Student</option>
                  <option value="manager">Manager</option>
                  <option value="principal">Principal</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                  <option value="hod">Head of Departmet</option>
                </select>
              </div>
              <div className='mx-auto mt-5'>
                <p className='font-bold text-lg text-white px-1'>Username</p>
                <input className='border-2 border-black/40 focus:outline-none focus:shadow-lg focus:scale-105 transition-all bg-white rounded-2xl px-4 py-2 w-[300px]' name='username' type="text" placeholder='Enter username' />
              </div>
              <div className='mx-auto mt-5'>
                <p className='font-bold text-lg text-white px-1'>Password</p>
                <input className='border-2 border-black/40 focus:outline-none focus:shadow-lg focus:scale-105 transition-all bg-white rounded-2xl px-4 py-2 w-[300px]' name='password' type="password" placeholder='Enter password' />
              </div>
              <div className='flex text-white justify-center my-4'>
                <button className='px-4 py-2 cursor-pointer rounded-lg bg-[#1F3E18]'>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* footer */}

      <footer className="w-full bg-gray-900 text-gray-400 text-sm py-3 text-center">
        © {new Date().getFullYear()} MyCollegeApp · All rights reserved
      </footer>

    </div>
  )
}

export default Home