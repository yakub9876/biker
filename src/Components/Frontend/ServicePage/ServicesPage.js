import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import getUrl from "../../../Utilits/getUrl";
import Reviews from "../Reviews/Reviews";
import Service from "../Service/Service";
import Footer from "../Shared/Footer/Footer";
import Navication from "../Shared/Navication/Navication";
import SubscribeSection from "../SubscribeSection/SubscribeSection";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = getUrl("services");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <Navication />
      <Container>
        <Row>
          <h1 className="text-center my-5">Shop Now</h1>
          {services.map((service, index) => (
            <Service service={service} key={index} />
          ))}
        </Row>
      </Container>
      <Reviews />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default ServicesPage;
