import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Description';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './Components/Home';
import {Signup} from './Components/Signup'
import {Profile} from './Components/Profile';
import {Login} from './Components/Login';
import {ForgotPassword} from './Components/ForgotPassword';
import {EditProfile} from './Components/EditProfile';
import MenuHomePage from './Components/Display_Menu/MenuHomePage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AppointmentForm from './Components/AppointmentForm';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/description" element={<Description />} />
        <Route path="/" element={<Login/>} />        
        <Route path="/home" element={<MenuHomePage/>} />
        {/* <Route path="/home" element={<MenuHomePage/>} /> */}
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/editProfile" element={<EditProfile/>} />
        <Route path="/appointmentform" element={<AppointmentForm/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
