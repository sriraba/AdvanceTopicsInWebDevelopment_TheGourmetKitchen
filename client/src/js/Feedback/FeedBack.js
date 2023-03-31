import { Box, Button, Card, Grid, Rating, TextField, Typography } from '@mui/material';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Rate from '../Rate';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

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
              <Typography variant='h6'>Name</Typography>
              <Rating name="read-only" value={3} readOnly />
              <Typography variant='body2'>Review </Typography>
            </Col>
            <Col sm={1}>
              <DeleteIcon />
            </Col>
          </Row>
        </Grid>
      </Card>
    </Container>
  )
}

export default FeedBack