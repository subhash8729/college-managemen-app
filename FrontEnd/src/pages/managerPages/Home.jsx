import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../css_files/home.css"
import Navbar from '../../components/managerComponents/Navbar.jsx'
import axiosInstance from "../../functions/axios.js"
import { useAuthStore } from '../../stores/useAuthStore.js'
import { Loader } from 'lucide-react'
import TopNavbar from '../../components/managerComponents/TopNavbar.jsx'
import Sidebar from '../../components/managerComponents/Sidebar.jsx'

const Home = () => {
  const { isLoading, setAuthUser, setIsLoading, authUser } = useAuthStore();
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
    setIsLoading(true)
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      setIsLoading(false)
      setAuthUser(res.data);
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token)
      navigate(`/${res.data.role}`)
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }


    //making a auth req to server
    //if server responds with bad response, show error to user
    //if server set authUser value
  }

  return (
    <div className='relative'>
      {
        isLoading && (<div className='w-full h-screen absolute z-20 bg-white/20 backdrop-blur-[5px] flex items-center justify-center'>
          <Loader className='scale-300 animate-spin' />
        </div>)
      }
      <TopNavbar />
      <Navbar />
      <Sidebar />

      <div className='w-full flex px-3 flex-col bg-blue-400/20'>
        {/* college info */}
        <div className='w-full py-5 mt-3 rounded-lg'>
          <div className='image w-[150px] mx-auto h-[150px] mt-3 rounded-full bg-red-400' ></div>
          <div className='text-center font-bold text-2xl mt-4'>Arya College Of Engineering and I.T.</div>
        </div>

        {/* Login details */}
        <form onSubmit={handle_submit} onChange={handle_change} autoComplete='off'>
          <div className='w-full my-3 rounded-lg flex flex-col bg-blue-400/10'>
            <div className='mx-auto flex'>
              <span className='bg-black/30 rounded-b-2xl font-bold px-4 py-3'>Log In</span>
            </div>

            <div className='mt-5 flex flex-col'>
              <div className='mx-auto'>
                <p>You are a</p>
                <select className='border-2 border-black/40 rounded-2xl px-4 py-2 w-[300px]' name="role" id="role">
                  <option value="none">-  -  -  -  -  -  -  - Select Role -  -  -  -  -  -  -  -</option>
                  <option value="student">Student</option>
                  <option value="manager">Manager</option>
                  <option value="principal">Principal</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
              <div className='mx-auto mt-5'>
                <p>Username</p>
                <input className='border-2 border-black/40 rounded-2xl px-4 py-2 w-[300px]' name='username' type="text" placeholder='Enter username' />
              </div>
              <div className='mx-auto mt-5'>
                <p>Password</p>
                <input className='border-2 border-black/40 rounded-2xl px-4 py-2 w-[300px]' name='password' type="password" placeholder='Enter password' />
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