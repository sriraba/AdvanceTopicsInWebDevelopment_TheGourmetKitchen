import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import { TimePicker } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Footer from "./Footer";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Navbar from "./Display_Menu/components/Navbar";
import { $CombinedState } from "redux";

function AppointmentForm() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [date, setdate] = useState("");
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

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log({ firstname, lastname, email, number, message, date, time });
    const offset = date.$d.getTimezoneOffset();
    date.$d = new Date(date.$d.getTime() - offset * 60 * 1000);
    let finaldate = date.$d.toISOString().split("T")[0];
    let appointmentdata = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      phoneNumber: number,
      date: finaldate,
      time: time,
      description: message,
    };
    // http://localhost:5000/api/appointment
    await axios
      .post("https://the-gourmet-kitchen.onrender.com/api/appointment", appointmentdata)
      .then((res) => {});

    navigation("/");
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
      setNumber(event.target.value);
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
  const handleDate = async (value) => {
    setdate(value);
    const offset = value.$d.getTimezoneOffset();
    value.$d = new Date(value.$d.getTime() - offset * 60 * 1000);
    let date = value.$d.toISOString().split("T")[0];
    await axios
      .get(`https://the-gourmet-kitchen.onrender.com/api/appointment/timeslot?date=${date}`)
      .then((res) => {
        // console.log(res.data.data.);
        let allValues = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let filteredValues = allValues.filter(
          (value) => !res.data.data.availableTimeslot.includes(value)
        );
        setOptions(filteredValues);
      });
  };
  const handletimechange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div>
      <Navbar />

      <Grid>
        <Card style={{ maxWidth: 500, padding: "1% 1%", margin: "3% auto" }}>
          <Typography gutterBottom variant="h5" align="center">
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
                    required
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
                    required
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
                    required
                  />
                  <p style={{ color: "Red" }}>{emailErrorMessage}</p>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="string"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    value={number}
                    error={fErrorMessage}
                    helperText={fErrorMessage}
                    onChange={handleNumber}
                    required
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
                    required
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
                      value={date}
                      error={fErrorMessage}
                      helperText={fErrorMessage}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                  ></LocalizationProvider>
                  <Box sx={{ minWidth: 110 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Time
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={time}
                        label="Age"
                        onChange={handletimechange}
                        required
                      >
                        {
                          /* <MenuItem id="9" value={9}>
                          9 Am
                        </MenuItem>
                        <MenuItem id="10" value={10}>
                          10 Am
                        </MenuItem>
                        <MenuItem id="11" value={11}>
                          11 Am
                        </MenuItem>
                        <MenuItem id="12" value={12}>
                          12 Pm
                        </MenuItem>
                        <MenuItem id="13" value={13}>
                          1 Pm
                        </MenuItem>
                        <MenuItem id="14" value={14}>
                          2 Pm
                        </MenuItem>
                        <MenuItem id="15" value={15}>
                          3 Pm
                        </MenuItem> */

                          options.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl>
                  </Box>
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
      <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}

export default AppointmentForm;
