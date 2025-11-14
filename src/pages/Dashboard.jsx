import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/slice/UserDataSlice";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData.list);
  const loading = useSelector((state) => state.userData.isLoading);

  // console.log(user, "userData");

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={logout}
        className="p-1 m-1 bg-blue-400 text-white rounded-lg hover:bg-blue-700 float-right"
      >
        Logout
      </button>
      <h2 className="text-center text-3xl text-blue-950 font-bold ">
        User List
      </h2>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow className="font-extrabold">
                <TableCell>No.</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="Right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.address.city}</TableCell>
                  <TableCell align="right">{item.phone}</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        // <table className="border-2 p-3 m-3 justify-center">
        //   <thead>
        //     <tr>
        //       <th>No.</th>
        //       <th>Name</th>
        //       <th>Email</th>
        //       <th>Address</th>
        //       <th>Phone</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {user.map((item, index) => (
        //       <tr key={index}>
        //         <td>{index + 1}</td>
        //         <td>{item.name}</td>
        //         <td>{item.email}</td>
        //         <td>{item.address.city}</td>
        //         <td>{item.phone}</td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>
      )}
    </div>
  );
};

export default Dashboard;
