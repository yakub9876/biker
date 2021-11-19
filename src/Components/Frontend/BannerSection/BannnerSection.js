import React from "react";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./BannerSection.css";
const BannnerSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "650px", width: "100%", objectFit: "cover" }}
          className="d-block w-100"
          src="https://cache.tradeinn.com/images/banners-home/akrapovic.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="banner_title">For your Lovly Bike</h3>
          <p className="banner_text">
            All quality products for your bike and extra services.
          </p>
          <NavLink to="/services" className="btn btn-lg btn-danger">
            Shop Now
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "650px", width: "100%", objectFit: "cover" }}
          className="d-block w-100"
          src="https://www.mensjournal.com/wp-content/uploads/2017/05/SmallMotorcycles1.jpg?w=1200&h=630&crop=1&quality=86&strip=all"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="banner_title">Quality Bike for sales</h3>
          <p className="banner_text">
            All quality products for your bike and extra services.
          </p>
          <NavLink to="/services" className="btn btn-lg btn-danger">
            Shop Now
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "650px", width: "100%", objectFit: "cover" }}
          className="d-block w-100"
          src="http://wallpaperstock.net/motorbike_wallpapers_39563_852x480.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="banner_title">Everything you need for your Bike</h3>
          <p className="banner_text">
            All quality products for your bike and extra services.
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
