import { Typography, Box, Grid, TextField, Button, Link } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import List from "../student/List";

import axios from "axios";

import { useState } from "react";
// export const useStyles = makeStyles({
//   headingColor: {
//     backgroundColor: deepPurple[400],
//     color: "white",
//   },
// });
const Home = () => {
  //   const classes = useStyles();
  const [student, setStudent] = useState({
    student: "",
    email: "",
  });

  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  //   function onNameChange() {
  //     setStudent({
  //       stuname: e.target.value,
  //     });
  //   }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        `https://crudcrud.com/api/3197231c0a2f4a3d9828b109d339d6b9`,
        student
      );
      setStatus(true);
      //   console.log(student.data);
      //   setStudent(student.data);
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
          <form noValidate>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  autoFocus
                  onChange={(e) => onTextFieldChange(e)}
                ></TextField>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoFocus
                  onChange={(e) => onTextFieldChange(e)}
                ></TextField>
              </Grid>
            </Grid>

            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit()}
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
