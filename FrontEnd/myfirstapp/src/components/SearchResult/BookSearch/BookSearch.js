import React, {useState, useEffect} from 'react';
import SearchBar from "material-ui-search-bar";
import { Redirect } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import './BookSearch.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import StoreIcon from '@material-ui/icons/Store';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { SearchBookWithSelectedOptions } from "../../../axios/BookAPI";

const BookSearch = (props) => {

    const {searchedBooks, searchedTitle} = props.location.state;

    const [searchResults, setSearchResults] = useState(searchedTitle);
    const [toRoute,setToRoute] = useState(null);
    const [selectedBook,setSelectededBook] = useState(null);
    const [resultList, setResultList] = useState(searchedBooks);
    const [searchTitle, setSearchTitle] = useState(searchedTitle);

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

    const SearchFor = async (searchResults) => {
        if(searchResults !== '') {
            setSearchTitle(searchResults);

            const options = {
                title: true,
                author: true,
                isbn: true
            };
            
            await SearchBookWithSelectedOptions(searchResults,options).then(data => setResultList(data));
            if (resultList !== 'Books not found') {
                setToRoute("/book-search");
                window.location.reload();
            } else {
                //throw error message for the user
            }
        } 
    }

    const seeSellers = (bookId) => {

    }

    const openBookDesc = () => {

    }

    if (toRoute === "/book-search") {
        return (
          <div>
            <Redirect 
                to={{
                    pathname: toRoute,
                    state: { 
                        searchedBooks: resultList[0],
                        searchedTitle: searchResults
                    }
                }} 
            />
          </div>
        );
    }

    if (toRoute === '/book-desc') {
        return (
          <div>
            <Redirect 
                to={{
                    pathname: toRoute,
                    state: { selectedBook: selectedBook }
                }} 
            />
          </div>
        );
    }

    return (
        <div>
            <div className="bookSearch--search-section">
                <div className="bookSearch--search-section-bar">
                    <SearchBar
                        className="header--searchBar"
                        value={searchResults}
                        style={{ 
                            height: '7vh',
                        }} 
                        onChange={(value) => setSearchResults(value)}
                        placeholder="Search for a Book Title, Author or ISBN."
                        onCancelSearch={() => setSearchResults("")}
                        // disabled
                        onRequestSearch={() => SearchFor(searchResults)}
                    />
                </div>
                <div className="bookSearch--search-section-result">
                    Found {searchedBooks && searchedBooks !== 'Books not found' ? searchedBooks.length : '0'} result(s) with <span className="bookSearch--search-section-result-text">{searchTitle}</span>
                </div>
            </div>
            <div className="bookSearch--search-option">
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label="Search by Title"
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label="Search by Author"
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label="Search by ISBN"
                    />
                </div>
            </div>
            <div className="bookSearch--table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Cover</StyledTableCell>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell>ISBN</StyledTableCell>
                                <StyledTableCell>Author</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Books not found is for the first render, searchedBooks is for self rerender */}
                            {searchedBooks &&  searchedBooks !== 'Books not found' && searchedBooks.map(row => (
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
                                                setSelectededBook(row.bookdId);
                                                openBookDesc();
                                            }}
                                        >Book Description</Button>
                                        <Button 
                                            variant="contained" 
                                            endIcon={<StoreIcon/>}
                                            style={{ 
                                                backgroundColor: '#B542EB',
                                                borderRadius:'2vh',
                                                height: '5vh',
                                                color: 'white',
                                                outline: 'none'
                                            }}
                                            onClick={() => seeSellers(row.bookId)}
                                        >See Your Sellers</Button>
                                    </StyledTableCell>
                                </StyledTableRow>))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default BookSearch;

