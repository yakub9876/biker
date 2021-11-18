import {
  CssBaseline,
  TextField,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import getUrl from "../../../Utilits/getUrl";
import Notification from "../../Notification/Notification";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState({});
  const handleOnBlur = (data) => {
    const newAdmin = { ...admin };
    newAdmin[data.target.name] = data.target.value;
    newAdmin["role"] = "Admin";
    setAdmin(newAdmin);
  };
  const handleSubmit = (e) => {
    const url = getUrl("makeadmin");

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Notification("success", "Admin Created Successfully");
        }
      });
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: "0 auto" }}>
            <Typography variant="body1">Add Services</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                id="standard-basic"
                label="Make Admin"
                variant="standard"
                sx={{ width: "100%", mt: 1 }}
                onBlur={handleOnBlur}
                name="email"
              />

              <Button
                variant="contained"
                type="submit"
                sx={{ width: "100%", mt: 1 }}
              >
                Add Service
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MakeAdmin;
