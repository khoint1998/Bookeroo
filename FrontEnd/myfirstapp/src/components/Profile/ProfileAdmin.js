import React, { Component, useState } from "react";
import "./ProfilePictureCrop.css";

const email = "s3678755@rmit.edu.vn";

const PopUpUpload=() => {
    return(
        <div id="overlay"></div>
    )
        
}

class ProfileAdmin extends Component {
    render() {
        return (
            <div className="profile">
                <div className="container">
                    <h1 className="display-4 text-left">Profile (Admin)</h1>
                    
                    <div className="row">
                        <div className="col-sm m-2 text-center crop">
                                <img src="avt-2.jpg" alt="..." ></img>
                        </div>
                        <div className="col-sm m-auto">
                            <div className="form-group">
                                <h3 className="col-sm text-primary">Name:
                                </h3>
                                <h4 className="col-sm">
                                    <small className="text-muted">Khoi Nguyen</small>
                                </h4>

                                <h3 className="col-sm text-primary">Email</h3>
                                <h4 className="col-sm">
                                    <small className="text-muted">{email}</small>
                                </h4>

                                <h3 className="col-sm text-primary">Role/User:</h3>
                                <h4 className="col-sm">
                                    <small className="text-muted">Publisher</small>
                                </h4>

                                <h3 className="col-sm text-primary">Password:</h3>
                                <h4 className="col-sm">
                                    <small className="text-muted">*********</small>
                                </h4>

                                <h3 className="col-sm text-primary">Username:</h3>
                                <h4 className="col-sm">
                                    <small className="text-muted">admin12345</small>
                                </h4>
                            </div>
                        </div>
                        <div className="col-sm row mb-auto">
                            <a className="btn btn-light btn-lg" type="button" href="/profileedit"><span>&#9881;</span>Request to change account type</a>
                            <button className="btn btn-light btn-lg" type="button" href=""><span>&#8634;</span>Transaction History</button>
                            <button className="btn btn-light btn-lg" type="button" href=""><span>&#8634;</span>Download BOOKEROO Monthly Sales</button>
                            <a className="btn btn-light btn-lg" type="button" onClick="PopUpUpload()"><span>&#43;&#160;</span>Upload new Title</a>
                            
                            <img src="bookstore-clipart-lg.png" alt="..." ></img>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileAdmin;