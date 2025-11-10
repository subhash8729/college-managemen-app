import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WhyThisApp from './components/Whythisapp'
import Guide from './pages/Guide'
import Comingsoon from './pages/Comingsoon'
import { useAuthStore } from './stores/useAuthStore'
import StudentPage from './pages/StudentPage'
import { ManagerPage } from './pages/ManagerPage'
import DashboardHomepage from './pages/Home.manager'
import Home2 from './pages/Home2'
const App = () => {
 
  // let token = localStorage.getItem("token");
  // setIsLoading(true);
  // if(token){
  //   setIsLoading(true);
  // }

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/why' element={ <WhyThisApp />}/>
      <Route path='/guide' element={<Guide />}/>
      <Route path='/important' element={<Comingsoon />}/>
      <Route path='/student' element={<StudentPage />}/>
      <Route path='/manager' element={<DashboardHomepage />}/>
      <Route path='/manager/upload-important-info' element={<ManagerPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App