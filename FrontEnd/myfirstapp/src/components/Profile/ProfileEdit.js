import React, { useContext, useState } from "react";
import "./Profile.css";
import { GetUserInfo, editUser } from "../../axios/UserAPI";
import { UserContext } from "../../App";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { Formik, Field, Form } from 'formik';

const ProfileEdit = () => {

    const currentUser = useContext(UserContext);

    const { user } = GetUserInfo(currentUser.userState.user && currentUser.userState.user.id);
    const [toRoute, setToRoute] = useState(null);

    const jwtToken = localStorage.jwtToken;
    if (!jwtToken) {
       return <Redirect to='/'/>
    }

    const onSubmit = async (values) => {
        const edittedUser = {
            username: values.username,
            email: values.email,
            fullName: values.fullName,
            role: user.role
        };
        const returnedData = await editUser(edittedUser, user.id);
        if (returnedData !== "Network Error") {
            setToRoute("/profile")
        }
    }

    if (toRoute) {
        return (
            <div>
                <Redirect to={toRoute} />
            </div>
        );
    }

    return (
        <div className="profile_page">
            {user ? 
                <Formik
                    enableReinitialize
                    initialValues={{
                        username: user && user.username,
                        email: user && user.email,
                        fullName: user && user.fullName,
                        role: '',

                    }}
                    onSubmit={
                        async (values) => {
                            onSubmit(values);
                        }
                    }
                >
                    <Form>
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
                                        <h3 className="profile_page_text_primary">Fullname:
                                        </h3>
                                        <h4 className="col-sm text-muted">
                                            <Field className="profile_fields" id="fullName" name="fullName" placeholder={user.fullName} />
                                        </h4>
                                    </div>

                                    <div className="form_component">
                                        <h3 className="profile_page_text_primary">Email:</h3>
                                        <h4 className="col-sm text-muted">
                                            <Field className="profile_fields" id="email" name="email" placeholder={user.email} />
                                        </h4>
                                    </div>

                                    <div className="form_component">
                                        <h3 className="profile_page_text_primary">Username:</h3>
                                        <h4 className="col-sm text-muted">
                                            <Field className="profile_fields" id="username" name="username" placeholder={user.username} />
                                        </h4>
                                    </div>

                                </div>
                            </div>
                            <div className="profile_col" id="profile_edit">
                                    <Button type="submit">
                                        <span className="profile_button">Update Details</span>
                                    </Button>
                                <br></br>
                                    <Button className="update_profile_button" type="submit">
                                        <Link className="profile_button" to="/profile">Cancel</Link>
                                    </Button>

                            </div>
                        </div>
                    </Form>
                </Formik>
            :<div></div>}
        </div>
        
    );
}


export default ProfileEdit;