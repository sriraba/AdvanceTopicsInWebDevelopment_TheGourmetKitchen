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
import Header from './js/Header';
import Navbar from './js/Display_Menu/components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
