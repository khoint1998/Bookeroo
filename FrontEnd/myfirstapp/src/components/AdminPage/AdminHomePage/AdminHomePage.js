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

const AdminHomePage = (props) => {

    const [toRoute,setToRoute] = useState(null);

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
                    // value={searchResults}
                    style={{ 
                        height: '5vh',
                        width: '25vw'
                    }} 
                    // onChange={(value) => setSearchResults(value)}
                    placeholder="Search for User ID, Username on BOKEROO."
                    // onCancelSearch={() => setSearchResults("")}
                    // onRequestSearch={() => SearchFor(searchResults)}
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
                                {/* Books not found is for the first render, searchedBooks is for self rerender */}
                                {/* {searchedBooks &&  searchedBooks !== 'Books not found' && searchedBooks.map(row => (
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
                                                    seeBookDesc(row.bookId);
                                                }}
                                            >Edit Book Description</Button>
                                            <Button 
                                                variant="contained" 
                                                endIcon={<StoreIcon/>}
                                                style={{ 
                                                    backgroundColor: '#FD0707',
                                                    borderRadius:'2vh',
                                                    height: '5vh',
                                                    color: 'white',
                                                    outline: 'none'
                                                }}
                                                onClick={() => seeSellers(row.bookId)}
                                            >Block</Button>
                                        </StyledTableCell>
                                    </StyledTableRow>))
                                } */}
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
                        <span className="adminHome--btn-text">Download BOOKEROO Monthly Sales</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AdminHomePage;