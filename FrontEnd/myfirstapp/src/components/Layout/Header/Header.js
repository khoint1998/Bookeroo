import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import './Header.css';
import { UserContext, CartContext } from "../../../App";
import { GetUserInfo } from "../../../axios/UserAPI";
import { SearchBookAsResult } from "../../../axios/BookAPI";
import Avatar from '@material-ui/core/Avatar';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import { Redirect } from "react-router-dom";
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Button from '@material-ui/core/Button';

const Header = () => {

    const cart = useContext(CartContext);

    const [searchResults, setSearchResults] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [toRoute,setToRoute] = useState(null);
    const [searchedBooks,setSearchedBooks] = useState(null);

    const currentUser = useContext(UserContext);
    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const closeMenu = (e) => {
        setAnchorEl(null);
    }

    const searchFor = async (searchResults) => {
        if(searchResults !== '') {
            await SearchBookAsResult(searchResults).then(data => setSearchedBooks(data));
            if (searchedBooks !== 'Books not found') {
                setToRoute("/book-search");
                localStorage.setItem("cart", JSON.stringify(cart.cartState));
                window.location.reload();
            } else {
                //throw error message for the user
            }
        }
    }

    if (toRoute === '/book-search') {
        return (
          <div>
            <Header/>
            <Redirect 
                to={{
                    pathname: toRoute,
                    state: { 
                        searchedBooks: searchedBooks,
                        searchedTitle: searchResults
                    }
                }} 
            />
          </div>
        );
    }

    if (toRoute) {
        return (
            <div>
              <Header/>
              <Redirect to={toRoute}/>
            </div>
          );
    }

    return (
        <div className="header--header">
            <div className="header--logo-space" onClick={() => {setToRoute('/')}}><img className="header--logo" src="/pics/logo.png" alt="logo"/></div>
            <div className="header--pages">
                <Link className="header--link" to="/">Home</Link>
                <Link className="header--link" to="/about">Our Work</Link>
                <Link className="header--link" to="/contact">Contact Us</Link>
            </div>
            <div className="header--searchBar-space">
                <SearchBar
                    className="header--searchBar"
                    value={searchResults}
                    style={{ 
                        height: '5vh',
                        width: '20vw',
                    }} 
                    onChange={(value) => setSearchResults(value)}
                    placeholder="Search for a Book Title, Author or ISBN"
                    onCancelSearch={() => setSearchResults("")}
                    onRequestSearch={() => searchFor(searchResults)}
                />
            </div>        
            {
                !user ? 
                <div className="header--btns">
                    <Link to="/login" className="header--btn" >
                        Login
                    </Link>
                    <Link to="/register" className="header--btn" >
                        Signup
                    </Link>
                </div> : 
                <div className="header--hiMsg-box">
                    <span className="header--hiMsg">Hello {user.fullName.length > 13 ? user.fullName.substring(0,12)+'...' : user.fullName}</span>
                    <Avatar 
                        className="header--avt" 
                        alt="avatar"
                        style={{
                            width: '2vw',
                            fontSize: '1vw',
                            height: '4vh'
                        }}
                        onClick={openMenu}>
                            {user.fullName && user.fullName.charAt(0).toUpperCase()}
                    </Avatar>
                    <Menu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                        style={{
                            position: 'fixed',
                            top: '5vh',
                            right: '1vw'
                        }}
                    >
                        <MenuItem>
                            <ListItemIcon style={{
                                minWidth: '25px'
                            }}>
                                <AccountCircleOutlinedIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="My Profile" onClick={() => setToRoute("/profile")}/>
                        </MenuItem >
                        <MenuItem>
                            <ListItemIcon style={{
                                minWidth: '25px'
                            }}>
                                <MenuBookIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="My Library" onClick={() => setToRoute("/library")}/>
                        </MenuItem >
                        { user.role === "PU" || user.role === "P" ?
                            <MenuItem>
                                <ListItemIcon style={{
                                    minWidth: '25px'
                                }}>
                                    <ListIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="My Selling Registration" onClick={() => setToRoute("/my-registration")}/>
                            </MenuItem> : user.role === "SO" ?
                            <MenuItem>
                                <ListItemIcon style={{
                                    minWidth: '25px'
                                }}>
                                    <StoreOutlinedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="My Shop" onClick={() => setToRoute("/my-shops")}/>
                            </MenuItem> : 
                            <div>
                                <MenuItem>
                                    <ListItemIcon style={{
                                        minWidth: '25px'
                                    }}>
                                        <NotificationsActiveOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Incoming Selling Registrations" onClick={() => setToRoute("/incoming-reg")}/>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon style={{
                                        minWidth: '25px'
                                    }}>
                                        <SupervisorAccountIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Admin Workspace" onClick={() => setToRoute("/admin-home")}/>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon style={{
                                        minWidth: '25px'
                                    }}>
                                        <ListIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="My Selling Registration" onClick={() => setToRoute("/my-registration")}/>
                                </MenuItem>
                            </div>
                        }
                        <MenuItem>
                            <ListItemIcon style={{
                                minWidth: '25px'
                            }}>
                                <NewReleasesIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Notifications" onClick={() => setToRoute("/notification")}/>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon style={{
                                minWidth: '25px'
                            }}>
                                <ShoppingCartIcon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText primary="My Cart" onClick={() => setToRoute("/cart")}/>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon style={{
                                minWidth: '25px'
                            }}>
                                <ExitToAppIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Logout" onClick={() => {
                                localStorage.removeItem("jwtToken");
                                localStorage.removeItem("cart");
                                setToRoute("/");
                                currentUser.userDispatch({ type: 'logout' });
                                cart.cartDispatch({ type: 'clear cart' });
                                setTimeout(() => window.location.reload(), 200);
                            }}/>
                        </MenuItem >
                    </Menu>
                    <Button 
                        variant="text"
                        startIcon={<ShoppingCartIcon/>}
                        style={{ 
                            fontWeight: 'bolder',
                            fontSize: '1vw',
                            borderRadius:'2vh',
                            marginLeft: '2.5vw',
                            color: '#0066ff',
                            outline: 'none'
                        }}
                        onClick={() => setToRoute('/cart')}
                    >My Cart</Button>
                </div>
            }
        </div>
    )
}
export default Header;