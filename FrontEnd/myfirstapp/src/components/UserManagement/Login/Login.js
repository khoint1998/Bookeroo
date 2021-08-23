import React from "react";
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import './Login.css';
import axios from "axios";
import logo from "../../../pics/logo.png";
import bookstore from "../../../pics/bookstore.png";

const Login = () => {

  const loginAsUser = async (user) => {
    let req = await axios.post('http://localhost:8080/bookeroo/users/login', user)
        .catch(error => error.response.data);
    return req.data;
  }

  const onSubmit = (values) => {
    const user = {
      username: values.username,
      password: values.password,
    };
    loginAsUser(user);
  }

  return (
    <div className="background">
      <div className="form">
        <div className="picture-slogan">
          <p className="slogan">Your best bookstore in the <span className="catchy-word">town</span></p>
          <div className="logo-align"><img className="bookstore-logo" src={bookstore} alt="bookstore"/></div>
        </div>
        <div className="registration-form">
          <div className="logo-align"><img className="logo" src={logo} alt="logo"/></div>
          <div className="login-form">
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit = {
                async (values) => {
                  onSubmit(values);
                }
              }
            >
              <Form>
                <div className="inputFields">
                  <div>
                    <div className="align-label-and-field">
                      <label className="label">User Name:</label>
                      <Field className="fields" id="username" name="username" />
                    </div>

                    <div className="align-label-and-field">
                      <label className="label">Password:</label>
                      <Field className="fields" id="password" name="password" />
                    </div>
                  </div>
        
                  <div className="alignBtn">
                    <Button 
                      className="submitBtn" 
                      style={{ 
                        border: '1px solid #06f', 
                        borderRadius:'3%',
                        outline: 'none'
                      }} 
                      type="submit"
                    >
                      <span className="btn-text">Login</span>
                    </Button>
                  </div>
                  
                </div>

              </Form>
            </Formik>
          </div>
          <div className="end-quote">Shop your favourite books, all in one place</div>
        </div>
      </div>
    </div>
  );             
}

export default Login;