import React, {useContext} from "react";
import "./Profile.css";
import { GetUserInfo } from "../../axios/UserAPI";
import { UserContext } from "../../App";
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";

const Profile = () => {

    const currentUser = useContext(UserContext);
    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    return (
        <div className="profile_page">
            {user ? 
                <div className="profile_row">
                <div className="profile_col" id="profile_img_col">
                    <div className="profile_display">
                        <img src="avt-2.jpg" alt="profile_image" ></img>
                        <div className="profile_role">
                            {user.role === 'SO' ? 'Shop Owner' : user.role === 'PU' ? 'Public User' : user.role === 'P' ? 'Publisher' : 'Admin'}
                        </div>
                    </div>
                </div>

                <div className="profile_col">
                    <div className="form-group">
                        <div className="form_component">
                            <h3 className="profile_page_text_primary">Name:
                            </h3>
                            <h4 className="col-sm text-muted">
                                {user.fullName}
                            </h4>
                        </div>

                        <div className="form_component">
                            <h3 className="profile_page_text_primary">Email:</h3>
                            <h4 className="col-sm text-muted">
                                {user.email}
                            </h4>
                        </div>

                        <div className="form_component">
                            <h3 className="profile_page_text_primary">Username:</h3>
                            <h4 className="col-sm text-muted">
                                {user.username}
                            </h4>
                        </div>

                    </div>
                </div>
                <div className="profile_col" id="profile_edit">

                    <div className="profile_button">
                        <div className="profile_button_image">
                            <img src="/pics/icon_setting.png" alt="setting-icon"></img>
                        </div>
                        <Link className="updateDetails_btn" to="/profile-edit">
                        Request to change account type
                        </Link>
                    </div>

                    <div className="profile_button">
                        <div className="profile_button_image">
                            <img src="/pics/icon_history.png" alt="history-icon"></img>
                        </div>
                        
                        <Link className="updateDetails_btn" to="/purchaseHistory">
                        Transaction History
                        </Link>
                        
                    </div>
                    <div className="profile_imageContainer">
                        <img src="bookstore-clipart-lg.png" alt="footer_image" ></img>
                    </div>
                </div>
            </div>
            :<div></div>}
        </div>
    )
}


export default Profile;