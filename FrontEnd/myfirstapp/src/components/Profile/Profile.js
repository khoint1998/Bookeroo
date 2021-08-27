import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
    render(props) {
        return (
            <div className="profile_page">

                    <div className="profile_row">
                        <div className="profile_col">
                            <div className="profile_display">
                                <img src="avt-2.jpg" alt="..." ></img>
                                <div className="profile_role">
                                    Publisher
                                </div>
                            </div>
                        </div>

                        <div className="profile_col">
                            <div className="form-group">
                                <div className="form_component">
                                    <h3 className="col-sm-text-primary">Name:
                                    </h3>
                                    <h4 className="col-sm">
                                        <small className="text-muted">Khoi Nguyen</small>
                                    </h4>
                                </div>

                                <div className="form_component">
                                    <h3 className="col-sm-text-primary">Email:</h3>
                                    <h4 className="col-sm">
                                        <small className="text-muted">s3678755@rmit.edu.vn</small>
                                    </h4>
                                </div>

                                <div className="form_component">
                                    <h3 className="col-sm-text-primary">Password:</h3>
                                    <h4 className="col-sm">
                                        <small className="text-muted">*********</small>
                                    </h4>
                                </div>

                                <div className="form_component">
                                    <h3 className="col-sm text-primary">Username:</h3>
                                    <h4 className="col-sm">
                                        <small className="text-muted">admin12345</small>
                                    </h4>
                                </div>

                            </div>
                        </div>
                        <div className="profile_col" id="profile_edit">
                        
                            <div className="profile_button">
                                <a>Request to change account type</a>
                            </div>

                            <div className="profile_button">
                                <a>Transaction History</a>
                            </div>
                            <div className="profile_imageContainer">
                                <img src="bookstore-clipart-lg.png" alt="..." ></img>
                            </div>
                            

                        </div>
                    </div>
            </div>
        );
    }
}

export default Profile;