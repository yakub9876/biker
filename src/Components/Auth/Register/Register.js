import React, { useState } from "react";
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
  Button,
  Spinner,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/Firebase/useAuth";
import Navication from "../../Frontend/Shared/Navication/Navication";
import Notification from "../../Notification/Notification";

const Register = () => {
  const { register, isLoding } = useAuth();
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
    const rePassword = registerData.rePassword;
    if (password !== rePassword) {
      Notification("error", "Your Password did not Match");
    }
    const name = registerData.displayName;
    const email = registerData.email;
    // console.log(email, password, name);
    register(email, password, name, histoty, location);
    e.preventDefault();
  };

  return (
    <>
      <Navication />
      <Container>
        <Row>
          <h1 className="text-center">Register</h1>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
            <form onSubmit={handleRegisterSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="displayName">
                  <i className="fas fa-user"></i>
                </InputGroup.Text>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="displayName"
                  name="displayName"
                  onBlur={handleOnBlur}
                />
              </InputGroup>
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
              <InputGroup className="mb-3">
                <InputGroup.Text id="re-password">
                  <i className="fas fa-lock"></i>
                </InputGroup.Text>
                <FormControl
                  placeholder="re-password"
                  aria-label="password"
                  aria-describedby="password"
                  type="password"
                  name="rePassword"
                  onBlur={handleOnBlur}
                />
              </InputGroup>
              <Button className="form-control" type="submit">
                Register
                {isLoding && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </Button>
            </form>

            <NavLink to="/login">Already Registered? Please Login</NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
