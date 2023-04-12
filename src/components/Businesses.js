import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import cookie from "cookie";

const Businesses = (props) => {

    const cookies = cookie.parse(document.cookie);
    const isLoggedIn = cookies.loggedIn === 'true';

    const handleDelete = (idx) => {
        props.removeBusiness(idx)
      };

    return (
        <div className="list-body">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Open Time</TableCell>
                        <TableCell align="left">Close Time</TableCell>
                        <TableCell align="left">Address</TableCell>
                        {isLoggedIn ? (
                        <TableCell align="left">Delete</TableCell>
                        ) : null}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.businesses.map((business, idx) => (
                        <TableRow
                        key={business.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Link className="business-link" to={`/business/${business.id}`}>{business.Name}</Link>
                            </TableCell>
                            <TableCell align="left">{business.Description}</TableCell>
                            <TableCell align="left">{business.Open_Time}</TableCell>
                            <TableCell align="left">{business.Close_Time}</TableCell>
                            <TableCell align="left">{business.Address}</TableCell>
                            {isLoggedIn && (
                            <TableCell align="left">
                                <DeleteIcon
                                    onClick={() => handleDelete(idx)}
                                    className="icon text-red"
                                />
                            </TableCell>
                            )}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Businesses;