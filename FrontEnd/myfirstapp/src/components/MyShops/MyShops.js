import React, { useContext, useState } from "react";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { UserContext,CartContext } from "../../App";
import { GetUserInfo } from "../../axios/UserAPI";
import "./MyShops.css";
import { withStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { DeleteShop, CreateShop } from "../../axios/ShopAPI";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect } from "react-router-dom";


const MyShops = () => {

    const cart = useContext(CartContext);
    const currentUser = useContext(UserContext);

    const [openDialog, setOpenDialog] = useState(false);
    const [shopName, setShopName] = useState('');
    const [toRoute,setToRoute] = useState(null);
    const [selectedShopId,setSelectedShopId] = useState(0);

    const jwtToken = localStorage.jwtToken;

    if (!jwtToken) {
        return <Redirect to='/'/>
    }

    if (currentUser.userState.user.role !== 'SO') {
        return <Redirect to='/'/>
    } 

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

    const removeShop = (shopId) => {
        DeleteShop(shopId);
        localStorage.setItem("cart", JSON.stringify(cart.cartState));
        window.location.reload();
    }

    const createAShop = (shopName) => {
        CreateShop(user && user.id,shopName);
        localStorage.setItem("cart", JSON.stringify(cart.cartState));
        window.location.reload();
    }

    const visitShop = (shopId) => {
        //Go to Shop.js
        setToRoute("/shop");
        setSelectedShopId(shopId);
    }

    if (toRoute) {
        return <Redirect to={{
            pathname: '/shop',
            state: { selectedShopId: selectedShopId }
        }}/>
    }
    
    return (
        <div className="myshop--page">
            <div className="myshop--header">
                <div className="myshop--header-name">My Shops</div>
                <div className="myshop--btns">
                    <Button
                        className="myshop--btn"
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
                    >Create a New Shop</Button>
                </div>
            </div>
            <div className="myshop--table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Logo</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Status</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody> 
                            {user && user.shops.map(row => (
                                <StyledTableRow key={row.shopId}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.shopId}
                                    </StyledTableCell>
                                    <StyledTableCell><img className="myshop--cover" src="/pics/brand-2.jpg" alt="logo"/></StyledTableCell>
                                    <StyledTableCell>{row.shopName}</StyledTableCell>
                                    <StyledTableCell>{row.shopOpen ? <span className="myshop--open-text">Opened</span> : <span className="myshop--close-text">Closed</span>}</StyledTableCell>
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
                                            onClick={() => visitShop(row.shopId)}
                                        >Visit Shop</Button>
                                        {user.shops.length !== 1 ?
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
                                                onClick={() => removeShop(row.shopId)}
                                            >Delete</Button>:<></>
                                        }
                                    </StyledTableCell>
                                </StyledTableRow>))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create New Shop</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please enter your new shop name below.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="New Shop Name"
                    fullWidth
                    onChange={(e) => setShopName(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                    Cancel
                </Button>
                <Button 
                    onClick={() => {
                        createAShop(shopName);
                        handleCloseDialog();
                    }} 
                    color="primary"
                >
                    Create
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MyShops;