/**
 * Title: One Time Password Verification For Forgot password 
 * Author: Sri Ramya Basam
 * Date: 2023/02/20
 * Reference: https://mui.com/material-ui/getting-started/overview/,
 * https://levelup.gitconnected.com/how-to-create-a-navigation-bar-with-material-ui-9cbcfcec2570
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField,Tab } from "@mui/material";
import axios from "axios";
import { NavLink } from "react-router-dom";

const VerifyCode = () => {
  const backGroundStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };
  const buttonstyle = { margin: "9px 0" };
  const [code, setCode] = useState("");
  const navigatePage = useNavigate();

  // backend call to validate OTP
  const onSubmit = (event) => {
    event.preventDefault();
    // const api = "http://localhost:5000/api/users/validCode";
    const api = "https://the-gourmet-kitchen.onrender.com/api/users/validCode";   
    const userinfo = {
      email: localStorage.getItem("email"),
      code: code,
    };
    console.log(userinfo);

    axios
      .post(api, userinfo)
      .then((response) => {
        console.log(response);
        navigatePage("/ForgotPassword");
      })
      .catch((error) => {
        alert(error.response.data.message);
        window.location.reload();
        navigatePage("/");
      });
    //    if (email === repassword) {
    //         alert("Password changed successfully");
    //         navigatePage('/')
    //     }
    //     else {
    //         alert("Passwords should match");
    //         window.location.reload();
    //         navigatePage('/ForgotPassword')
    //     }
  };
  return (
    // form to enter OTP
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(images/food.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <form onSubmit={onSubmit}>
      <Grid>
        <Paper elevation={8} style={backGroundStyle}>

          
          <Tab label="Enter code sent to your email" />
          <img
            src="images/logo.png"
            style={{ height: "30%", width: "100%" }}
            alt="logo"
          />
          <br></br>      <br></br>
          <TextField
            label="Code"
            placeholder="Enter code"
            type="code"
            fullWidth
            required
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={buttonstyle}
            fullWidth
          >
            SUBMIT
          </Button>
          <br></br> 
          <NavLink className="navbar-item" activeClassName="is-active" to="/">
            {" "}
            Exit
          </NavLink>
        </Paper>
      </Grid>
    </form>
    </Grid>
    </Grid>
  );
};

export { VerifyCode };
