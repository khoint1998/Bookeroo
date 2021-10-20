import React, {useContext, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Redirect } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import StoreIcon from '@material-ui/icons/Store';
import './SellerSearch.css';
import { GetCopiesByBookId } from "../../../axios/CopyAPI";
import { GetShopsByCopyIdList } from "../../../axios/ShopAPI";
import { CartContext } from "../../../App";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { SearchBookWithSelectedOptions } from "../../../axios/BookAPI";
import FlashOnIcon from '@material-ui/icons/FlashOn';

const SellerSearch = (props) => {

    const {selectedBookId,searchedTitle} = props.location.state || {};

    const [searchResults, setSearchResults] = useState(searchedTitle);
    const [toRoute,setToRoute] = useState(null);
    const [resultList,setResultList] = useState([]);

    const cart = useContext(CartContext);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

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
    
    //Get shop from copy they sell
    const copyData = GetCopiesByBookId(selectedBookId);
    const copyIdList = copyData && copyData.data && copyData.data.map(copy => copy.copyId);
    const shopsData = GetShopsByCopyIdList(copyIdList && copyIdList.length > 0 && copyIdList);

    const selectShop = (shop) => {
        let selectedCopy = {};
        shop.onSellCopyList.map(reg => {
            copyData && copyData.data && copyData.data.find(copy => {
                if (copy.copyId === reg.copyId) {
                    //Construct a custom object to hold relevant items
                    selectedCopy = {
                        regId: reg.registrationId,
                        copyId: reg.copyId,
                        bookId: reg.bookId,
                        bookTitle: reg.bookTitle,
                        bookPrice: reg.price,
                        sellerId: reg.userId,
                        coverPage: reg.coverPage
                    }
                }
                return null;
            });
            return null;
        })

        cart.cartDispatch({ selectedCopy: selectedCopy, type: 'add to cart' });
    }

    const getToCartPage= (shop) => {
        selectShop(shop);
        setToRoute('/cart');
    }

    const SearchForAnotherBook = async (searchResults) => {
        if(searchResults !== '') {

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

    const checkIfDisable = (row) => {
        const checking = row.onSellCopyList.map(reg => {
            let checkItemOnCart = false;
            cart.cartState.map(selectedBook => {
                checkItemOnCart = reg.copyId === selectedBook.copyId;
                return false;
            })
            return checkItemOnCart;
        })
        const checkIfItIsTrueInArr = checking.find(e => e === true);
        if (checkIfItIsTrueInArr) {
            return checkIfItIsTrueInArr;
        }
        return false;
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

    if (toRoute) {
        return <Redirect to={toRoute}/>
    }

    return (
        <div>
            <div className="sellerSearch--search-section">
                <div className="sellerSearch--search-section-bar">
                    <SearchBar
                        className="header--searchBar"
                        value={searchResults}
                        style={{ 
                            height: '7vh',
                        }} 
                        onChange={(value) => setSearchResults(value)}
                        placeholder="Search for a Book Title, Author or ISBN."
                        onCancelSearch={() => setSearchResults("")}
                        onRequestSearch={() => SearchForAnotherBook(searchResults)}
                    />
                </div>
                <div className="sellerSearch--search-section-result">
                    Found {shopsData && shopsData.data ? shopsData.data.length : '0'} Shop(s) selling <span className="sellerSearch--search-section-result-text">{searchedTitle}</span>
                </div>
            </div>
            <div className="sellerSearch--search-option">
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
            <div className="sellerSearch--table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell width="5%">ID</StyledTableCell>
                                <StyledTableCell width="10%">Logo</StyledTableCell>
                                <StyledTableCell width="30%">Name</StyledTableCell>
                                <StyledTableCell width="10%">Reputation</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Books not found is for the first render, searchedBooks is for self rerender */}
                            {shopsData && shopsData.data && shopsData.data.map(row => (
                                <StyledTableRow key={row.shopId}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.shopId}
                                    </StyledTableCell>
                                    <StyledTableCell><img className="sellerSearch--logo" src="/pics/brand-2.jpg" alt="bookstore-logo"/></StyledTableCell>
                                    <StyledTableCell>{row.shopName}</StyledTableCell>
                                    <StyledTableCell>0</StyledTableCell>
                                    <StyledTableCell>
                                    <Button 
                                            variant="contained"
                                            endIcon={<StoreIcon/>}
                                            style={{ 
                                                backgroundColor: '#0066FF',
                                                borderRadius:'2vh',
                                                height: '5vh',
                                                marginRight: '1.5vw',
                                                color: 'white',
                                                outline: 'none'
                                            }}
                                            onClick={() => {
                                                //see shop details
                                            }}
                                        >Shop Details</Button>
                                        <Button 
                                            variant="contained"
                                            endIcon={<ShoppingCartIcon/>}
                                            disabled={checkIfDisable(row)}
                                            style={{ 
                                                backgroundColor: checkIfDisable(row) === false ?  '#0066FF' : "#6e7480",
                                                borderRadius:'2vh',
                                                height: '5vh',
                                                marginRight: '1.5vw',
                                                color: 'white',
                                                outline: 'none'
                                            }}
                                            onClick={() => {
                                                selectShop(row);
                                            }}
                                        >{checkIfDisable(row) === false? 'Add to Cart': 'Added to Cart'}</Button>
                                        <Button 
                                            variant="contained" 
                                            endIcon={<FlashOnIcon/>}
                                            disabled={checkIfDisable(row)}
                                            style={{ 
                                                backgroundColor: checkIfDisable(row) === false ? '#B542EB' : "#6e7480",
                                                borderRadius:'2vh',
                                                height: '5vh',
                                                color: 'white',
                                                outline: 'none'
                                            }}
                                            onClick={() => getToCartPage(row)}
                                        >{checkIfDisable(row) === false? 'Buy now': 'Added to Cart'}</Button>
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

export default SellerSearch;