import React, { useState } from "react";
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import './Login.css';
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = () => {

  const[toRoute,setToRoute] = useState(null);
  const[data,setData] = useState(null);

  const loginAsUser = async (user) => {
    const req = await axios.post('http://localhost:8080/bookeroo/users/login', user)
        .then(res => res.data)
        .catch(error => error.response);
    return req;
  }

  const onSubmit = async (values) => {
    const user = {
      username: values.username,
      password: values.password,
    };
    const returnedData = await loginAsUser(user);
    console.log(returnedData);
    setData(returnedData);
    setToRoute("/dashboard");
  }

  if (toRoute) {
    return <Redirect to={{
      pathname: "/dashboard",
      state: {data}
    }} 
    />
  }

  return (
    <div className="login--background">
      <div className="login--form">
        <div className="login--picture-slogan">
          <p className="login--slogan">Your best bookstore in the <span className="login--catchy-word">town</span></p>
          <div className="login--logo-align"><img className="login--bookstore-logo" src="/pics/bookstore.png" alt="bookstore"/></div>
        </div>
        <div className="login--registration-form">
          <div className="login--logo-align"><img className="login--logo" src="/pics/logo.png" alt="logo"/></div>
          <div className="login--login-form">
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
                <div className="login--inputFields">
                  <div>
                    <div className="login--align-label-and-field">
                      <label className="login--label">User Name:</label>
                      <Field className="login--fields" id="username" name="username" />
                    </div>

                    <div className="login--align-label-and-field">
                      <label className="login--label">Password:</label>
                      <Field className="login--fields" id="password" name="password" />
                    </div>
                  </div>
        
                  <div className="login--alignBtn">
                    <Button 
                      className="login--submitBtn" 
                      style={{ 
                        border: '1px solid #06f', 
                        borderRadius:'3%',
                        outline: 'none'
                      }} 
                      type="submit"
                    >
                      <span className="login--btn-text">Login</span>
                    </Button>
                  </div>
                  
                </div>

              </Form>
            </Formik>
          </div>
          <div className="login--end-quote">Shop your favourite books, all in one place</div>
        </div>
      </div>
    </div>
  );             
}

export default Login;