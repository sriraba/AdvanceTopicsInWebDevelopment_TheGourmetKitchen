/**
 * Title: One Time Password Verification For Forgot password 
 * Author: Sri Ramya Basam
 * Date: 2023/02/20
 * Reference: https://mui.com/material-ui/getting-started/overview/,
 * https://levelup.gitconnected.com/how-to-create-a-navigation-bar-with-material-ui-9cbcfcec2570
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField } from "@mui/material";
import axios from "axios";

const VerifyCode = () => {
  const backGroundStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
  };
  const buttonstyle = { margin: "9px 0" };
  const [code, setCode] = useState("");
  const navigatePage = useNavigate();

  // backend call to validate OTP
  const onSubmit = (event) => {
    event.preventDefault();
    const api = "http://localhost:5000/api/users/validCode";
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
    <form onSubmit={onSubmit}>
      <Grid>
        <Paper elevation={8} style={backGroundStyle}>
          {/* <Tab label="Please enter the code" /> */}
          <TextField
            label="Enter code sent to your email"
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
          <br></br> <br></br>
        </Paper>
      </Grid>
    </form>
  );
};

export { VerifyCode };
