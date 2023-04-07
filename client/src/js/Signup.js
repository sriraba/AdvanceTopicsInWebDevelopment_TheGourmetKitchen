/**
 * Title: Registration page
 * Author: Sri Ramya Basam & Aneri Shah (design Changes)
 * Date: 2023/02/28
 * Reference: https://mui.com/material-ui/getting-started/overview/,
 * https://www.regexlib.com/Search.aspx?k=email&AspxAutoDetectCookieSupport=1
 * https://codingstatus.com/password-and-confirm-password-validation-in-react-js/
 */

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Grid, InputLabel, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";

const Signup = () => {
  const backGroundStyle = {
    padding: 20,
    height: "auto",
    width: 280,
    margin: "5% auto",
  };
  const buttonstyle = { margin: "8px 0" };

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const [fErrorMessage, setFnErrorMessage] = useState();
  const [lErrorMessage, setLnErrorMessage] = useState();
  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState();
  const [cpasswordErrorMessage, setCPasswordErrorMessage] = useState();
  const navigation = useNavigate();
  const EMPTY_FIELD = "This cannot be empty";
  const ALPHABET_ONLY = "This can contain only alphabets";
  const VALID_FORMAT_ONLY = "Enter valid email format";
  const CONFIRM_PASSWORD_MATCH = "Confirm password is not matched";
  const NO_ERROR = "";
  const ALPHABET_REGEX = /^[a-zA-Z]+$/;
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const LOWER_CASE_REGEX = /(?=.*?[a-z])/;
  const MIN_LENGTH_REGEX = /.{8,}/;
  const UPPER_CASE_REGEX = /(?=.*?[A-Z])/;
  const SPECIAL_CHAR_REGEX = /(?=.*?[#?!@$%^&*-])/;
  const DIGITS_REGEX = /(?=.*?[0-9])/;

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    const api = "http://localhost:5000/api/users/";
    const userinfo = {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
    };
    console.log(userinfo);
  
  // backend call to store user data
  axios.post(api, userinfo).then((response) => {
      console.log(response);
    });
    navigation("/home");
  };
  
  // First name validation
  const handleFirstNameInput = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      ALPHABET_REGEX.test(event.target.value)
        ? setFnErrorMessage(NO_ERROR)
        : setFnErrorMessage(ALPHABET_ONLY);
    } else {
      setFnErrorMessage(EMPTY_FIELD);
    }
    setFirstName(event.target.value);
  };

  // last name validation
  const handleLastNameInput = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      ALPHABET_REGEX.test(event.target.value)
        ? setLnErrorMessage(NO_ERROR)
        : setLnErrorMessage(ALPHABET_ONLY);
    } else {
      setLnErrorMessage(EMPTY_FIELD);
    }
    setLastName(event.target.value);
  };

  // Email validations
  const handleEmailInput = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      EMAIL_REGEX.test(event.target.value)
        ? setEmailErrorMessage(NO_ERROR)
        : setEmailErrorMessage(VALID_FORMAT_ONLY);
    } else {
      setEmailErrorMessage(EMPTY_FIELD);
    }
    setEmail(event.target.value);
  };

  // Password format validation
  const handlePasswordInput = (event) => {
    console.log(event.target.value);
    const passwordValue = event.target.value.trim();

    if (event.target.value) {
      if (passwordValue.length === 0) {
        setPasswordErrorMessage("Password is empty");
      } else if (!UPPER_CASE_REGEX.test(passwordValue)) {
        setPasswordErrorMessage("At least one uppercase is required");
      } else if (!LOWER_CASE_REGEX.test(passwordValue)) {
        setPasswordErrorMessage("At least one lowercase is required");
      } else if (!DIGITS_REGEX.test(passwordValue)) {
        setPasswordErrorMessage("At least one digit is required");
      } else if (!SPECIAL_CHAR_REGEX.test(passwordValue)) {
        setPasswordErrorMessage("At least one special character is required ");
      } else if (!MIN_LENGTH_REGEX.test(passwordValue)) {
        setPasswordErrorMessage("Minumum 8 characters are required");
      } else {
        setPasswordErrorMessage(NO_ERROR);
      }
    } else {
      setPasswordErrorMessage(EMPTY_FIELD);
    }
    setPassword(event.target.value);
  };


  const handleConfirmPasswordInput = (event) => {
    if (event.target.value) {
      password === event.target.value
        ? setCPasswordErrorMessage(NO_ERROR)
        : setCPasswordErrorMessage(CONFIRM_PASSWORD_MATCH);
    } else {
      setCPasswordErrorMessage(EMPTY_FIELD);
    }
    setConfirmPassword(event.target.value);
  };

  return (
    // Form to collect user information
    <form onSubmit={onSubmit}>
      <Grid>
        <Paper elevation={8} style={backGroundStyle}>
          <Typography variant="overline" display="block" gutterBottom>
            Sign yourself up!
          </Typography>
          <img
            src="images/logo.png"
            style={{ height: "50%", width: "100%", marginBottom: "5%" }}
            alt="logo"
          />
          <TextField
            label="First Name"
            placeholder="Enter first name"
            fullWidth
            value={firstname}
            required
            onChange={handleFirstNameInput}
          />
          <p style={{ color: "Red" }}>{fErrorMessage}</p>
          <TextField
            label="Last Name"
            placeholder="Enter last name"
            fullWidth
            value={lastname}
            required
            onChange={handleLastNameInput}
          />
          <p style={{ color: "Red" }}>{lErrorMessage}</p>

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
            onChange={handlePasswordInput}
          />
          <p style={{ color: "Red" }}>{passwordErrorMessage}</p>

          <TextField
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
            fullWidth
            required
            value={cpassword}
            onChange={handleConfirmPasswordInput}
          />
          <p style={{ color: "Red" }}>{cpasswordErrorMessage}</p>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={buttonstyle}
            fullWidth
          >
            Register
          </Button>
          <InputLabel>
            Already have an account?
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              {" "}
              Login
            </NavLink>
          </InputLabel>
        </Paper>
      </Grid>
    </form>
  );
};

export { Signup };
