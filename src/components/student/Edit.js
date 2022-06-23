import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import List from "../student/List";
const Edit = () => {

  const studentobj = new Object();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState(studentobj);
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(
          `https://crudcrud.com/api/6d07b477ad9c487a8c78c7523e4b1682/student/${id}`
        );
        // console.log(student.data);
        setStudent(student.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, [id]);

  async function onFormSubmit(e) {
    e.preventDefault();
    studentobj.name = name;
    studentobj.email = email;
    try {
      await axios.put(
        `https://crudcrud.com/api/6d07b477ad9c487a8c78c7523e4b1682/student/${id}`,
        studentobj
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
        <Typography variant="h2" style={{ backgroundColor: "#291a05", color: 'white' }}>React Edit with API Call</Typography>
      </Box>
      
      <Grid container justify="center" spacing={4}>
      <Grid md={4}></Grid>
        <Grid item md={4} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h4" style={{ backgroundColor: "#616161", color: "white" }}>
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
                  value={id}
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
                  value={student.name}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
