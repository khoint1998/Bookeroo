import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { UserContext } from "../../App";
import { GetUserInfo } from "../../axios/UserAPI";
import "./MyShops.css";
import { withStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const MyShops = (props) => {

    const currentUser = useContext(UserContext);
    
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
    console.log(user && user.shops);

    const removeShop = (regId) => {
        //Do something
        window.location.reload();
    }

    const visitShop = () => {

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
                                    <StyledTableCell>{row.status ? <span className="myshop--open-text">Open</span> : <span className="myshop--close-text">Closed</span>}</StyledTableCell>
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
                                        >Visit</Button>
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
                                                onClick={() => removeShop(row.registrationId)}
                                            >Delete</Button>:<></>
                                        }
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

export default MyShops;