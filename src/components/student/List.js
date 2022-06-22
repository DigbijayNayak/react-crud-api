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
import { deepPurple } from "@mui/material/colors";

const List = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllStudent();
  }, []);

  async function getAllStudent() {
    try {
      const students = await axios.get(
        "https://crudcrud.com/api/3197231c0a2f4a3d9828b109d339d6b9"
      );
      //   console.log(students.data);
      setStudents(students.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
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
                  <TableCell align="center">{student.stuname}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell>
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <VisibilityIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <EditIcon />
                        </Link>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <IconButton>
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
