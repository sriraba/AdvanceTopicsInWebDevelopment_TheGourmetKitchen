import { Card, Grid, Rating, Typography } from '@mui/material';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DeleteIcon from '@mui/icons-material/Delete';

const Sample = () => {
  return (
    <Container style={{ marginBottom: '1%' }}>
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
              <DeleteIcon />
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
              <DeleteIcon />
            </Col>
          </Row>
        </Grid>
      </Card>
    </Container>
  )
}

export default Sample