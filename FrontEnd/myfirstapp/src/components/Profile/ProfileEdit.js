import React, { Component, useContext } from "react";
import "./Profile.css";
import { GetUserInfo } from "../../axios/UserAPI";
import { UserContext } from "../../App";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function ProfileEdit(){
    const currentUser = useContext(UserContext);

    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);

        return (
            <div className="profile_page">

                <div className="profile_row">
                    <div className="profile_col" id="profile_img_col">
                        <div className="profile_display">
                            <img src="avt-2.jpg" alt="profile_image" ></img>
                            <div className="profile_role">
                                {user.role}
                            </div>
                        </div>
                    </div>

                    <div className="profile_col">
                        <div className="form-group">
                            <div className="form_component">
                                <h3 className="profile_page_text_primary">Name:
                                </h3>
                                <h4 className="col-sm">
                                <small className="text-muted">
                                <input className="profile--fields" id="fullname" name="fullname" placeholder={user.fullName}/>
                                </small>
                                </h4>
                            </div>

                            <div className="form_component">
                                <h3 className="profile_page_text_primary">Email:</h3>
                                <h4 className="col-sm">
                                    <small className="text-muted">
                                    <input className="profile--fields" id="email" name="email" placeholder={user.email}/>
                                    </small>
                                </h4>
                            </div>

                            {/* <div className="form_component">
                                <h3 className="profile_page_text_primary">Password:</h3>
                                <h4 className="col-sm">
                                    <small className="text-muted">
                                        <input className="profile--fields" id="fullname" name="fullname" placeholder={user.string}/>
                                    </small>
                                </h4>
                            </div> */}

                            <div className="form_component">
                                <h3 className="profile_page_text_primary">Username:</h3>
                                <h4 className="col-sm">
                                    <small className="text-muted">
                                        <input className="profile--fields" id="username" name="username" placeholder={user.username}/>
                                    </small>
                                </h4>
                            </div>

                        </div>
                    </div>
                    <div className="profile_col" id="profile_edit">
                        <div className="update_profile_button">
                            <Button className="update_profile_button" type="submit">
                                <span className="update_profile_btn">Update Details</span>
                            </Button>
                            {/* updates with new details */}
                        </div>

                        <div className="cancel_profile_button">
                            <Button className="update_profile_button" type="submit">
                                <Link className="updateDetails_btn" to="/profile">Cancel</Link>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }


export default ProfileEdit;