import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import getUrl from "../../../Utilits/getUrl";
import Notification from "../../Notification/Notification";

const AddServices = () => {
  const history = useHistory();
  const [service, setService] = useState({});
  const handleOnBlur = (data) => {
    const newServiceData = { ...service };
    newServiceData[data.target.name] = data.target.value;
    setService(newServiceData);
  };
  const handleSubmit = (e) => {
    const url = getUrl("services");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Notification("success", "Service added Successfully");
          history.replace("/dashboard/services");
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
                label="title"
                variant="standard"
                sx={{ width: "100%", mt: 1 }}
                onBlur={handleOnBlur}
                name="title"
              />
              <TextField
                id="standard-basic"
                label="price"
                variant="standard"
                type="number"
                sx={{ width: "100%", mt: 1 }}
                onBlur={handleOnBlur}
                name="price"
              />
              <TextField
                id="standard-basic"
                label="Image Url"
                variant="standard"
                sx={{ width: "100%", my: 2 }}
                onBlur={handleOnBlur}
                name="img"
              />
              <TextField
                label="Reviews messages"
                multiline
                maxRows={4}
                fullWidth
                style={{ margingTop: "10px" }}
                name="message"
                onChange={handleOnBlur}
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

export default AddServices;
