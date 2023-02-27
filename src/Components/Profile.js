/**
 * Title: Profile management page
 * Author: Sri Ramya Basam
 * Date: 2022/11/10
 * Availability: https://mui.com/material-ui/getting-started/overview/, https://codesandbox.io/s/50l225l964?file=/src/index.js:608-1288
 */
import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Popup from './Popup';

const Profile = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false)
  const editProfile = () => {
    setOpen(true);
    localStorage.clear();    
    navigate('/editProfile');    
  };
  const deleteProfile = () => {   
    setOpenPopup(true)
    // navigate('/');    
  };

  return (
<div className="App">
        <Header />  
<br></br> 
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Card  style = {{width:200, height: 150, marginLeft: 200} } variant="outlined" onClick={editProfile}>
        <CardContent>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"h6"} 
            justifyContent={"center"}  >
            Edit Profile
          </Typography>         
        </CardContent>
      </Card>    
  </Grid>
  <Grid item xs={4}>
  <Card  style = {{width:200, height: 150}} onClick={deleteProfile}>
        <CardContent>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"h6"} 
            justifyContent={"center"}  >
            Delete Profile
          </Typography>         
        </CardContent>
      </Card>  
  </Grid>
</Grid> 
<Popup message="Are you sure you want to delete?" openPopupWindow={openPopup} setOpenPopupWindow={setOpenPopup}> </Popup>
<br></br>
<br></br>
<div style={{position: 'absolute', bottom: '0px', width: '100%'}}> <Footer />  </div>         
    </div>   
     
  );
};

export {Profile};
