import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

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