/**
 * Title: Profile management page
 * Author: Sri Ramya Basam
 * Date: 2022/11/10
 * Availability: https://mui.com/material-ui/getting-started/overview/, https://codesandbox.io/s/50l225l964?file=/src/index.js:608-1288
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Popup from './Popup';
import { Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from './Display_Menu/components/Navbar';
import SideDrawer from './Display_Menu/components/SideDrawer';
import Backdrop from './Display_Menu/components/Backdrop';

// Profile page with edit profile and delete profile options that customers choose from
const Profile = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false)

  const editProfile = () => {
    setOpen(true);
    navigate('/editProfile');
  };
  const deleteProfile = () => {
    setOpenPopup(true)
    // navigate('/');    
  };


  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="App">
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <br></br>
      <Grid style={{ marginLeft: "5%" }}>
        <Button variant="outlined" startIcon={<EditIcon />} onClick={editProfile}>Edit Profile</Button>
        <br /><br />
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteProfile}>Delete Account</Button>
      </Grid>
      <Popup message="Are you sure you want to delete?" openPopupWindow={openPopup} setOpenPopupWindow={setOpenPopup}> </Popup>
      <div style={{ position: 'absolute', bottom: '0px', width: '100%' }}> <Footer />  </div>
    </div>

  );
};

export { Profile };
