import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/managerPages/Home'
import WhyThisApp from './components/managerComponents/Whythisapp'
import Guide from './pages/managerPages/Guide'
import Comingsoon from './pages/managerPages/comingsoon'
import { useAuthStore } from './stores/useAuthStore'
import StudentPage from './pages/managerPages/StudentPage'
import DashboardHomepage from './pages/managerPages/Home.manager'
import { useUiStore } from './stores/useUiStore'
import { Upload_important_info } from './pages/managerPages/UploadImp.manager'
const App = () => {
 
   const  {isMenuOpened} = useUiStore();
   useEffect(()=>{
    console.log("is menu opened",isMenuOpened)
   },[isMenuOpened])

  useEffect(()=>{
    document.body.style.overflowX ="hidden";
  },[])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/why' element={ <WhyThisApp />}/>
      <Route path='/guide' element={<Guide />}/>
      <Route path='/important' element={<Comingsoon />}/>
      <Route path='/student' element={<StudentPage />}/>
      <Route path='/manager' element={<DashboardHomepage />}/>
      <Route path='/manager/upload-important-info' element={<Upload_important_info />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App