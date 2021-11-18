import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Dashboard from "./Components/Backend/Dashboard/Dashboard";
import Home from "./Components/Frontend/Home/Home";
import ServicesPage from "./Components/Frontend/ServicePage/ServicesPage";
import ServicesDetails from "./Components/Frontend/ServicesDetails/ServicesDetails";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivetRoute path="/dashboard">
            <Dashboard />
          </PrivetRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivetRoute exact path="/service-details/:id">
            <ServicesDetails />
          </PrivetRoute>
          <Route exact path="/services">
            <ServicesPage />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
