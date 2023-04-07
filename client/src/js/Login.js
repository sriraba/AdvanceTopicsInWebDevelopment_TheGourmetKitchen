/**
 * Title: Login page
 * Author: Sri Ramya Basam & Aneri Shah (design changes)
 * Date: 2023/02/28
 * Reference: https://mui.com/material-ui/getting-started/overview/,
 *  https://levelup.gitconnected.com/how-to-create-a-navigation-bar-with-material-ui-9cbcfcec2570
 * https://regex101.com/library/rP6sA9
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Box, Button, Container, InputLabel, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";

const Login = () => {
  const backGroundStyle = {
    padding: 20,
    height: "auto",
    width: 280,
    margin: "10% auto",
  };
  const buttonstyle = { margin: "9px 0" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const navigatePage = useNavigate();
  const VALID_FORMAT_ONLY = "Enter valid email format";
  const NO_ERROR = "";
  const EMPTY_FIELD = "This cannot be empty";
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleEmailInput = (event) => {

    if (event.target.value) {
      EMAIL_REGEX.test(event.target.value)
        ? setEmailErrorMessage(NO_ERROR)
        : setEmailErrorMessage(VALID_FORMAT_ONLY);
    } else {
      setEmailErrorMessage(EMPTY_FIELD);
    }
    setEmail(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    const api = "http://localhost:5000/api/users/validuser";
    const userinfo = {
      email: email,
      password: password,
    };
    // backend call to validate user login
    axios
      .post(api, userinfo)
      .then((response) => {
        console.log(response);
        localStorage.setItem("email", email);
        navigatePage("/home");
      })
      .catch((error) => {
        alert(error.response.data.message);
        window.location.reload();
      });

  };

  return (
      <Container>
      <Box>
        {/* Form to allow user to login */}
          <form onSubmit={onSubmit} style={{padding: "1%"}}>
              <Paper elevation={8} style={backGroundStyle}>
                <Typography variant="overline" display="block" gutterBottom>
                  Welcome Back!
                </Typography>
                <img
                  src="images/logo.png"
                  style={{ height: "50%", width: "100%", marginBottom: "5%" }}
                  alt="logo"
                />
                <TextField
                  label="Email"
                  placeholder="Enter email"
                  fullWidth
                  value={email}
                  required
                  onChange={handleEmailInput}
                />
                <p style={{ color: "Red" }}>{emailErrorMessage}</p>
                <TextField
                  label="Password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <br />
                <NavLink
                  className="navbar-item"
                  activeClassName="is-active"
                  style={{ textAlign: "right", marginTop: "auto" }}
                  to="/collectemail"
                >
                  Forgot Password?
                </NavLink>
                <br />
                <br />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={buttonstyle}
                  fullWidth
                >
                  LOGIN
                </Button>
                <br />
                <InputLabel style={{ textAlign: "center" }}>
                  Need an account?
                  <NavLink
                    className="navbar-item"
                    activeClassName="is-active"
                    to="/signup"
                  >
                    {" "}
                    Register
                  </NavLink>
                </InputLabel>
              </Paper>
          </form>
      </Box>
    </Container>
  );
};

export { Login };
