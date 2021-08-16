import React from 'react'
import {link, Link} from "react-router-dom";

 const CreatePersonButton=() => {
    return (
        <React.Fragment>
        <Link to="/addPerson"
        className="btn btn-lg btn-info">
        Create a Person
        </Link>
        </React.Fragment>
    )
};
export default CreatePersonButton;