import { Typography, Box, Grid, TextField, Button} from "@mui/material";
import List from "../student/List";

import axios from "axios";

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
      await axios.post(
        "https://crudcrud.com/b7364a6bda2941f08f394fc73663a066/student",
        student
      );
      setStatus(true);
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
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>

      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4" style={{ backgroundColor: "#616161" }}>
              Add Student
            </Typography>
          </Box>
          <form>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={11} ml={3}>
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
              <Grid item xs={11} ml={3}>
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

            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
