/**
 * Title: Forgot password page
 * Author: Sri Ramya Basam
 * Date: 2023/02/20
 * Reference: https://mui.com/material-ui/getting-started/overview/, 
 * https://levelup.gitconnected.com/how-to-create-a-navigation-bar-with-material-ui-9cbcfcec2570
 */
import React, { useState } from "react";
import { Grid,Paper, TextField, Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Tab from '@material-ui/core/Tab';

const ForgotPassword=()=>{
    const backGroundStyle={padding :20,height:'40vh',width:280, margin:"20px auto"}
    const buttonstyle={margin:'9px 0'}
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigatePage = useNavigate();    
    const onSubmit = (event) => {
        event.preventDefault();        
       if (password === repassword) {
            alert("Password changed successfully");
            navigatePage('/') 
        }
        else {
            alert("Passwords should match");
            window.location.reload();           
            navigatePage('/ForgotPassword') 
        }     
           
    };
    return(
        <form onSubmit={onSubmit}>
            <Grid>
            <Tab label="Forgot password" />
            <Paper elevation={8} style={backGroundStyle}> 
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth  required value={password} onChange={(event) => setPassword(event.target.value)}/>           
                <TextField label='Confirm Password' placeholder='Re-enter password' type='password' fullWidth  required value={repassword} onChange={(event) => setRepassword(event.target.value)}/>
                <Button type='submit' color='primary' variant="contained"  style={buttonstyle} fullWidth>SUBMIT</Button> 
                  <br></br> <br></br>                 
                <NavLink className="navbar-item" activeClassName="is-active" to="/"> Login</NavLink>                             
                
            </Paper>           
        </Grid>
        
        </form>  

        
               
    )
}

export {ForgotPassword};