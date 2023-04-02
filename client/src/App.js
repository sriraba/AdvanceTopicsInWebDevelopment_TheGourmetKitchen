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
import {EmailVerification} from './js/EmailVerification';
import {VerifyCode} from './js/VerifyCode';

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/collectemail" element={<EmailVerification />} />
        <Route path="/verifycode" element={<VerifyCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
