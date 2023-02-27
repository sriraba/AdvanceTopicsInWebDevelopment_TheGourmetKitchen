/**
 * Title: Home page
 * Author: Sri Ramya Basam
 * Date: 2023/02/15
 */
import React from "react";
import Header from './Header';
import Footer from './Footer';

const Home=()=>{
    return(
        <form>
            <Header></Header>
        <div>
        <h2>Welcome</h2>
        {/* <h3>First Name: {localStorage.getItem("firstname")}</h3>
        <h3>Last Name:  {localStorage.getItem("lastname")}</h3>
        <h3>Email:  {localStorage.getItem("email")}</h3> */}
        </div>
        <div style={{position: 'absolute', bottom: '0px', width: '100%'}} fullWidth> <Footer />  </div>
        </form>        
    )
}

export {Home};