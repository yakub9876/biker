import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SubscribeSection.css";
const SubscribeSection = () => {
  return (
    <Container className="subscribe_section py-5" fluid>
      <Row>
        <Col className="col-12 col-sm-12 col-md-12 col-lg-12">
          <h1 className="text-center">Subscribe Now</h1>
          <div className="subscribe text-center">
            <input
              type="text"
              className="w-25 p-2"
              placeholder="Enter your Email"
            />
            <button type="submit" className="btn btn-primary p-2 ms-2">
              Subscribe Now
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscribeSection;
