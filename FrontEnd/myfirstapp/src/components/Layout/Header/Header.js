import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import './Header.css';
import { UserContext } from "../../../App";
import { GetUserInfo } from "../../../axios/UserAPI";
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

const Header = () => {

    const [searchResults, setSearchResults] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [toRoute,setToRoute] = useState(null);

    const currentUser = useContext(UserContext);
    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const closeMenu = (e) => {
        setAnchorEl(null);
    }

    if (toRoute) {
        return (
          <div>
            <Header/>
            <Redirect to={toRoute} />
          </div>
        );
    }

    return (
        <div className="header--header">
            <div className="header--logo-space"><img className="header--logo" src="/pics/logo.png" alt="logo"/></div>
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
                    }} 
                    onChange={(value) => setSearchResults(value)}
                    placeholder="Book title, Author, etc."
                    onCancelSearch={() => setSearchResults("")}
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
                    <span className="header--hiMsg">Hello {user.fullName}</span>
                    <Avatar className="header--avt" alt="avatar" aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>{user.fullName && user.fullName.charAt(0).toUpperCase()}</Avatar>
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
                                <ListItemText primary="My Shop" /></MenuItem> : 
                            <MenuItem>
                                <ListItemIcon style={{
                                    minWidth: '25px'
                                }}>
                                    <NotificationsActiveOutlinedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Incoming Selling Registrations" />
                            </MenuItem>
                        }
                        <MenuItem>
                            <ListItemIcon style={{
                                minWidth: '25px'
                            }}>
                                <ExitToAppIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Logout" onClick={() => {
                                localStorage.removeItem("jwtToken");
                                currentUser.userDispatch({ type: 'logout' });
                                setToRoute("/");
                            }}/>
                        </MenuItem >
                    </Menu>
                </div>
            }
            
        </div>
    )
}
export default Header;