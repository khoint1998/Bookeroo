import React, { useState } from "react";
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import './Register.css';
import { Redirect } from "react-router-dom";
import { createUser } from "../../../axios/UserAPI";

const Register = () => {

  const[toRoute,setToRoute] = useState(null);

  const onSubmit = async (values) => {
    const newUser = {
      username: values.username,
      email: values.email,
      fullName: values.fullName,
      password: values.password,
      confirmPassword: values.confirmPassword,
      role: values.role
    };
    const returnedData = await createUser(newUser);
    if (returnedData !== "Network Error") {
      setToRoute("/login")
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
    <div className="register--background">
      <div className="register--form">
        <div className="register--picture-slogan">
          <p className="register--slogan">Your best bookstore in the <span className="register--catchy-word">town</span></p>
          <div className="register--logo-align"><img className="register--bookstore-logo" src="/pics/bookstore.png" alt="register--bookstore"/></div>
        </div>
        <div className="register--registration-form">
          <div className="register--logo-align"><img className="register--logo" src="/pics/logo.png" alt="logo"/></div>
          <Formik
            initialValues={{
              username: '',
              email: '',
              fullName: '',
              password: '',
              confirmPassword: '',
              role: ''
            }}
            onSubmit = {
              async (values) => {
                onSubmit(values);
              }
            }
          >
            <Form>
              <div className="register--inputFields">
                <div>
                  <div className="register--align-label-and-field">
                    <label className="register--label">User Name:</label>
                    <Field className="register--fields" id="username" name="username" placeholder="Jane" />
                  </div>

                  <div className="register--align-label-and-field">
                    <label className="register--label">Email:</label>
                    <Field
                      className="register--fields"
                      id="email"
                      name="email"
                      placeholder="jane@bookeroo.com"
                      type="email"
                    />
                  </div>

                  <div className="register--align-label-and-field">
                    <label className="register--label">Full Name:</label>
                    <Field className="register--fields" id="fullName" name="fullName" placeholder="Jane Doe" />
                  </div>

                  <div className="register--align-label-and-field">
                    <label className="register--label">Password:</label>
                    <Field type='password' className="register--fields" id="password" name="password" />
                  </div>

                  <div className="register--align-label-and-field">
                    <label className="register--label">Confirm Password:</label>
                    <Field type='password' className="register--fields" id="confirmPassword" name="confirmPassword" />
                  </div>

                  <div className="register--align-label-and-field">
                    <div id="my-radio-group" className="register--label">I am a:</div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label className="register--label-radio">
                        <Field type="radio" name="role" value="PU" />
                        Public User
                      </label>
                      <label className="register--label-radio">
                        <Field type="radio" name="role" value="P" />
                        Publisher
                      </label>
                      <label className="register--label-radio">
                        <Field type="radio" name="role" value="SO" />
                        Shop owner
                      </label>
                    </div>
                  </div>
                </div>
      
                <div className="register--alignBtn">
                  <Button 
                    className="register--submitBtn" 
                    style={{ 
                      border: '1px solid #06f', 
                      borderRadius:'3%',
                      outline: 'none'
                    }} 
                    type="submit"
                  >
                    <span className="register--btn-text">Signup</span>
                  </Button>
                </div>
                <div className="register--end-quote">Shop your favourite books, all in one place</div>
              </div>

            </Form>
          </Formik>
        </div>
      </div>   
    </div>
  );
}
export default Register;