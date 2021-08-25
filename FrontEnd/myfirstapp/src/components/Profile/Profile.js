import React, { Component } from "react";
import "./ProfilePictureCrop.css";

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="container">
                    <h1 className="display-4 text-left">Profile</h1>
                    
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
                                    <small className="text-muted">s3678755@rmit.edu.vn</small>
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
                        <div className="col-sm">
                            <button className="btn btn-light btn-lg" type="button" href=""><span>&#9881;</span>Request to change account type</button>
                            <br></br>
                            <br></br>
                            <button className="btn btn-light btn-lg" type="button" href=""><span></span>Transaction History</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;