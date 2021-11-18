/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
  Spinner,
  Button,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/Firebase/useAuth";
import Navication from "../../Frontend/Shared/Navication/Navication";

const Login = () => {
  const { login, isLoding, user } = useAuth();
  const [registerData, setRegisterData] = useState({});
  const histoty = useHistory();
  const location = useLocation();
  const handleOnBlur = (data) => {
    const newLoginData = { ...registerData };
    newLoginData[data.target.name] = data.target.value;
    setRegisterData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    const password = registerData.password;
    const email = registerData.email;
    login(email, password, histoty, location);
    e.preventDefault();
  };
  const rediract = location.state?.from || "/";
  useEffect(() => {
    user?.email ? histoty.push(rediract) : "";
  }, [user, histoty, rediract]);
  return (
    <>
      <Navication />
      <Container>
        <Row>
          <h1 className="text-center">Login</h1>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
            <form onSubmit={handleRegisterSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="email">
                  <i className="fas fa-envelope"></i>
                </InputGroup.Text>
                <FormControl
                  placeholder="UserE-mail"
                  aria-label="email"
                  aria-describedby="email"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="password">
                  <i className="fas fa-lock"></i>
                </InputGroup.Text>
                <FormControl
                  placeholder="password"
                  aria-label="password"
                  aria-describedby="password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                />
              </InputGroup>

              <Button className="form-control" type="submit">
                Login
                {isLoding && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </Button>
            </form>
            <NavLink to="/register">Don't have an account?</NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
