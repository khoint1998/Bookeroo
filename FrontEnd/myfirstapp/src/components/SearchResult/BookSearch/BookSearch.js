import React, {useState,useContext} from 'react';
import SearchBar from "material-ui-search-bar";
import { Redirect } from "react-router-dom";
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
import { CartContext } from "../../../App";

const BookSearch = (props) => {

    const {searchedBooks, searchedTitle} = props.location.state || {};
    const cart = useContext(CartContext);

    const [searchResults, setSearchResults] = useState(searchedTitle);
    const [toRoute,setToRoute] = useState(null);
    const [selectedBookId,setSelectededBookId] = useState(null);
    const [resultList,setResultList] = useState(searchedBooks);
    const [searchTitle,setSearchTitle] = useState(searchedTitle);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    let uniqueBooksSearched = [];

     uniqueBooksSearched = searchedBooks && searchedBooks !== 'Books not found' && Array.from(new Set(searchedBooks.map(b => b.bookId)))
    .map(id => {
    return searchedBooks.find(a => a.bookId === id)
    })

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
                localStorage.setItem("cart", JSON.stringify(cart.cartState));
                window.location.reload();
            } else {
                //throw error message for the user
            }
        } 
    }

    const seeSellers = (bookId) => {
        const jwtToken = localStorage.jwtToken;
        if (!jwtToken) {
            setToRoute('/login')
        } else {
            setSelectededBookId(bookId);
            setToRoute("/seller-search");
        }
    }

    const seeBookDesc = (bookId) => {
        const jwtToken = localStorage.jwtToken;
        if (!jwtToken) {
            setToRoute('/login')
        } else {
            setSelectededBookId(bookId);
            setToRoute('/book-desc');
        }
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

    if (toRoute === "/seller-search") {
        return (
          <div>
            <Redirect 
                to={{
                    pathname: toRoute,
                    state: {
                        selectedBookId: selectedBookId,
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
                    state: { 
                        preSelectedBookId: selectedBookId
                    }
                }} 
            />
          </div>
        );
    }

    if (toRoute) {
        return <Redirect to={toRoute}/>
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
                        onRequestSearch={() => SearchFor(searchResults)}
                    />
                </div>
                <div className="bookSearch--search-section-result">
                    Found {uniqueBooksSearched && uniqueBooksSearched !== 'Books not found' ? uniqueBooksSearched.length : '0'} result(s) with <span className="bookSearch--search-section-result-text">{searchTitle}</span>
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
                                <StyledTableCell width="5%">ID</StyledTableCell>
                                <StyledTableCell width="10%">Cover</StyledTableCell>
                                <StyledTableCell width="30%">Title</StyledTableCell>
                                <StyledTableCell width="10%">ISBN</StyledTableCell>
                                <StyledTableCell>Author</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Books not found is for the first render, searchedBooks is for self rerender */}
                            {uniqueBooksSearched &&  uniqueBooksSearched !== 'Books not found' && uniqueBooksSearched.map(row => (
                                <StyledTableRow key={row.bookId}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.bookId}
                                    </StyledTableCell>
                                    <StyledTableCell><img className="bookSearch--cover" src={row.coverPage || "/pics/book-2.jpg"} alt="book"/></StyledTableCell>
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

