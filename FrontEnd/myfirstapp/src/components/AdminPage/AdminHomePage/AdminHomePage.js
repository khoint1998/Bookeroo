import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import './AdminHomePage.css';
import SearchBar from "material-ui-search-bar";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Redirect } from "react-router-dom";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { GetAllBooks } from '../../../axios/BookAPI';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BlockIcon from '@material-ui/icons/Block';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Formik, Field, Form } from 'formik';


const AdminHomePage = () => {

    const [toRoute,setToRoute] = useState(null);
    const [searchResults, setSearchResults] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const {data} = GetAllBooks();

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    //HOC
    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: '#0066ff',
            color: 'white',
            fontSize:'105%',
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

    if (toRoute) {
        return <Redirect to={toRoute}/>;
    }

    const SearchFoUser = (searchResults) => {

    }

    return (
        <div className="adminHome--page-indent">
            <div className="adminHome--main-screen">
                <span className="adminHome--page-title"><SupervisorAccountIcon fontSize='large'/> Admin Development Workspace</span>
                <hr
                    style={{
                        backgroundColor: '#06f',
                        height: 0
                    }}
                />
                <SearchBar
                    className="header--searchBar"
                    value={searchResults}
                    style={{ 
                        height: '5vh',
                        width: '25vw'
                    }} 
                    onChange={(value) => setSearchResults(value)}
                    placeholder="Search for User ID, Username on BOKEROO."
                    onCancelSearch={() => setSearchResults("")}
                    onRequestSearch={() => SearchFoUser(searchResults)}
                />
                <div className="adminHome--table-title">
                    <span className="adminHome--page-title">Books are now on Sale</span>
                </div>
                <div className="adminHome--table">
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width="5%">ID</StyledTableCell>
                                    <StyledTableCell width="10%">Cover</StyledTableCell>
                                    <StyledTableCell width="30%">Title</StyledTableCell>
                                    <StyledTableCell width="10%">ISBN</StyledTableCell>
                                    <StyledTableCell>Author</StyledTableCell>
                                    <StyledTableCell width="30%">Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data && data.map(row => (
                                    <StyledTableRow key={row.bookId}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.bookId}
                                        </StyledTableCell>
                                        <StyledTableCell><img className="bookSearch--cover" src="/pics/book-2.jpg" alt="book"/></StyledTableCell>
                                        <StyledTableCell>{row.title}</StyledTableCell>
                                        <StyledTableCell>{row.isbn}</StyledTableCell>
                                        <StyledTableCell>{row.author}</StyledTableCell>
                                        <StyledTableCell>
                                            <Button 
                                                variant="contained"
                                                endIcon={<MoreHorizIcon/>}
                                                style={{ 
                                                    backgroundColor: '#0066FF',
                                                    borderRadius:'2vh',
                                                    height: '5vh',
                                                    marginRight: '1.5vw',
                                                    color: 'white',
                                                    outline: 'none'
                                                }}
                                                onClick={() => {
                                                    // seeBookDesc(row.bookId);
                                                }}
                                            >Edit Book Description</Button>
                                            <Button 
                                                variant="contained" 
                                                endIcon={<BlockIcon/>}
                                                style={{ 
                                                    backgroundColor: '#FD0707',
                                                    borderRadius:'2vh',
                                                    height: '5vh',
                                                    color: 'white',
                                                    outline: 'none'
                                                }}
                                                // onClick={() => seeSellers(row.bookId)}
                                            >Block</Button>
                                        </StyledTableCell>
                                    </StyledTableRow>))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
            <div className="adminHome--sub-screen">
                <div className="adminHome--btns">
                    <Button 
                        className="adminHome--submitBtn" 
                        style={{ 
                            border: '2px solid #06f', 
                            borderRadius:'2vh',
                            width: '17vw',
                            color: 'white',
                            outline: 'none'
                        }}
                        onClick={handleOpenDialog}
                    >
                        <span className="adminHome--btn-text">Upload new Book to BOOKEROO</span>
                    </Button>
                </div>
                <div className="adminHome--btns">
                    <Button 
                        className="adminHome--submitBtn" 
                        style={{ 
                            border: '2px solid #06f', 
                            borderRadius:'2vh',
                            width: '17vw',
                            color: 'white',
                            outline: 'none'
                        }}
                        onClick={() => {
                            setToRoute('/incoming-reg')
                        }}
                    >
                        <span className="adminHome--btn-text">View Incoming Registration</span>
                    </Button>
                </div>
                <div className="adminHome--btns">
                    <Button 
                        className="adminHome--submitBtn" 
                        style={{ 
                            border: '2px solid #06f', 
                            borderRadius:'2vh',
                            width: '17vw',
                            color: 'white',
                            outline: 'none'
                        }}
                    >
                        <span className="adminHome--btn-text">View BOOKEROO Monthly Sales</span>
                    </Button>
                </div>
            </div>

            {/* Dialog for Upload new Book */}

            <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><span className="myreg--search-book-dialog-title">Upload a new Book</span></DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Before uploading a new book to BOOKEROO, please make sure you have read BOOKEROO Terms & Conditions for admin uses.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Enter ISBN"
                    fullWidth
                    style={{
                        margin: '2vh 0 3vh 0'
                    }}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Enter Book Title"
                    fullWidth
                    style={{
                        margin: '2vh 0 3vh 0'
                    }}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Enter Author"
                    fullWidth
                    style={{
                        margin: '2vh 0 3vh 0'
                    }}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Brief Description about the Book"
                    fullWidth
                    style={{
                        margin: '2vh 0 3vh 0'
                    }}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Enter Category"
                    fullWidth
                    style={{
                        margin: '2vh 0 3vh 0'
                    }}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Enter Publisher Name"
                    fullWidth
                    style={{
                        marginBottom: '10vh'
                    }}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                    Cancel
                </Button>
                <Button 
                    onClick={() => {
                        // searchForTheBook(selectedTitle,selectedISBN);
                        handleCloseDialog();
                    }} 
                    color="primary"
                >
                    Next
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AdminHomePage;