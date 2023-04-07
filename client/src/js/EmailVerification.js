/**
 * Title: Email Verification on Forgot Password feature
 * Author: Sri Ramya Basam
 * Date: 2023/03/30
 * Reference: https://mui.com/material-ui/getting-started/overview/,
 * https://levelup.gitconnected.com/how-to-create-a-navigation-bar-with-material-ui-9cbcfcec2570
 */
import React, { useState } from "react";
import { Button, Grid, Paper, Tab, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmailVerification = () => {
  const backGroundStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
  };
  const buttonstyle = { margin: "9px 0" };
  const [email, setEmail] = useState("");
  const navigatePage = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const api = "http://localhost:5000/api/users/sendCode";
    const userinfo = {
      email: email
    };
    console.log(userinfo);

    axios
      .post(api, userinfo)
      .then((response) => {
        console.log(response);
        localStorage.setItem("email",email);
        navigatePage("/verifycode");
      })
      .catch((error) => {
        alert(error.response.data.message);
        navigatePage("/");
      });
  };
  return (
    <form onSubmit={onSubmit}>
      <Grid>
        <Paper elevation={8} style={backGroundStyle}>
          <Tab label="A verification code will be sent to the email" />
          <TextField
            label="Enter Email"
            placeholder="Enter email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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

export { EmailVerification };
