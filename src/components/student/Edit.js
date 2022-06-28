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
          `https://crudcrud.com/api/13330f0d5c1c42728715e7f0360a26b3/student/${id}`
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
        `https://crudcrud.com/api/13330f0d5c1c42728715e7f0360a26b3/student/${id}`,
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
        <Typography variant="h2" style={{ backgroundColor: "#3f2a0d", color: 'white' }}>React Edit with API Call</Typography>
      </Box>
      
      <Grid container justify="center" spacing={4}>
      <Grid md={4}></Grid>
        <Grid item md={4}>
          <form noValidate>
          <Box textAlign="center" p={2} mb={2} style={{width: "500px"}}>
            <Typography variant="h4" style={{ backgroundColor: "#574226", color: "white", margin: "auto"}}>
              Edit Student
            </Typography>
          </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                  style={{marginLeft: "20px"}}
                  disabled
                ></TextField>
              </Grid>
            </Grid>

            <Grid container spacing={2} mb={2} mt={2}>
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
                  style={{marginLeft: "20px"}}
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
                  style={{marginLeft: "20px"}}
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
                fullWidth
                onClick={(e) => onFormSubmit(e)}
                style={{backgroundColor: "#141311", width: "485px"}}
              >
                Update
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button variant="conatined" style={{backgroundColor: "blue"}} onClick={handleClick}>
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
