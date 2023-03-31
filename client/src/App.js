import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Description from './js/Description';
import {Login} from './js/Login';
import {Signup} from './js/Signup';
import {Profile} from './js/Profile';
import {ForgotPassword} from './js/ForgotPassword';
import {EditProfile} from './js/EditProfile';
import AppointmentForm from './js/AppointmentForm';
import HomeScreen from "./js/Display_Menu/screens/HomeScreen";
import ProductScreen from "./js/Display_Menu/screens/ProductScreen";
import CartScreen from "./js/Display_Menu/screens/CartScreen";
import Navbar from './js/Display_Menu/components/Navbar';
import Cart from './js/Cart';
import {EmailVerification} from './js/EmailVerification';
import {VerifyCode} from './js/VerifyCode';
import SideDrawer from "./js/Display_Menu/components/SideDrawer";
import Backdrop from "./js/Display_Menu/components/Backdrop";
import { useState } from "react";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <BrowserRouter>
    <Navbar click={() => setSideToggle(true)} />
    <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
    <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
    <Routes>
        <Route path="/description" element={<Description />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/appointmentform" element={<AppointmentForm />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/menuItems/:id" element={<ProductScreen /> } />
        <Route path="/cart" element={<CartScreen /> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collectemail" element={<EmailVerification />} />
        <Route path="/verifycode" element={<VerifyCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
