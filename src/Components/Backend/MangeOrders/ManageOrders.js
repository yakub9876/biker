/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import getUrl from "../../../Utilits/getUrl";
import Notification from "../../Notification/Notification";
const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  //   get Orders
  useEffect(() => {
    const url = getUrl("orders");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  //   Delete Order
  const handelDelete = (id) => {
    const url = getUrl(`orders/${id}`);
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
              const newService = orders.filter((service) => service._id !== id);
              setOrders(newService);
              Notification("success", "Deleted Successfully");
            }
          });
      }
    });
  };
  //   Status Update
  const [status, setStatus] = useState("");
  const handleStaus = (id) => {
    const url = getUrl(`orders/status/${id}`);
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setStatus("approved");
          Notification("success", "Status updatet Successfully");
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
                <th>userDatls</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={Math.random()}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={order.img}
                      alt={order.title.substring(1, 20)}
                      style={{ height: "50px" }}
                    />
                  </td>
                  <td>{order.title}</td>
                  <td>
                    Name:{order.name} <br />
                    email: {order.email} <br />
                    phone: {order.phone} <br />
                    address: {order.address}
                  </td>
                  <td>
                    {order.price} <sub>Tk</sub>{" "}
                  </td>
                  {((order.status === "approved" || status === "approved") && (
                    <td>
                      <button className="btn btn-sm btn-success">
                        approved
                      </button>
                    </td>
                  )) || (
                    <td onClick={() => handleStaus(order._id)}>
                      <button className="btn btn-sm btn-danger">
                        {"panding"}
                      </button>
                    </td>
                  )}

                  <td>
                    <button
                      onClick={() => handelDelete(order._id)}
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

export default ManageOrders;
