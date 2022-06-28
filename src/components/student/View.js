import React from "react";
import { Delete } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Link,
  Button,
} from "@mui/material";


const View = () => {
  const { id } = useParams();
  //   console.log(id);
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(
          `https://crudcrud.com/api/13330f0d5c1c42728715e7f0360a26b3/student/${id}`
        );
        //   console.log(student.data);
        setStudent(student.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getStudent();
  }, [id]);

  

  function handleClick() {
    navigate("/");
  }
  const handleDelete = async id => {
    await axios.delete(`https://crudcrud.com/api/13330f0d5c1c42728715e7f0360a26b3/student/${id}`);
    var newstudent = student.filter((item) => {
     // console.log(item);
     return item.id !== id;
    })
    setStudent(newstudent);
   }
  return (
    <div>
      <Box textAlign="center" p={2}>
        <Typography variant="h4" style={{ backgroundColor: "#291a05", color: 'white'}}>
          Student List
        </Typography>
      </Box>
      <TableContainer component={Paper} style={{marginLeft: "16px", width: "98%"}}>
        <Table>
          <TableHead style={{ backgroundColor: "#4f4537" }}>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell align="center">{student._id}</TableCell>
              <TableCell align="center">{student.name}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
              <TableCell>
                <Tooltip title="view">
                  <IconButton>
                    <Link to={`/view/${student._id}`} />
                    <VisibilityIcon color="primary" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="edit">
                  <IconButton>
                    <Link to={`/edit/${student._id}`}>
                      <EditIcon />
                    </Link>
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton onClick={() => handleDelete(student._id)}>
                    <Delete color="secondary" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Back to Home
        </Button>
      </Box>
    </div>
  );
};

export default View;
