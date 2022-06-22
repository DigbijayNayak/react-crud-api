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
import { deepPurple } from "@mui/material/colors";

const View = () => {
  const { id } = useParams();
  //   console.log(id);
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getStudent();
  }, [id]);

  async function getStudent() {
    try {
      const student = await axios.get(
        `https://crudcrud.com/api/3197231c0a2f4a3d9828b109d339d6b9/${id}`
      );
      //   console.log(student.data);
      setStudent(student.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  function handleClick() {
    navigate("/");
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
            <TableRow>
              <TableCell align="center">{student.id}</TableCell>
              <TableCell align="center">{student.stuname}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
              <TableCell>
                <Tooltip>
                  <IconButton>
                    <Link to="/view/1" />
                    <VisibilityIcon color="primary" />
                  </IconButton>
                </Tooltip>

                <Tooltip>
                  <IconButton>
                    <Link to="/edit/1">
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
