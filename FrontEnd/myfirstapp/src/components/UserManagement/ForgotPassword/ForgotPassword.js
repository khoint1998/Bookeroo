import React, { useState } from "react";
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import './ForgotPassword.css';
import { Redirect, Link } from "react-router-dom";
import { resetPassword } from "../../../axios/UserAPI";

const ForgotPassword = () => {

  const [toRoute,setToRoute] = useState(null);

  const onSubmit = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    const returnedResult = await resetPassword(data);
    if(returnedResult) {
      //handle error here
    } else {
        setToRoute("/login");
    }
  }

  if (toRoute) {
    return <Redirect to={toRoute}/>
  }

  return (
    <div className="forgotPass--background">
      <div className="forgotPass--form">
        <div className="forgotPass--picture-slogan">
          <p className="forgotPass--slogan">Your best bookstore in the <span className="forgotPass--catchy-word">town</span></p>
          <div className="forgotPass--logo-align"><img className="forgotPass--bookstore-logo" src="/pics/bookstore.png" alt="bookstore"/></div>
        </div>
        <div className="forgotPass--registration-form">
          <div className="forgotPass--logo-align"><img className="forgotPass--logo" src="/pics/logo.png" alt="logo"/></div>
          <div className="forgotPass--forgotPass-form">
            <Formik
              initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit = {
                async (values) => {
                  onSubmit(values);
                }
              }
            >
              <Form>
                <div className="forgotPass--inputFields">
                  <div>
                    <div className="forgotPass--align-label-and-field">
                      <label className="forgotPass--label">Email:</label>
                      <Field className="forgotPass--fields" id="email" name="email" />
                    </div>

                    <div className="forgotPass--align-label-and-field">
                      <label className="forgotPass--label">Password:</label>
                      <Field type='password' className="forgotPass--fields" id="password" name="password" />
                    </div>

                    <div className="forgotPass--align-label-and-field">
                      <label className="forgotPass--label">Confirm Password:</label>
                      <Field type='password' className="forgotPass--fields" id="confirmPassword" name="confirmPassword" />
                    </div>
                  </div>
        
                  <div className="forgotPass--alignBtn">
                    <Button 
                      className="forgotPass--submitBtn" 
                      style={{ 
                        border: '1px solid #06f', 
                        borderRadius:'3%',
                        outline: 'none'
                      }} 
                      type="submit"
                    >
                      <span className="forgotPass--btn-text">Reset Password</span>
                    </Button>
                  </div>
                  
                </div>

              </Form>
            </Formik>
          </div>
          <div className="login--change-password">Back to <Link to="/login">Login</Link></div>
          <div className="forgotPass--end-quote">Shop your favourite books, all in one place</div>
        </div>
      </div>
    </div>
  );             
}

export default ForgotPassword;