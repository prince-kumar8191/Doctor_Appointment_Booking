import React from 'react'
import Login from './pages/login';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';

import { AdminContext } from './constext/AdminContext';
import NavBar from './components/navBar';
import SideBar from './components/side_bar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import Appointments from './pages/admin/Appointments';
import DoctorList from './pages/admin/DoctorList';
import AddDoctor from './pages/admin/adddoctor';


const App = () =>{

  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]'>
       <ToastContainer/>
       <NavBar />
       <div className='flex items-start'>
        <SideBar/>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard/>} />
          <Route path='/all-appointments' element={<Appointments/>} />
          <Route path='/add-doctor' element={<AddDoctor/>} />
          <Route path='/doctor-list' element={<DoctorList/>} />
        </Routes>
       </div>
       
    </div>
  ) : (
    <>
       <Login />
       <ToastContainer />
    </>
  )

}
export default App;