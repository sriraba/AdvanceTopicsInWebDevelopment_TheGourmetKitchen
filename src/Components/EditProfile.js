/**
 * Title: Edit Profile page
 * Author: Sri Ramya Basam
 * Date: 2023/02/25
 * Reference: https://mui.com/material-ui/getting-started/overview/ 
 */

import React, { useState } from "react";
import { Grid,Paper, TextField, Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { InputLabel } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

const EditProfile=()=>{
    const backGroundStyle={padding :20,height:'40vh',width:280, margin:"20px auto"}
    const buttonstyle={margin:'9px 0'}
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");   
    const onSubmit = (event) => {
        event.preventDefault();      
        window.location.reload();       
           
    };

    return(
        <form onSubmit={onSubmit}>
            <div> <Header></Header>  </div>
            <Grid>
            
            <Paper elevation={8} style={backGroundStyle}> 
            <InputLabel >Below details are editable !!!</InputLabel>           
                <TextField label='Email' placeholder='Enter email' fullWidth value={email} required onChange={(event) => setEmail(event.target.value)}/>
                <TextField label='First Name' placeholder='Enter first name' fullWidth value={firstname} required onChange={(event) => setFirstName(event.target.value)}/> 
                <TextField label='Last Name' placeholder='Enter last name' fullWidth value={lastname} required onChange={(event) => setLastName(event.target.value)}/> 
                <Button type='submit' color='primary' variant="contained"  style={buttonstyle} fullWidth>SUBMIT</Button> 
                  <br></br> <br></br>
            </Paper>           
        </Grid>        
        <div style={{position: 'absolute', bottom: '0px', width: '100%'}} > <Footer />  </div>
         
        </form>  

        
               
    )
}

export {EditProfile};