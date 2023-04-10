import "./App.css";
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./js/Description";
import { Login } from "./js/Login";
import { Signup } from "./js/Signup";
import { Profile } from "./js/Profile";
import { ForgotPassword } from "./js/ForgotPassword";
import { EditProfile } from "./js/EditProfile";
import AppointmentForm from "./js/AppointmentForm";
import HomeScreen from "./js/Display_Menu/screens/HomeScreen";
import ProductScreen from "./js/Display_Menu/screens/ProductScreen";
import CartScreen from "./js/Display_Menu/screens/CartScreen";
import { EmailVerification } from "./js/EmailVerification";
import { VerifyCode } from "./js/VerifyCode";
import ApiAuthentication from "./js/ApiAuthentication";
import AuthenticateRoute from "./js/AuthenticateRoute";
import Payment from "./js/Payment/Payment";

function App() {
  const [auth, setAuth] = useState(false);
  const authApi = useContext(ApiAuthentication);
  return (
    <BrowserRouter>
      <ApiAuthentication.Provider value={{ auth, setAuth }}>
        <Routes>
          <Route path="/description" element={<Description />} />
          <Route path="/" element={<Login />} />
          <Route element={<AuthenticateRoute />}>
            <Route element={<HomeScreen />} path="/home" exact />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/appointmentform" element={<AppointmentForm />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/menuItems/:id" element={<ProductScreen />} />
          <Route path="/collectemail" element={<EmailVerification />} />
          <Route path="/verifycode" element={<VerifyCode />} />
        </Routes>
      </ApiAuthentication.Provider>
    </BrowserRouter>
  );
}

export default App;
