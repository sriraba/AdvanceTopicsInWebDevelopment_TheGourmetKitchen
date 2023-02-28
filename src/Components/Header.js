import { AppBar, Box, Grid, Link, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dropdown } from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar className='header'>
                    <Link href="/home"><img src='images/logo.png' className='App-logo' alt='logo' /></Link>
                    <Grid container alignItems="center">
                        <Grid item xs>

                        </Grid>
                        <Grid item>
                            <Dropdown>
                                <ShoppingCartIcon style={{ backgroundColor: '#4e888f', borderColor: '#4e888f' }} />
                                <Dropdown.Toggle style={{ backgroundColor: '#4e888f', borderColor: '#4e888f' }}>
                                    <AccountCircleIcon />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item href="/appointmentform">Services</Dropdown.Item>
                                    <Dropdown.Item href="">Settings</Dropdown.Item>
                                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header