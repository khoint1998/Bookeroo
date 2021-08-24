import React from "react";
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import './Register.css';
import axios from "axios";
import logo from "../../../pics/logo.png";
import bookstore from "../../../pics/bookstore.png";

const Register = () => {

  const creatUser = async (newUser) => {
    let req = await axios.post('http://localhost:8080/bookeroo/users/register', newUser)
        .catch(error => error.response.data);
    return req.data;
  }

  const onSubmit = (values) => {
    const newUser = {
      username: values.username,
      email: values.email,
      fullName: values.fullName,
      password: values.password,
      confirmPassword: values.confirmPassword,
      role: values.role
    };
    creatUser(newUser);
  }

  return (
    <div className="register--background">
      <div className="register--form">
        <div className="register--picture-slogan">
          <p className="register--slogan">Your best bookstore in the <span className="register--catchy-word">town</span></p>
          <div className="register--logo-align"><img className="register--bookstore-logo" src={bookstore} alt="register--bookstore"/></div>
        </div>
        <div className="register--registration-form">
          <div className="register--logo-align"><img className="register--logo" src={logo} alt="logo"/></div>
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
                    <Field className="register--fields" id="password" name="password" />
                  </div>

                  <div className="register--align-label-and-field">
                    <label className="register--label">Confirm Password:</label>
                    <Field className="register--fields" id="confirmPassword" name="confirmPassword" />
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