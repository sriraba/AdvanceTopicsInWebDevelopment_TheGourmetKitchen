import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";


function AppointmentForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [datetime, setdatetime] = useState("");
  const [fErrorMessage, setFnErrorMessage] = useState();
  const [lErrorMessage, setLnErrorMessage] = useState();
  const [time, setTime] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const [numberErrorMessage, setNumberErrorMessage] = useState();

  const navigation = useNavigate();
  const EMPTY_FIELD = "It cannot be empty";
  const VALID_FORMAT_ONLY = "Please enter valid email address";
  const ALPHABET_ONLY = "It only contains alphabet";
  const ALPHABET_REGEX = /^[a-zA-Z]+$/;
  const Number = "Enter Number";
  const NO_ERROR = "";
  const Date_Error = "Select Date";
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [value, setValue] = React.useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
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
    console.log(`first-name ${firstname}`);
  };
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
  const handleNumber = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      setEmail(event.target.value);
    } else {
      setEmailErrorMessage(EMPTY_FIELD);
    }
  };
  const handleMessage = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      setMessage(event.target.value);
    } else {
      setNumberErrorMessage(Number);
    }
  };
  const handleDate = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      setTime(event.target.value);
    } else {
      setNumberErrorMessage(Date_Error);
    }
  };

  return (
    <div>
      <Header />

      <Grid>

        <Card
          style={{ maxWidth: 500, padding: "1% 1%", margin: "3% auto" }}
        ><Typography gutterBottom variant="h5" align="center">
            Appointment Form
          </Typography>
          <CardContent>
            <form>
              <Grid container spacing={2}>
                <Grid xs={22} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    fullWidth
                    value={firstname}
                    onChange={handleFirstNameInput}
                    error={fErrorMessage}
                    helperText={fErrorMessage}
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    value={lastname}
                    error={fErrorMessage}
                    helperText={fErrorMessage}
                    onChange={handleLastNameInput}
                  />
                </Grid>
                <Grid item xs={32}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    error={fErrorMessage}
                    helperText={fErrorMessage}
                    onChange={handleEmailInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    value={number}
                    error={fErrorMessage}
                    helperText={fErrorMessage}
                    onChange={handleNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    value={message}
                    error={fErrorMessage}
                    helperText={fErrorMessage}
                    onChange={handleMessage}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TimePicker
                    label="Time"
                    value={setTime}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {/* <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={datetime}
                    onChange={(newValue) => {}}
                  /> */}
                    <DesktopDatePicker
                      label="Date desktop"
                      inputFormat="MM/DD/YYYY"
                      onChange={handleDate}
                      value={value}
                      error={fErrorMessage}
                      helperText={fErrorMessage}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                  ></LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <div style={{ position: 'absolute', bottom: '0px', width: '100%' }}> <Footer />  </div>
    </div>
  );
}

export default AppointmentForm;
