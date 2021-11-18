import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"
const Footer = () => {
    return (
        <Container fluid className="bg-dark py-5 footer_section">
        <Row className="">
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="footer-details text-white">
              <img
                src={`https://i.ibb.co/yBY0Hk3/logo.png`}
                className="w-fluid"
                alt=""
              />
              <p className="text-white mt-3 w-75">
                Winter is the coldest season of the year in polar and temperate
                zones. It occurs after autumn and before spring in each year.
                Winter is caused by the axis ...
              </p>
              <ul>
                <li>
                  <i className="fas fa-envelope"></i>{" "}
                  <span className="ms-3">kawsar721g@gmail.com</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span className="ms-3">+88017-98021438</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span className="ms-3">Fullbaria, Mymensingh</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex footer_right justify-content-around align-items-center text-white">
              <img
                src={`https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png`}
                className="w-fluid"
                alt=""
              />
              <p>&copy;CopyRigh by Kawsar</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default Footer;