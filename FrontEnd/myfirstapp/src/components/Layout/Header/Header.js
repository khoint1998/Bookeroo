import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import './Header.css';
import { UserContext } from "../../../App";
import { GetUser } from "../../../axios/UserAPI";

const Header = () => {

    const [searchResults, setSearchResults] = useState("");
    const currentUser = useContext(UserContext);
    const { user } = GetUser(currentUser.userState.id);

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
                !user ? <div className="header--btns">
                    <Link to="/login" className="header--btn" >
                        Login
                    </Link>
                    <Link to="/register" className="header--btn" >
                        Signup
                    </Link>
                </div> : <div className="header--hiMsg-box">
                    <span className="header--hiMsg">Hello {user.fullName}!</span>
                    <img className="header--avt" src="/pics/avt-2.jpg" alt="avatar"/>
                </div>
            }
            
        </div>
    )
}
export default Header;