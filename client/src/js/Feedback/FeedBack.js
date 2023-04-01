import { Box, Button, Card, Grid, Rating, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Rate from '../Rate';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const FeedBack = () => {

  const { id } = useParams();

  let username = localStorage.getItem("email");

  const [ratingValue, setValue] = useState();
  const [feedbacks, setFeedbacks] = useState([]);
  const [user, setUser] = useState([]);

  const [feedback, setFeedback] = useState({
    courseId: id,
    userId: "",
    rating: "",
    feedback: "",
});

const handleFeedback = async () => {
  await axios({
      method: "PUT",
      url: `/api/feedback/add`,
      headers: {
          "Content-Type": "application/json",
      },
      data: {feedback}
  });
  window.location.reload();
};

const getFeedback = async () => {
  const responseData = await axios({
      method: "GET",
      params: {
          id: id
      },
      url: `/api/feedback/course/${id}`,
      headers: {
          "Content-Type": "application/json",
      },
  });
  return responseData.data.data;
};

const getUserName = async () => {
  const responseData = await axios({
      method: "GET",
      params: {
          email: username
      },
      url: `/api/feedback/email/${username}`,
      headers: {
          "Content-Type": "application/json",
      },
  });
  console.log("Name: " + JSON.stringify(responseData.data.data[0]));
  return responseData.data.data[0];
};

useEffect(() => {
  getFeedback().then((feedbacks) => {
      setFeedbacks(feedbacks);
  });
}, []);

useEffect(() => {
  getUserName().then((user) => {
    setUser(user);
    setFeedback({ ...feedback , userId: user.firstname })
    console.log("USER: " + user.firstname)
  });
  
  
}, []);

  return (
    <Container style={{ marginBottom: '1%' }}>
      <Typography variant="h6" component="h6" style={{ color: "#4e888f", marginBottom: "1%", marginTop: '1%' }}>
        Review Snapshot
      </Typography>
      <Box>
        <Typography component="legend">Rate the plan</Typography>
        <p><Rating value={ratingValue} onChange={(e, val) =>  { setFeedback({ ...feedback , rating: val })}}/></p>
        <Grid>
          <Row>
            <Col sm={11}>
              <TextField id="standard-basic" onChange={(e, val) =>  { setFeedback({ ...feedback , feedback: e.target.value })}} label="Write a review" variant="standard" style={{ width: '100%' }} />
            </Col>
            <Col sm={1}>
              <Button variant="contained" style={{ backgroundColor: '#4e888f' }} onClick={handleFeedback} endIcon={<SendIcon />}>
                Send
              </Button>
            </Col>
          </Row>
        </Grid>
      </Box>
      {feedbacks.length == 0 ? <p>No reviews Yet</p> : ""}
      {feedbacks.map((feedback) => (
            <Card style={{ marginTop: '1%', padding: '1%' }}>
            <Grid>
              <Row>
                <Col sm={11}>
                  <Typography variant='h6'>{feedback.userId}</Typography>
                  <Rating value={feedback.rating} readOnly></Rating>
                  <Typography variant="subtitle2" gutterBottom component="div">
                                 <p>{feedback.feedback}</p>
                  </Typography>
                </Col>
                <Col sm={1}>
                  <DeleteIcon />
                </Col>
              </Row>
            </Grid>
          </Card>
        ))}
    </Container>
  )
}

export default FeedBack