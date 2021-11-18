import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import getUrl from "../../../Utilits/getUrl";

const Reviews = () => {
  const [reviews, setSeviews] = useState([]);
  useEffect(() => {
    const url = getUrl("reviews");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSeviews(data));
  }, []);
  return (
    <Container style={{ marginTop: "80px", marginBottom: "80px" }}>
      <Row className="g-4 ">
        <h1 className="text-center">Customer Reviews</h1>
        {reviews.map((review) => (
          <Col key={review._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card bg="light" text="dark" className="mb-2">
              <Card.Body>
                <Card.Title> {review.name} </Card.Title>
                <Card.Text>{review.message}</Card.Text>
                <Card.Subtitle>
                    <Rating value={parseInt(review.rating)} readOnly></Rating>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
