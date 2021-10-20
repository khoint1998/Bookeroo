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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { CreateCopy } from "../../axios/CopyAPI";
import { DeleteRegistration, GetAllRegistrations, UpdateCopyIdAndStatusForRegistration } from "../../axios/RegistrationAPI";
import "./IncomingRegistration.css";
import { withStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DoneIcon from '@material-ui/icons/Done';
import { CartContext } from "../../App";
import { Redirect } from "react-router-dom";

const IncomingRegistrations = () => {

    const cart = useContext(CartContext);

    const [openDialog, setOpenDialog] = useState(false);
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const [selectedRegId, setSelectedRegId] = useState(null);
    const [selectedReg, setSelectedReg] = useState(null);
    const [toRoute,setToRoute] = useState(null);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDetailsDialog = () => {
        setOpenDetailsDialog(false);
    };

    const handleOpenDetailsDialog = () => {
        setOpenDetailsDialog(true);
    };
    
    //HOC
    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: '#0066ff',
            color: 'white',
            fontSize: '2vw',
            fontWeight:'bolder'
        },
        body: {
            fontSize: '1vw',
        },
    }))(TableCell);

    //HOC
    const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);

    const regList = GetAllRegistrations();

    const removeRegistration = (regId) => {
        DeleteRegistration(regId);
        localStorage.setItem("cart", JSON.stringify(cart.cartState));
        window.location.reload();
    }

    const approveRegistration = async (selectedRegId) => {
        const filteredRegList = regList && regList.data && regList.data.filter(reg => reg.registrationId === selectedRegId)
        const copyDto = {
            bookId: filteredRegList[0].bookId,
            newBook: filteredRegList[0].newBook,
            ownerId: filteredRegList[0].userId
        }

        //Create Copy, remeber to await for the next API request (UpdateCopyIdAndStatusForRegistration)
        await CreateCopy(copyDto).then(data => 
            UpdateCopyIdAndStatusForRegistration(selectedRegId,data.data.copyId)
        );
        localStorage.setItem("cart", JSON.stringify(cart.cartState));
        window.location.reload();
    }

    if (toRoute) {
        return <Redirect to={toRoute}/>
    }

    return (
        <div className="inreg--page">
            <div className="inreg--header">
                <div className="inreg--header-name">Incoming Registrations</div>
                <div className="inreg--btns">
                    <Button
                        className="inreg--btn"
                        startIcon={<HistoryOutlinedIcon/>}
                        style={{ 
                            border: '2px solid #06f', 
                            borderRadius:'1vh',
                            height: '5vh',
                            marginRight: '2vw',
                            color: '#06f',
                            fontWeight: 'bolder',
                            outline: 'none'
                        }} 
                    >BOOKEROO Monthly Sale</Button>
                    <Button
                        className="inreg--btn"
                        startIcon={<ArrowForwardIosIcon/>}
                        style={{ 
                            border: '2px solid #06f', 
                            borderRadius:'1vh',
                            height: '5vh',
                            marginRight: '2vw',
                            color: '#06f',
                            fontWeight: 'bolder',
                            outline: 'none'
                        }}
                        onClick={() => {
                            setToRoute('/admin-home')
                        }}
                    >Admin Page</Button>
                </div>
            </div>
            <div className="inreg--table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Cover</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Price</StyledTableCell>
                                <StyledTableCell>Status</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody> 
                            {regList && regList.data && regList.data.map(row => (
                                <StyledTableRow key={row.registrationId}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.registrationId}
                                    </StyledTableCell>
                                    <StyledTableCell><img className="inreg--cover" src={row.coverPage || "/pics/book-2.jpg"} alt="book"/></StyledTableCell>
                                    <StyledTableCell>{row.bookTitle}</StyledTableCell>
                                    <StyledTableCell>${row.price}</StyledTableCell>
                                    <StyledTableCell>{row.status === "approved" ? <span className="inreg--approved-text">Approved</span> : row.status === "pending" ? <span className="inreg--pending-text">Awaiting Approval</span> : <span className="inreg--sold-text">Sold</span>}</StyledTableCell>
                                    <StyledTableCell>
                                        <Button 
                                            variant="contained"
                                            endIcon={<MoreHorizIcon/>}
                                            style={{ 
                                                backgroundColor: '#0066ff',
                                                borderRadius:'2vh',
                                                height: '5vh',
                                                marginRight: '1.5vw',
                                                color: 'white',
                                                fontWeight: 'bolder',
                                                outline: 'none'
                                            }}
                                            onClick={() => {
                                                setSelectedReg(row);
                                                handleOpenDetailsDialog();
                                            }}
                                        >Details</Button>
                                        {row.status === "pending" &&
                                            <Button 
                                                variant="contained"
                                                endIcon={<DoneIcon/>}
                                                style={{ 
                                                    backgroundColor: '#9df656',
                                                    borderRadius:'2vh',
                                                    height: '5vh',
                                                    marginRight: '1.5vw',
                                                    color: 'white',
                                                    fontWeight: 'bolder',
                                                    outline: 'none'
                                                }}
                                                onClick={() => {
                                                    setSelectedRegId(row.registrationId);
                                                    handleOpenDialog();
                                                }}
                                            >Approve</Button>
                                        }
                                        <Button 
                                            variant="contained" 
                                            endIcon={<HighlightOffIcon/>}
                                            style={{ 
                                                backgroundColor: '#fd0707',
                                                borderRadius:'2vh',
                                                height: '5vh',
                                                color: 'white',
                                                fontWeight: 'bolder',
                                                outline: 'none'
                                            }}
                                            onClick={() => removeRegistration(row.registrationId)}
                                        >Delete</Button>
                                    </StyledTableCell>
                                </StyledTableRow>))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            {/* Approve Dialog */}

            <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><span className="inreg--search-book-dialog-title">Approve this Registration?</span></DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Are you sure you want to approve for this registration? 
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                    Cancel
                </Button>
                <Button 
                    color="primary"
                    onClick={() => {
                        approveRegistration(selectedRegId);
                        handleCloseDialog();
                    }}
                >
                    Confirm
                </Button>
                </DialogActions>
            </Dialog>

            {/* Registration details dialog */}

            <Dialog open={openDetailsDialog} onClose={handleCloseDetailsDialog} aria-labelledby="form-dialog-title" maxWidth="xl">
                <DialogTitle id="form-dialog-title"><span className="inreg--search-book-dialog-title">Registration Details</span></DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Details for Registration ID#{selectedReg && selectedReg && selectedReg.registrationId}
                </DialogContentText>
                    <div className="inreg--reg-details-box">
                        <div className="inreg--reg-column">
                            <div className="inreg--reg-details">Registration ID:</div>
                            <div className="inreg--reg-info">{selectedReg && selectedReg.registrationId}</div>
                            <div className="inreg--reg-details">Status:</div>
                            <div className="inreg--reg-info">{selectedReg && selectedReg.status === "approved" ? <span className="inreg--approved-text">Approved</span> : selectedReg && selectedReg.status === "pending" ? <span className="inreg--pending-text">Awaiting Approval</span> : <span className="inreg--sold-text">Sold</span>}</div>
                            <div className="inreg--reg-details">Copy ID:</div>
                            <div className="inreg--reg-info">{selectedReg && selectedReg.copyId === null? <span className="inreg--sold-text">Not yet applied</span> : selectedReg && selectedReg.copyId}</div>
                            <div className="inreg--reg-details">Book Title:</div>
                            <div className="inreg--reg-info">{selectedReg && selectedReg.bookTitle}</div>
                        </div>
                        <div className="inreg--reg-column">
                        <div className="inreg--reg-details">Book ID:</div>
                            <div className="inreg--reg-info">{selectedReg && selectedReg.bookId}</div>
                            <div className="inreg--reg-details">Owner ID:</div>
                            <div className="inreg--reg-info">{selectedReg && selectedReg.userId}</div>
                            <div className="inreg--reg-details">Created At:</div>
                            <div className="inreg--reg-info">{selectedReg && selectedReg.create_At}</div>
                            <div className="inreg--reg-details">Desired Price:</div>
                            <div className="inreg--reg-info">${selectedReg && selectedReg.price}</div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions
                    style={{
                        margin: '0 0 1vw 0',
                        justifyContent: 'center'
                    }}
                >
                <Button onClick={handleCloseDetailsDialog} color="primary">
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default IncomingRegistrations;