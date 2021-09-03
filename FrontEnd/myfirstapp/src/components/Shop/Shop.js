import React, { useContext, useState } from "react";
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
import { GetUserInfo } from "../../axios/UserAPI";
import { SearchForABook } from "../../axios/BookAPI";
import { DeleteRegistration, CreateRegistration } from "../../axios/RegistrationAPI";
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import "./Shop.css";
import { withStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik, Field, Form } from 'formik';
import { Redirect } from "react-router-dom";


const Shop = (props) => {

    const {selectedShopId} = props.location.state;
    console.log(selectedShopId)

    const currentUser = useContext(UserContext);
    const [openDialog, setOpenDialog] = useState(false);
    const [openCreateRegDialog, setOpenCreateRegDialog] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedISBN, setSelectedISBN] = useState('');
    const [prefetchedBook,setPrefetchedBook] = useState({});
    const [toRoute,setToRoute] = useState(null);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseCreateRegDialog = () => {
        setOpenCreateRegDialog(false);
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

    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);

    //Extract selected shop first
    const filterShopList = user && user.shops.filter(shop => shop.shopId === selectedShopId);

    const {onSellCopyList} = filterShopList ? filterShopList[0] : '';

    const removeRegistration = (regId) => {
        DeleteRegistration(regId);
        window.location.reload();
    }

    const searchForTheBook = (title, isbn) => {
        SearchForABook(title,isbn).then(data => setPrefetchedBook(data));
        if (prefetchedBook !== 'Something wrong. Book not found or Book name does not match the ISBN provided') {
            setOpenCreateRegDialog(true);
        } else {
            //throw error message
        }
    }

    const onSubmit = async (values) => {
    
        const registrationDetails = {
            shopId: filterShopList && filterShopList[0].shopId,
            newBook: values.secondHand === "true" ? false : true,
            bookTitle: prefetchedBook.title,
            price: values.price,
            bookId: prefetchedBook && prefetchedBook.bookId,
        };

        CreateRegistration(registrationDetails);
        handleCloseCreateRegDialog();
        window.location.reload();
    }

    if (toRoute) {
        return <Redirect to={toRoute}/>
    }
    
    return (
        <div className="shop--page">
            <div className="shop--header">
                <div className="shop--header-name"><img className="shop--logo-pic" src="/pics/brand-2.jpg" alt="logo"/>{filterShopList && filterShopList[0].shopName}</div>
                <div className="shop--btns">
                    <Button
                        className="shop--btn"
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
                    >Sale History</Button>
                    <Button
                        className="shop--btn"
                        startIcon={<AddOutlinedIcon/>}
                        style={{ 
                            border: '2px solid #06f', 
                            borderRadius:'1vh',
                            height: '5vh',
                            marginRight: '2vw',
                            color: '#06f',
                            fontWeight: 'bolder',
                            outline: 'none'
                        }}
                        onClick={handleOpenDialog}
                    >Create New Registration</Button>
                    <Button
                        className="shop--btn"
                        startIcon={<SwapHorizIcon/>}
                        style={{ 
                            border: '2px solid #06f', 
                            borderRadius:'1vh',
                            height: '5vh',
                            marginRight: '2vw',
                            color: '#06f',
                            fontWeight: 'bolder',
                            outline: 'none'
                        }}
                        onClick={() => setToRoute("/my-shops")}
                    >Change Shop</Button>
                </div>
            </div>
            <div className="shop--table">
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
                            {onSellCopyList && onSellCopyList.map(row => (
                                <StyledTableRow key={row.registrationId}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.registrationId}
                                    </StyledTableCell>
                                    <StyledTableCell><img className="shop--cover" src="/pics/book-2.jpg" alt="book"/></StyledTableCell>
                                    <StyledTableCell>{row.bookTitle}</StyledTableCell>
                                    <StyledTableCell>${row.price}</StyledTableCell>
                                    <StyledTableCell>{row.status === "approved" ? <span className="shop--approved-text">Approved</span> : <span className="shop--pending-text">Awaiting Approval</span>}</StyledTableCell>
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
                                        >Details</Button>
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

            {/* Search book Dialog */}

            <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><span className="shop--search-book-dialog-title">#1. Select a Book</span></DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To apply for registration, please enter these associate book informations first. We will proceed once the book has been found and ready to handle your application.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Search for Book Title"
                    type="email"
                    fullWidth
                    style={{
                        margin: '2vh 0 3vh 0'
                    }}
                    onChange={(e) => setSelectedTitle(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Enter ISBN"
                    type="email"
                    fullWidth
                    style={{
                        marginBottom: '10vh'
                    }}
                    onChange={(e) => setSelectedISBN(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                    Cancel
                </Button>
                <Button 
                    onClick={() => {
                        searchForTheBook(selectedTitle,selectedISBN);
                        handleCloseDialog();
                    }} 
                    color="primary"
                >
                    Next
                </Button>
                </DialogActions>
            </Dialog>

            {/* Create Reg Dialog*/}

            <Dialog open={openCreateRegDialog} onClose={handleCloseCreateRegDialog} aria-labelledby="form-dialog-title" maxWidth="xl">
                <DialogTitle id="form-dialog-title"><span className="shop--search-book-dialog-title">#2. Create New Registration</span></DialogTitle>
                <DialogContent>
                <DialogContentText>
                    <span className="shop--highlight">Found your selected book!</span>. Please enter the informations below to create Registration for a <span className="shop--highlight">New Copy. Owned copies will be supported soon</span>.
                </DialogContentText>
                <div className="shop--dialog-2-content">
                    <div className="shop--dialog-2-content-pic">
                        <img className="shop--book-cover" src="/pics/book-2.jpg" alt="book"/>
                        <div className="shop--book">
                            <div className="shop--book-details">Book Title:</div>
                            <div className="shop--book-info">{prefetchedBook.title}</div>
                            <div className="shop--book-details">Author:</div>
                            <div className="shop--book-info">{prefetchedBook.author}</div>
                            <div className="shop--book-details">Publisher:</div>
                            <div className="shop--book-info">{prefetchedBook.publisher}</div>
                            <div className="shop--book-details">Category:</div>
                            <div className="shop--book-info">{prefetchedBook.category}</div>

                        </div>
                    </div>
                    <div className="shop--dialog-2-content-part">
                        <Formik
                            initialValues={{
                                price: '',
                                secondHand: '',
                                term: ''
                            }}
                            onSubmit = {
                                async (values) => {
                                    onSubmit(values);
                                }
                            }
                        >
                            <Form>
                                <div className="shop--inputFields">
                                    <div className="shop--dialog-form">
                                        <div className="shop--align-label-and-field">
                                            <label className="shop--label">Enter your Price (A$):</label>
                                            <Field className="shop--fields" id="price" name="price" />
                                        </div>

                                        <div className="shop--TnC">
                                            <div className="shop--align-label-and-field">
                                                <div id="my-radio-group" className="shop--label">Is this a second hand copy?</div>
                                                <div className="shop--radios" role="group" aria-labelledby="my-radio-group">
                                                    <label className="shop--label-radio">
                                                        <Field type="radio" name="secondHand" value="true" />
                                                        Yes
                                                    </label>
                                                    <label className="shop--label-radio">
                                                        <Field type="radio" name="secondHand" value="false" />
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="shop--align-label-and-field-term">
                                                <div id="my-radio-group" className="shop--label-term">By registering, you are agreeing with BOOKEROO Terms and Conditions</div>
                                                <div className="shop--radios" role="group" aria-labelledby="my-radio-group">
                                                    <label className="shop--label-radio">
                                                        <Field type="radio" name="term" value="true" />
                                                        Agree
                                                    </label>
                                                    <label className="shop--label-radio">
                                                        <Field type="radio" name="term" value="false" />
                                                        Disagree
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className="shop--alignBtn">
                                        <Button 
                                            className="shop--submitBtn" 
                                            style={{ 
                                                border: '1px solid #06f', 
                                                borderRadius:'3%',
                                                outline: 'none'
                                            }} 
                                            type="submit"
                                        >
                                            <span className="shop--btn-text">Submit this Registration</span>
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Shop;