import React, { Component } from "react";
import "./ProfilePictureCrop.css";


const email = "s3678755@rmit.edu.vn";
class ProfileEdit extends Component {
    updateFields = (e) => {
        this.setState({ [e.target.email]: e.target.value });
    }

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
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <h3 className="col-sm text-primary">Name:
                                    </h3>
                                    <h4 className="col-sm">
                                        <small className="text-muted">
                                            <input
                                                type="name"
                                                className="form-control form-control-md"
                                                placeholder="Khoi Nguyen"
                                                name="name"
                                            />
                                        </small>
                                    </h4>

                                    <h3 className="col-sm text-primary">Email</h3>
                                    <h4 className="col-sm">
                                        <small className="text-muted">
                                            <input
                                                type="email"
                                                className="form-control form-control-md"
                                                placeholder={email}
                                                name="email"
                                                updateFields={this.updateFields}
                                            />
                                        </small>
                                    </h4>

                                    <h3 className="col-sm text-primary">Role/User:</h3>
                                    <h4 className="col-sm">
                                        <small className="text-muted">Publisher</small>
                                    </h4>

                                    <h3 className="col-sm text-primary">Password:</h3>
                                    <h4 className="col-sm">
                                        <small className="text-muted">
                                            <input
                                                type="password"
                                                className="form-control form-control-md"
                                                placeholder="*********"
                                                name="password"
                                            />
                                        </small>
                                    </h4>

                                    <h3 className="col-sm text-primary">Username:</h3>
                                    <h4 className="col-sm">
                                        <small className="text-muted">
                                            <input
                                                type="username"
                                                className="form-control form-control-md"
                                                placeholder="admin12345"
                                                name="username"
                                            /></small>
                                    </h4>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm">
                            <a className="btn btn-light btn-lg" type="button" href="/profile"><span>&#9587;</span>Cancel</a>
                            <br></br>
                            <button className="btn btn-light btn-lg" type="submit"><span>&#10515;&#160;&#160;</span>Save</button>
                            <br></br>
                            <img src="bookstore-clipart-lg.png" alt="..." ></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileEdit;