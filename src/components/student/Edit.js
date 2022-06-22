import { Typography, Box, Grid, TextField, Button, Link } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import List from "../student/List";
// export const useStyles = makeStyles({
//   headingColor: {
//     backgroundColor: deepPurple[400],
//     color: "white",
//   },
// });
const Edit = () => {
  //   const classes = useStyles();

  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });
  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(
          `https://crudcrud.com/api/3197231c0a2f4a3d9828b109d339d6b9${id}`
        );
        // console.log(student.data);
        setStudent(student.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, [id]);

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(
        `https://crudcrud.com/api/3197231c0a2f4a3d9828b109d339d6b9/${id}`,
        student
      );
      navigate("/", { replace: true });
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  function handleClick() {
    navigate("/", { replace: true });
  }
  return (
    <>
      <Box textAlign="center" p={2} mb={2}>
        <Typography variant="h2">React Edit with API Call</Typography>
      </Box>

      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4" style={{ backgroundColor: "#616161" }}>
              Add Student
            </Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value="1"
                  disabled
                ></TextField>
              </Grid>
            </Grid>

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
                  value={student.stuname}
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
                  value={student.email}
                  onChange={(e) => onTextFieldChange(e)}
                  autoFocus
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
                Update
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button variant="conatined" color="primary" onClick={handleClick}>
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
