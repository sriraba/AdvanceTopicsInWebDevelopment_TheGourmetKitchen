// Author: Aneri Shah (B00912616)
// Fetaure: Footer
// Overall References:
// MUI: https://mui.com/
// React Router DOM: https://reactrouter.com/en/main
// React: https://react.dev/
// NPM Libraries: https://www.npmjs.com/


import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar className='footer'>
                    <Typography variant='subtitle2'>
                        <Link style={{ textDecoration: "none", color: "white" }} to='https://www.termsfeed.com/live/4408f65a-7afb-4cfd-b9ad-4d02bb67572c'>Privacy Policy</Link>
                        &nbsp;|&nbsp;<Link style={{ textDecoration: "none", color: "white" }} to='https://www.termsandconditionsgenerator.com/live.php?token=mgiHrm8iQanBEcI9EHTzw6o2iqbHxpnX'>Terms & Conditions</Link>
                    </Typography>
                    <Typography variant='subtitle2' style={{ margin: 'auto' }}>All Rights Reserved | © | The Gourmet Kitchen</Typography>
                    <div>
                        <IconButton style={{color: "white"}} aria-label="twitter">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton style={{color: "white"}} aria-label="instagram">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton style={{color: "white"}} aria-label="facebook">
                            <FacebookIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Footer;