/**
 * Title: Email Verification on Forgot Password feature
 * Author: Sri Ramya Basam
 * Date: 2023/03/30
 * Reference: https://mui.com/material-ui/getting-started/overview/,
 * https://levelup.gitconnected.com/how-to-create-a-navigation-bar-with-material-ui-9cbcfcec2570
 * https://mui.com/material-ui/getting-started/templates/
 */
import React, { useState } from "react";
import { Button, Grid, Paper, Tab, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

const EmailVerification = () => {
  const backGroundStyle = {
    padding: 20,
    height: "60vh",
    width: 350,
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
        <Paper  elevation={8} style={backGroundStyle} >
          <Tab label="A verification code will be sent to the email" />
          <img
            src="images/logo.png"
            style={{ height: "30%", width: "100%" }}
            alt="logo"
          />
          <br></br>      <br></br>
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

export { EmailVerification };
