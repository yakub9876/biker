import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Switch, Link, useRouteMatch, Route } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import AddServices from "../Services/AddServices";
import useAuth from "../../../hooks/Firebase/useAuth";
import { Button } from "@mui/material";
import AdminRoute from "../../../PrivetRoute/AdminRoute";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Services from "../Services/Services";
import MakeAdmin from "../Admin/MakeAdmin";
import "./Dashboard.css";
import MyOrders from "../MyOrder/MyOrders";
import MakeReview from "../MakeReview/MakeReview";
import ManageOrders from "../MangeOrders/ManageOrders";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import StarHalfIcon from '@mui/icons-material/StarHalf';
const drawerWidth = 240;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { LogOut, admin } = useAuth();
  const handelLogout = () => {
    LogOut();
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="a" as={Link} to="/home">
          Client Site
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
            <ListItemText
              as={Link}
              to={`${url}`}
              primary="Dashboard"
              sx={{ ml: 1 }}
            ></ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ListAltIcon />
            <ListItemText
              as={Link}
              to={`${url}/myorder`}
              primary="My-Order"
              sx={{ ml: 1 }}
            ></ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AttachMoneyIcon />
            <ListItemText
              as={Link}
              to={`${url}/pay`}
              primary="pay"
              sx={{ ml: 1 }}
            ></ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StarHalfIcon />
            <ListItemText
              as={Link}
              to={`${url}/reviews`}
              primary="Reviews"
              sx={{ ml: 1 }}
            ></ListItemText>
          </ListItemIcon>
        </ListItem>
        {admin && (
          <Box>
            <ListItem>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
                <ListItemText
                  as={Link}
                  to={`${url}/make/admin`}
                  primary="Make Admin"
                  sx={{ ml: 1 }}
                ></ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InsertInvitationIcon />
                <ListItemText
                  as={Link}
                  to={`${url}/services`}
                  primary="Services"
                  sx={{ ml: 1 }}
                ></ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PostAddIcon />
                <ListItemText
                  as={Link}
                  to={`${url}/add/services`}
                  primary="Add Services"
                  sx={{ ml: 1 }}
                ></ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BorderAllIcon />
                <ListItemText
                  as={Link}
                  to={`${url}/orders`}
                  primary="Manage-Orders"
                  sx={{ ml: 1 }}
                ></ListItemText>
              </ListItemIcon>
            </ListItem>
          </Box>
        )}
        <ListItem>
          <ListItemIcon>
            <LogoutIcon />
            <Button onClick={handelLogout} sx={{ ml: 1 }}>
              LogOut
            </Button>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          zIndex: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            {(admin && <h1>Admin Dashboard</h1>) || <DashboardHome />}
          </Route>
          <Route exact path={`${path}/myorder`}>
            <MyOrders />
          </Route>
          <Route exact path={`${path}/pay`}>
            <h1>Payment system coming soon.</h1>
          </Route>

          <Route exact path={`${path}/services`}>
            <Services />
          </Route>
          <AdminRoute exact path={`${path}/add/services`}>
            <AddServices />
          </AdminRoute>
          <AdminRoute exact path={`${path}/make/admin`}>
            <MakeAdmin />
          </AdminRoute>
          <Route exact path={`${path}/reviews`}>
            <MakeReview />
          </Route>
          <AdminRoute exact path={`${path}/orders`}>
            <ManageOrders />
          </AdminRoute>
          {/* <AdminRoute exact path={`${path}/order/review`}>
            <h1>Order Page</h1>
          </AdminRoute> */}
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
