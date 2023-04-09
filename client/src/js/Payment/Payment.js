// Author: Aneri Shah (B00912616)
// Fetaure: Payment Gateway
// Overall References:
// MUI: https://mui.com/
// React Bootstrap: https://react-bootstrap.github.io/
// React: https://react.dev/
// NPM Libraries: https://www.npmjs.com/
// React Router DOM: https://reactrouter.com/en/main



import React, { useState } from "react";
import { TextField, Button, Typography, Stepper, Step, StepLabel, Paper, Alert, AlertTitle } from "@mui/material";
import Navbar from "../Display_Menu/components/Navbar";
import SideDrawer from "../Display_Menu/components/SideDrawer";
import Backdrop from "../Display_Menu/components/Backdrop";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const steps = ["Billing Details", "Payment Information"];

const Payment = () => {
    //MUI Stepper: https://mui.com/material-ui/react-stepper/
    const [activeStep, setActiveStep] = useState(0);

    //Unique ID: https://www.geeksforgeeks.org/how-to-create-an-unique-id-in-reactjs/
    const order_id = uuid();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const [errors, setErrors] = useState({});

    const navigateHome = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // References: 
        // 1. https://stackoverflow.com/questions/68880838/typeerror-validation-is-not-a-function-in-react-js
        // 2. https://www.tabnine.com/code/javascript/functions/validator/trim

        const errors = {};

        if (!name.trim()) {
            errors["name"] = "Name is required";
        }

        if (!email.trim()) {
            errors["email"] = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors["email"] = "Email is invalid";
        }

        if (!address.trim()) {
            errors["address"] = "Address is required";
        }

        if (!cardNumber.trim()) {
            errors["cardNumber"] = "Card number is required";
        } else if (!/^\d{16}$/.test(cardNumber)) {
            errors["cardNumber"] = "Card number is invalid";
        }

        if (!expiryDate.trim()) {
            errors["expiryDate"] = "Expiry date is required";
        } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            errors["expiryDate"] = "Expiry date is invalid";
        }

        if (!cvv.trim()) {
            errors["cvv"] = "CVV is required";
        } else if (!/^\d{3}$/.test(cvv)) {
            errors["cvv"] = "CVV is invalid";
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Submit form
            setTimeout(() => {
                // Show toast message
                toast.success('Payment successful!', {
                    position: toast.POSITION.TOP_RIGHT
                });

                window.alert(`Payment Succesfull, Your Order ID is: ${order_id}` )

                // Navigate to home page
                navigateHome('/home');
            }, 2000);
        }
    };
    const [sideToggle, setSideToggle] = useState(false);

    return (

        <div style={{ minHeight: '100vh' }}>
            <div>
                <Navbar click={() => setSideToggle(true)} />
                <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
                <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
                <Paper elevation={8} style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
                    <Typography variant="h4" style={{ marginBottom: "20px", textAlign: "center" }}>
                        Payment Form
                    </Typography>
                    <Stepper activeStep={activeStep} style={{ marginBottom: "2%" }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === 0 && (
                        //MUI Stepper: https://mui.com/material-ui/react-stepper/
                        <form onSubmit={() => setActiveStep(1)} style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
                            <TextField
                                label="Name"
                                style={{ marginBottom: "20px", width: "auto" }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={errors["name"]}
                                helperText={errors["name"]}
                            />
                            <TextField
                                label="Email"
                                style={{ marginBottom: "20px" }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={errors["email"]}
                                helperText={errors["email"]}
                            />
                            <TextField
                                label="Address"
                                style={{ marginBottom: "20px" }}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                error={errors["address"]}
                                helperText={errors["address"]}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginTop: "20px" }}
                                onClick={() => setActiveStep(1)}
                            >
                                Next
                            </Button>
                        </form>
                    )}
                    {activeStep === 1 && (
                        //MUI Stepper: https://mui.com/material-ui/react-stepper/
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
                            <TextField
                                label="Card Number"
                                style={{ marginBottom: "20px" }}
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                error={errors["cardNumber"]}
                                helperText={errors["cardNumber"]}
                            />
                            <TextField
                                label="Expiry Date (MM/YY)"
                                style={{ marginBottom: "20px" }}
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                error={errors["expiryDate"]}
                                helperText={errors["expiryDate"]}
                            />
                            <TextField
                                label="CVV"
                                style={{ marginBottom: "20px" }}
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                error={errors["cvv"]}
                                helperText={errors["cvv"]}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginTop: "20px" }}
                                onClick={() => setActiveStep(0)}
                            >
                                Back
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ marginTop: "20px" }}
                            >
                                Submit Payment  
                            </Button>
                            <ToastContainer autoClose={2000} />
                        </form>
                    )}
                </Paper>
            </div>
            <div style={{ position: 'absolute', bottom: '0px', width: '100%' }} > <Footer />  </div>
        </div>
    );
};

export default Payment;

