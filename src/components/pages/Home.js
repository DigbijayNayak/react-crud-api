import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import List from "../student/List";

// import axios from "axios";

import { useState } from "react";

const Home = () => {
  //   const classes = useStyles();
  const student = new Object();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState();

  async function onFormSubmit(e) {
    e.preventDefault();
    student.name = name;
    student.email = email;
    console.log(student);
    try {
      fetch("https://crudcrud.com/api/13330f0d5c1c42728715e7f0360a26b3/student", {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify(student),
      }).then((response) => response.json());
      setStatus(true);
      // await axios.post(
      //   `https://crudcrud.com/6999a68bc15749aba3177fd10d64e316/student`,
      //   {
      //     method: "post",
      //     body: JSON.stringify(student),
      //     headers: {
      //       Content_Type: "application/json; charset=utf-8",
      //     },
      //   }
      // );
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  if (status) {
    return <Home />;
  }
  return (
    <>
      <Box textAlign="center" p={2} mb={2}>
        <Typography
          variant="h2"
          style={{ backgroundColor: "#3f2a0d", color: "white" }}
        >
          React CRUD With API Call
        </Typography>
      </Box>

      <Grid container justify="center" spacing={4}>
        <Grid item md={2}></Grid>
        <Grid item md={4} xs={6}>
          <Box textAlign="center" p={2}>
            <Typography
              variant="h4"
              style={{
                backgroundColor: "#574226",
                color: "white",
                width: "448px",
                marginLeft: "2px",
              }}
            >
              Add Student
            </Typography>
          </Box>
          <form>
            <Grid container spacing={2} mb={1}>
              <Grid item xs={11} style={{ marginLeft: "19px" }}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                ></TextField>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={11} style={{ marginLeft: "19px" }}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
              </Grid>
            </Grid>

            <Box m={2} style={{ marginRight: "19px" }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
                style={{
                  backgroundColor: "#141311",
                  color: "white",
                }}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={4} xs={12}>
          <List />
        </Grid>

        <Grid item md={2}></Grid>
      </Grid>
    </>
  );
};

export default Home;
