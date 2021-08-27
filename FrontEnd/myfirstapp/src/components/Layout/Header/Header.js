import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import './Header.css'

 const Header = () => {

    const [results, setResults] = useState("");

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
                    value={results}
                    style={{ 
                        height: '5vh',
                    }} 
                    onChange={(value) => setResults(value)}
                    placeholder="Book title, Author, etc."
                    onCancelSearch={() => setResults("")}
                />
            </div>
            <div className="header--btns">
                <Link to="/login" className="header--btn" >
                    Login
                </Link>
                <Link to="/register" className="header--btn" >
                    Signup
                </Link>
            </div>
        </div>
    )
}
export default Header;