import {
  CssBaseline,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/Firebase/useAuth";
import getUrl from "../../../Utilits/getUrl";
import Notification from "../../Notification/Notification";

const MakeReview = () => {
  const { user } = useAuth();
  const [review, setReview] = useState({});
  const handelOnBlur = (data) => {
    const createReview = { ...review };
    createReview[data.target.name] = data.target.value;
    createReview["email"] = user?.email;
    createReview["name"] = user?.displayName;
    setReview(createReview);
  };

  const handelSubmit = (e) => {
    const url = getUrl("reviews");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Notification("success", "Reviews added Successfully");
        }
      });
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxwidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={8} sx={{ mx: "auto" }}>
            <Paper elevation={3}>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", padding: "30px 0" }}
              >
                Please Give a Reviews
              </Typography>
              <form onSubmit={handelSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography>Rating</Typography>{" "}
                  <Rating name="rating" onBlur={handelOnBlur} />
                </Box>
                <Box sx={{ textAlign: "center", paddingBottom: "20px" }}>
                  <TextField
                    label="Reviews messages"
                    multiline
                    maxRows={4}
                    fullWidth
                    style={{ width: "80%" }}
                    name="message"
                    onBlur={handelOnBlur}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "80%", margin: "20px 0" }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MakeReview;
