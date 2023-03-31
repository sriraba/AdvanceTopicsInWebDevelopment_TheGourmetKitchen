import { Divider, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Button, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FeedBack from './FeedBack';
import Footer from './Footer';

const Description = () => {
    return (
        <div>
            <Container style={{ marginTop: '1%' }}>
                <Row>
                    <Typography gutterBottom variant="h5" style={{ color: "#4e888f" }}>
                        <b>Meal Plan</b> | (Serves 2)
                        <Divider variant="middle" style={{ border: '0.5px solid black', marginTop: '1%' }} />
                    </Typography>
                    <Col sm={6} style={{ margin: 'auto' }}>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/gj.png"
                                    alt="Meal Plan | 1"
                                />

                                <Carousel.Caption>
                                    <h3>Meal Plan | 1</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/biryani.png"
                                    alt="Meal Plan | 2"
                                />
                                <Carousel.Caption>
                                    <h3>Meal Plan | 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/dalroti.png"
                                    alt="Meal Plan | 3"
                                />

                                <Carousel.Caption>
                                    <h3>Meal Plan | 3</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/dosa.png"
                                    alt="Meal Plan | 4"
                                />

                                <Carousel.Caption>
                                    <h3>Meal Plan | 4</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm={6}>
                        <Typography variant='h6'> What's All in it? </Typography>
                        <Typography variant='subtitle2'>
                            This meal plan is designed to provide a diverse and exciting dining experience, with a different
                            menu presented each day. The dishes included in this plan are selected from a rotating selection
                            of options, ensuring that each meal is a delightful and surprising experience.
                        </Typography>
                        <Typography variant='body1' style={{ marginTop: '2%' }}><b>Main course: </b></Typography>
                        <Typography>
                            <Grid>
                                <Row>
                                    <Col>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Aloo Paratha with Curd</ListGroup.Item>
                                            <ListGroup.Item>Dosa Platter</ListGroup.Item>
                                            <ListGroup.Item>Mix Vegetable Curry with Rice</ListGroup.Item>
                                            <ListGroup.Item>Dal Makhani with Rotis</ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Chana Masala with Puri</ListGroup.Item>
                                            <ListGroup.Item>Aloo Gobhi with Chappati</ListGroup.Item>
                                            <ListGroup.Item>Vegetable Biryani with Raita</ListGroup.Item>
                                            <ListGroup.Item>Paneer Butter Masala with Naan</ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Grid>
                            <Typography variant='body1' style={{ marginTop: '2%' }}><b>Deserts & Side Dishes: </b></Typography>
                            <Grid>
                                <Row>
                                    <Col>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Gulab Jamun</ListGroup.Item>
                                            <ListGroup.Item>Kheer</ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Salad</ListGroup.Item>
                                            <ListGroup.Item>Papad</ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Grid>
                        </Typography>
                        <Row style={{ marginTop: '2%' }}>
                            <Col style={{ textAlign: "center" }} sm={3}>
                                <IconButton aria-label="remove">
                                    <RemoveCircleOutlineIcon style={{ width: '35px', height: '35px' }} />
                                </IconButton>
                                <Button disabled color='secondary' variant='outlined'>1</Button>
                                <IconButton aria-label="add">
                                    <AddCircleOutlineIcon style={{ width: '35px', height: '35px' }} />
                                </IconButton>
                            </Col>
                            <Col sm={9} style={{ margin: 'auto' }}>
                                <Button variant='dark' style={{ width: '100%' }} onClick={() => { alert('Item added to your cart'); window.location.reload() }}>Add to Cart</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider variant="middle" style={{ border: '0.5px solid black', marginTop: '1%' }} />
                <FeedBack></FeedBack>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Description