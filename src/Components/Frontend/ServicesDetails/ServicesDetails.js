import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../../hooks/Firebase/useAuth";
import getUrl from "../../../Utilits/getUrl";
import Notification from "../../Notification/Notification";
import Footer from "../Shared/Footer/Footer";
import Navication from "../Shared/Navication/Navication";

const ServicesDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { user } = useAuth();
  const [orderData, setOrderData] = useState({});
  useEffect(() => {
    const url = getUrl(`services/${id}`);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  });
  const handelOnBlur = (data, defaultValue) => {
    const newOrderData = { ...orderData };
    newOrderData[data.target.name] = data.target.value;
    newOrderData["name"] = user.displayName;
    newOrderData["email"] = user.email;
    newOrderData["id"] = id;
    newOrderData["status"] = "panding";
    newOrderData["title"] = service.title;
    newOrderData["price"] = service?.price;
    newOrderData["img"] = service.img;
    setOrderData(newOrderData);
  };
  const handleSubmit = (e) => {
    const url = getUrl("orders");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.insertedId) {
          Notification("success", "Order added Successfully");
        }
      });
    e.preventDefault();
  };
  return (
    <>
      <Navication />
      <Container className="my-5">
        <Row>
          <Col className="col-12 col-sm-12 col-md-8 col-lg-8 ">
            <div className="card">
              <img
                src={service?.img}
                className="card-img-top w-50 m-auto"
                alt={service.title}
                style={{ height: "50%" }}
              />
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <h4 className="card-subtitle">$ {service.price}</h4>
                <p className="card-text">{service?.message}</p>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Give Your Info</h5>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="input-group">
                        <div className="input-group-text">
                          <i className="fas fa-user"></i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="autoSizingInputGroup"
                          placeholder="Username"
                          defaultValue={user?.displayName}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="input-group">
                        <div className="input-group-text">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="autoSizingInputGroup"
                          placeholder="Username"
                          defaultValue={user?.email}
                          name="email"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="input-group">
                        <div className="input-group-text">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="autoSizingInputGroup"
                          placeholder="Phone Number"
                          name="phone"
                          onBlur={handelOnBlur}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div className="input-group">
                        <div className="input-group-text">
                          <i className="fas fa-address-card"></i>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="autoSizingInputGroup"
                          placeholder="Address"
                          name="address"
                          onBlur={handelOnBlur}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div className="input-group">
                        <div className="input-group-text">
                          <i className="fas fa-user-tag"></i>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          id="autoSizingInputGroup"
                          placeholder="quantity"
                          name="quantity"
                          onBlur={handelOnBlur}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="input-group">
                        <div className="input-group-text">
                          <i className="fas fa-comments"></i>
                        </div>
                        <textarea
                          rows="2"
                          className="form-control"
                          id="autoSizingInputGroup"
                          placeholder="Message..."
                          name="message"
                          onBlur={handelOnBlur}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button href="#home" className="btn btn-primary">
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ServicesDetails;
