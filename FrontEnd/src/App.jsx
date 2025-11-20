import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WhyThisApp from './components/managerComponents/Whythisapp'
import Guide from './pages/managerPages/Guide'
import Comingsoon from './pages/managerPages/Important_info'
import { useAuthStore } from './stores/useAuthStore'
import StudentPage from './pages/managerPages/StudentPage'
import DashboardHomepage from './pages/managerPages/Home.manager'
import { useUiStore } from './stores/useUiStore'
import { Upload_important_info } from './pages/managerPages/UploadImp.manager'
import { Toaster } from 'react-hot-toast';
import Admin_home from './pages/adminPages/Home.admin'
import Admin_classManagement from './pages/adminPages/ClassManagement'
import Admin_AddStudent from './pages/adminPages/classManagement/AddStudent'
import Admin_EditClasses from './pages/adminPages/classManagement/EditClasses'
const App = () => {

  useEffect(()=>{
    document.body.style.overflowX ="hidden";
  },[])

  return (
    <>
    <Toaster />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/why' element={ <WhyThisApp />}/>
      <Route path='/guide' element={<Guide />}/>
      <Route path='/important' element={<Comingsoon />}/>
      <Route path='/student' element={<StudentPage />}/>
      <Route path='/manager' element={<DashboardHomepage />}/>
      <Route path='/manager/upload-important-info' element={<Upload_important_info />}/>
      <Route path='/admin' element={<Admin_home />}/>               
      <Route path='/admin/class-management' element={<Admin_classManagement />}/>               
      <Route path='/admin/class-management/add-class' element={<Admin_AddStudent />}/>               
      <Route path='/admin/class-management/edit-class' element={<Admin_EditClasses />}/>               
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App