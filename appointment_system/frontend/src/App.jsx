import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Doctors from "./pages/doctor";
import Login from "./pages/login";
import About from "./pages/about";
import Contact from "./pages/contact";
import MyProfile from "./pages/my_profile";
import Myappointment from "./pages/my_appointment";
import Appointment from "./pages/appointment";
import NavBar from "./components/nav_bar";
import Footer from "./components/footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () =>{
  return(
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/doctors" element={<Doctors/>} /> 
        <Route path="/doctors/:speciality" element={<Doctors/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/myprofile" element={<MyProfile/>} />
        <Route path="/myappointment" element={<Myappointment/>} /> 
        <Route path="/appointment/:docId" element={<Appointment/>} />  
      </Routes>
      <Footer/>
     
    </div>
  )
}
export default App;