import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import getUrl from "../../../Utilits/getUrl";
import Notification from "../../Notification/Notification";
import Swal from "sweetalert2";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = getUrl("services");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //   Delete Service
  const handelDelete = (id) => {
    const url = getUrl(`services/${id}`);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newService = services.filter(
                (service) => service._id !== id,
              );
              setServices(newService);
              Notification("success", "Deleted Successfully");
            }
          });
      }
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Table responsive>
            <thead>
              <tr>
                <th>#Id</th>
                <th>Img</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={service.img}
                      alt={service.title}
                      style={{ height: "50px" }}
                    />
                  </td>
                  <td>{service.title.substring(1, 20)}...</td>
                  <td>
                    ${service.price} 
                  </td>
                  <td>
                    <button
                      onClick={() => handelDelete(service._id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
