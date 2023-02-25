import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppBar, Box, Grid, Link, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dropdown } from 'react-bootstrap'
import Description from './Description';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar className='footer'>
                    <Typography variant='subtitle2' style={{margin: 'auto'}}>All Rights Reserved | © | The Gourmet Kitchen</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Footer;