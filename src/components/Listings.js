import React from "react";
import { Link } from "react-router-dom";
// import the listings from the redux state
import listings from "../listings.json"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import cookie from "cookie";

const Listings = (props) => {
    // Potentially add a console log here for the props to ensure they're being passed from redux

    const cookies = cookie.parse(document.cookie);
    const isLoggedIn = cookies.loggedIn === 'true';

    const handleDelete = (id) => {
        // TODO: Implement the logic to delete the listing with the given ID
        console.log(`Deleting listing with ID ${id}`);
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
                    {listings.map((listing, idx) => (
                        <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Link className="business-link" to={`/business/${listing.id}`}>{listing.Name}</Link>
                            </TableCell>
                            <TableCell align="left">{listing.Description}</TableCell>
                            <TableCell align="left">{listing.Open_Time}</TableCell>
                            <TableCell align="left">{listing.Close_Time}</TableCell>
                            <TableCell align="left">{listing.Address}</TableCell>
                            {isLoggedIn && (
                            <TableCell align="left">
                                <button onClick={() => handleDelete(listing.id)}>Delete</button>
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

export default Listings;