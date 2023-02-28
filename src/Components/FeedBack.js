import { Box, Button, Card, Grid, Rating, TextField, Typography } from '@mui/material';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Rate from './Rate';
import SendIcon from '@mui/icons-material/Send';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const FeedBack = () => {
  return (
    <Container style={{ marginBottom: '1%' }}>
      <Typography variant="h6" component="h6" style={{ color: "#4e888f", marginBottom: "1%", marginTop: '1%' }}>
        Review Snapshot
      </Typography>
      <Box>
        <Typography component="legend">Rate the plan</Typography>
        <Rate />
        <Grid>
          <Row>
            <Col sm={11}>
              <TextField id="standard-basic" label="Write a review" variant="standard" style={{ width: '100%' }} />
            </Col>
            <Col sm={1}>
              <Button variant="contained" style={{ backgroundColor: '#4e888f' }} onClick={() => { alert('Your review is successfully submitted !'); window.location.reload() }} endIcon={<SendIcon />}>
                Send
              </Button>
            </Col>
          </Row>
        </Grid>
      </Box>
      <Card style={{ marginTop: '1%', padding: '1%' }}>
        <Grid>
          <Row>
            <Col sm={11}>
              <Typography variant='h6'>Michael Hills</Typography>
              <Rating name="read-only" value={3} readOnly />
              <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer in tempor ante. Proin euismod, velit vel vestibulum bibendum, velit risus convallis
                risus, eu tincidunt risus augue eget urna. Aenean auctor, quam in pharetra dapibus, mi mi
                malesuada mi, eu laoreet lectus enim ut leo. Nulla id convallis eros. Sed auctor est vel dolor
                feugiat aliquet. Sed eget lectus euismod, rhoncus velit vel, accumsan ligula. Nam vel dolor nec
                est faucibus volutpat. </Typography>
            </Col>
            <Col sm={1}>
              <VerifiedUserIcon />
            </Col>
          </Row>
        </Grid>
      </Card>
      <Card style={{ marginTop: '1%', padding: '1%' }}>
        <Grid>
          <Row>
            <Col sm={11}>
              <Typography variant='h6'>Samantha Ruth</Typography>
              <Rating name="read-only" value={4} readOnly />
            </Col>
            <Col sm={1}>
              <VerifiedUserIcon />
            </Col>
          </Row>
        </Grid>
      </Card>
    </Container>
  )
}

export default FeedBack