import React, { useState, useContext } from "react";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { UserContext } from "../../App";


const MyRegistration = () => {

    const currentUser = useContext(UserContext);
    // const {onSellCopyList} = currentUser.userState.shops[0];
    console.log(currentUser);

    return (
        <div>
            <div>
                <div>My Registration</div>
                <div>
                    <Button
                        startIcon={<HistoryOutlinedIcon/>}
                    >Sale History</Button>
                    <Button
                        startIcon={<AddOutlinedIcon/>}
                    >New Registration</Button>
                </div>
            </div>
            <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Cover</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* {onSellCopyList.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    );
}

export default MyRegistration;