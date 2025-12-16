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
import Admin_EditClasses from './pages/adminPages/classManagement/EditClasses'
import Home_hodPage from './pages/hodPages/Home_hodPage'
import Admin_subjectManagement from './pages/adminPages/SubjectManagement'
import Admin_employeesManagement from './pages/adminPages/EmployeeManagement_admin'
import Admin_AddClass from './pages/adminPages/classManagement/AddClass'
import Admin_addEmployees from './pages/adminPages/emplyeesManagement/Add_employee_admin'
import Admin_editEmployees from './pages/adminPages/emplyeesManagement/Edit_employee_admin'
import Admin_timetableManagement_home from './pages/adminPages/TimeTable_management_home'
import Admin_TimeTable_slots from './pages/adminPages/timetable_management_pages/TimeTable_slots_Admin'
import NotFound404 from './pages/NotFound'
import Admin_branchManagement_home from './pages/adminPages/BranchManagement'
import Admin_branchManagement_add_branch from './pages/adminPages/branchManagementPages/AddBranch'
import Admin_branchManagement_edit_branches from './pages/adminPages/branchManagementPages/BranchManagement'
import { useAdminStore } from './stores/useAdminStore'
import AddSubject from './pages/adminPages/subjectManagement/AddSubject'
import Admin_EditSubject from './pages/adminPages/subjectManagement/EditSubject'
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
      <Route path='/admin/class-management/add-class' element={<Admin_AddClass />}/>               
      <Route path='/admin/class-management/edit-class' element={<Admin_EditClasses />}/>    

      <Route path='/admin/employees-management' element={<Admin_employeesManagement />}/>  
      <Route path='/admin/employees-management/add-employees' element={<Admin_addEmployees />}/>  
      <Route path='/admin/employees-management/edit-employees' element={<Admin_editEmployees />}/>  

      <Route path='/admin/branch-management' element={<Admin_branchManagement_home />}/>  
      <Route path='/admin/branch-management/add-branch' element={<Admin_branchManagement_add_branch />}/>  
      <Route path='/admin/branch-management/edit-branches' element={<Admin_branchManagement_edit_branches />}/>  

      <Route path='/admin/timetable-management' element={<Admin_timetableManagement_home />}/>  
      <Route path='/admin/timetable-management/time-slot-setup' element={< Admin_TimeTable_slots />}/>  
      
      <Route path='/admin/subject-management' element={<Admin_subjectManagement />}/>  
      <Route path='/admin/subject-management/add-subject' element={<AddSubject />}/>  
      <Route path='/admin/subject-management/edit-subject' element={<Admin_EditSubject />}/>  

      <Route path='/hod' element={<Home_hodPage />}/>               
      <Route path='*' element={<NotFound404 />}/>               
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App