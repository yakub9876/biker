import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./OfferSection.css";
const OfferSection = () => {
  return (
    <Container fluid className="m-0 p-0 mt-5">
      <div className="banner-container">
        <div className="banner_item">
          <div className="banner_details text-center">
            <h1>Baby Fashion</h1>
            <p className="mb-3">flat 50% off</p>
            <NavLink to="/services" className="btn btn-lg btn-danger">Shop Now</NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OfferSection;
