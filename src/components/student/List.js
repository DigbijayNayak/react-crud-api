import React from "react";
import { Delete } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
} from "@mui/material";

const List = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllStudent();
  }, []);

  async function getAllStudent() {
    try {
      const students = await axios.get(
        "https://crudcrud.com/api/b7364a6bda2941f08f394fc73663a066/student"
      );
      setStudents(students.data);
      console.log(students.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  const handleDelete = async id => {
    await axios.delete(`https://crudcrud.com/api/b7364a6bda2941f08f394fc73663a066/student/${id}`);
    var newstudent = students.filter((item) => {
     // console.log(item);
     return item.id !== id;
    })
    setStudents(newstudent);
   }

  return (
    <div>
      <Box textAlign="center" p={2}>
        <Typography variant="h4" style={{ backgroundColor: "#616161" }}>
          Student List
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#616161" }}>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i}</TableCell>
                  <TableCell align="center">{student.name}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell>
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/view/${student._id}`}>
                          <VisibilityIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit">
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
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
