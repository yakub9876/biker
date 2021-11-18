import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/Firebase/useAuth";
import getUrl from "../../../Utilits/getUrl";
import Notification from "../../Notification/Notification";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const url = getUrl(`orders/${user?.email}`);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  //   console.log(orders);
  //   Delete Service
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
              const newOrders = orders.filter((order) => order._id !== id);
              setOrders(newOrders);
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
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={order?.img}
                      alt={order?.title}
                      style={{ height: "50px" }}
                    />
                  </td>
                  <td>{order?.title}</td>
                  <td>
                    {order?.price * order?.quantity}x{order?.quantity}{" "}
                    <sub>Tk</sub>{" "}
                  </td>
                  <td>
                    {(order.status === "approved" && (
                      <div className="btn btn-sm btn-success disable" readOnly>
                        {order.status}
                      </div>
                    )) || (
                      <div className="btn btn-sm btn-danger disable" readOnly>
                        {order.status}
                      </div>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handelDelete(order?._id)}
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

export default MyOrders;
