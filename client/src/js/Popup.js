/**
 * Title: popup page for confirming account deletion
 * Author: Sri Ramya Basam
 * Date: 2023/02/26
 * Reference: https://mui.com/material-ui/getting-started/overview/
 */

import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const buttonstyle = { margin: '8px 0' }



const popupStyles = makeStyles(theme => ({
    popupWrapper: {
        padding: theme.spacing(3),
        position: 'absolute',
        top: theme.spacing(6)
    },
    popupTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {
    const { message, openPopupWindow, setOpenPopupWindow } = props;
    const classes = popupStyles();
    const navigatePage = useNavigate(); 

    const handledelete = () => {

        // const api = "http://localhost:5000/api/users/delete";
        const api = "https://the-gourmet-kitchen.onrender.com/api/users/delete"; 
        console.log(localStorage.getItem("email"))
    const userinfo = {
      email: localStorage.getItem("email")
    };

    // backend call to delete account on user confirmation
    axios
    .post(api, userinfo)
    .then((response) => {
      console.log(response);
      navigatePage("/");
    })
    .catch((error) => {
      alert(error.response.data.message);
      navigatePage("/home");
    });
       
    };

    const handlenodelete = () => {
        window.location.reload();
    };

    return (
        <Dialog open={openPopupWindow} maxWidth="md" classes={{ paper: classes.popupWrapper }}>
            <DialogTitle className={classes.popupTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {message}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <Button type='submit' color='primary' variant="contained" style={buttonstyle} onClick={handledelete} fullWidth>Yes</Button>
                <Button type='submit' color='primary' variant="contained" style={buttonstyle} onClick={handlenodelete} fullWidth>No</Button>
            </DialogContent>
        </Dialog>
    )
}