import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppBar, Box, Grid, Link, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dropdown } from 'react-bootstrap'
import Description from './Description';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar className='header'>
                    <img src='images/logo.png' className='App-logo' alt='logo' />
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign:'center', display: { xs: 'none', sm: 'block' } }}>
                        <Link style={{color: 'white', textDecoration: 'none'}}>Menu</Link>&emsp;
                        <Link style={{color: 'white', textDecoration: 'none'}}>Services</Link>&emsp;
                        <Link style={{color: 'white', textDecoration: 'none'}}>Contact</Link>
                    </Typography>
                    <Toolbar>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography><input type={Text} placeholder="&emsp;Search..." style={{ borderRadius: '20px', height: '2em' }} /></Typography>
                            </Grid>
                            <Grid item>
                                <Dropdown>
                                    <Dropdown.Toggle style={{backgroundColor: '#4e888f', borderColor: '#4e888f'}}>
                                        <AccountCircleIcon />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">Profile</Dropdown.Item>
                                        <Dropdown.Item href="">Settings</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header