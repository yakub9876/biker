import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import getUrl from "../../../Utilits/getUrl";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = getUrl("services");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container className="mt-5">
      <Row className="g-4">
        <h3 className="text-center">Baby Accessories</h3>
        {services.slice(0, 6).map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
