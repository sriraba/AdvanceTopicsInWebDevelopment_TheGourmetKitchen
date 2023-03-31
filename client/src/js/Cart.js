import { Button, Container, Divider, Grid, List, ListItem, ListItemText, Paper, Table, TableCell, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ClearIcon from '@mui/icons-material/Clear';

export default function Cart() {
    return (
        <div>
            <Container style={{ paddingBottom: "2%" }}>
                <Paper elevation={8} style={{ marginTop: "2%", padding: "2%" }}>
                    <Typography variant='overline' style={{ fontSize: "20px", color: "#4e888f" }}>shopping cart</Typography>
                    <Typography variant='caption' style={{ fontSize: "15px", textAlign: "end" }}>&nbsp;[3 Items]</Typography>
                    <Divider style={{ borderBottomWidth: 2, borderColor: "#000" }} />

                    {/* Cart Items */}


                    <Grid item xs={12} style={{ marginTop: "2%", display: 'flex', flexDirection: 'row' }}>
                        <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'row' }}>
                            <img src='images/dosa.png' style={{ height: "150px", width: '250px' }} alt='logo' />
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemText>
                                        <Typography variant='body1'>Meal Plan 2 (serves 3)</Typography>
                                        <Typography variant='caption'>This is a meal plan that ideally serves 3 person, rotates every month</Typography>
                                        <Typography variant='h6'>Price: $250</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField type="number" label="Quantity" variant="outlined" value="2" style={{ width: "50%" }} />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant='contained' endIcon={<ClearIcon />} style={{ margin: "auto" }}>Remove Item</Button>
                        </Grid>
                    </Grid>
                    <Divider style={{ borderBottomWidth: 1, borderColor: "#000", marginTop: "2%" }} />
                    <Grid item xs={12} style={{ marginTop: "2%", display: 'flex', flexDirection: 'row' }}>
                        <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'row' }}>
                            <img src='images/gj.png' style={{ height: "150px", width: '250px' }} alt='logo' />
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemText>
                                        <Typography variant='body1'>Meal Plan 1 (serves 2)</Typography>
                                        <Typography variant='caption'>This is a meal plan that ideally serves 2 person, rotates every month</Typography>
                                        <Typography variant='h6'>Price: $180</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField type="number" label="Quantity" variant="outlined" value="1" style={{ width: "50%" }} />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant='contained' endIcon={<ClearIcon />} style={{ margin: "auto" }}>Remove Item</Button>
                        </Grid>
                    </Grid>
                    <Divider style={{ borderBottomWidth: 2, borderColor: "#000", marginTop: "2%" }} />

                    {/* Purchase */}


                    <Grid item xs={12} style={{ marginTop: "2%", display: 'flex', flexDirection: 'row' }}>
                        <Grid item xs={8}>
                            <Typography variant='body1'>Have a Promo Code?</Typography>
                            <TextField type="text" label="Promo Code" variant="outlined" />
                            <br /><br />
                            <Typography variant='body1'>Shipping Address</Typography>
                            <TextField type="text" label="Address" variant="outlined" />
                        </Grid>
                        <Grid item xs={4} style={{ marginLeft: "auto" }}>
                            <Typography variant='body1'>Purchase Summary</Typography>
                            <Table>
                                <TableRow>
                                    <TableCell>Item Total:</TableCell>
                                    <TableCell>$ 430</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tax (HST - 15%):</TableCell>
                                    <TableCell>$ 64.5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Purchase Total:</TableCell>
                                    <TableCell>$ 494.5</TableCell>
                                </TableRow>
                            </Table>
                            <Button variant='contained' style={{ marginTop: "2%" }}>Checkout</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Footer />
            {/* <div style={{ position: 'absolute', bottom: '0px', width: '100%' }}> <Footer />  </div> */}
        </div>
    )
}
