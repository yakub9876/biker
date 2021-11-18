import React from "react";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./BannerSection.css";
const BannnerSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/XSzB63n/banner-1920-X.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="banner_title">For your Lovly Baby</h3>
          <p className="banner_text">
            With the most safe products for your baby like
          </p>
          <NavLink to="/services" className="btn btn-lg btn-danger">
            Shop Now
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/d5P6k3Q/slideshow-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="banner_title">Safe Toys for Kids</h3>
          <p className="banner_text">
            With the most safe products for your baby like mother care.
          </p>
          <NavLink to="/services" className="btn btn-lg btn-danger">
            Shop Now
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/f00zgW6/slideshow-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="banner_title">Everything you need for your Baby</h3>
          <p className="banner_text">
            All quality products for your baby like mothers care.
          </p>
          <NavLink to="/services" className="btn btn-lg btn-danger">
            Shop Now
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BannnerSection;
