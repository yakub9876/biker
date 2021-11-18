import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAuth from "../../../hooks/Firebase/useAuth";
import { useHistory } from "react-router";
const Service = ({ service }) => {
  const { title, price, img } = service;
  const { user } = useAuth();
  const history = useHistory();
  const hendleBuyNow = (id) => {
    if (!user?.email) {
      history.replace("/login");
      return;
    }
    history.push(`/service-details/${id}`);
  };
  return (
    <Col className="col-12 col-sm-6 col-md-4 col-md-4 mb-4">
      <Card style={{ width: "h-100" }} className="h-100">
        <Card.Img
          variant="top"
          src={img}
          className="w-100"
          style={{ height: "250px", width: "250px" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex align-items-center justify-content-between my-3">
            <Card.Subtitle>$ {price}</Card.Subtitle>
          </div>
          <Button onClick={() => hendleBuyNow(service._id)} variant="primary">
            <ShoppingCartIcon /> Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
