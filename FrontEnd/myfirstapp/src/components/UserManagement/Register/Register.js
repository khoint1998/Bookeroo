import React from "react";
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import './Register.css';
import axios from "axios";

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
    <div className="background">
      <div className="form">
        <div className="picture-slogan">
          <p className="slogan">Your best bookstore in the <span className="catchy-word">town</span></p>
          <div className="logo-align"><img className="bookstore-logo" src="/pics/logo.png" alt="bookstore"/></div>
        </div>
        <div className="registration-form">
          <div className="logo-align"><img className="logo" src="/pics/logo.png" alt="logo"/></div>
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
              <div className="inputFields">
                <div>
                  <div className="align-label-and-field">
                    <label className="label">User Name:</label>
                    <Field className="fields" id="username" name="username" placeholder="Jane" />
                  </div>

                  <div className="align-label-and-field">
                    <label className="label">Email:</label>
                    <Field
                      className="fields"
                      id="email"
                      name="email"
                      placeholder="jane@bookeroo.com"
                      type="email"
                    />
                  </div>

                  <div className="align-label-and-field">
                    <label className="label">Full Name:</label>
                    <Field className="fields" id="fullName" name="fullName" placeholder="Jane Doe" />
                  </div>

                  <div className="align-label-and-field">
                    <label className="label">Password:</label>
                    <Field className="fields" id="password" name="password" />
                  </div>

                  <div className="align-label-and-field">
                    <label className="label">Confirm Password:</label>
                    <Field className="fields" id="confirmPassword" name="confirmPassword" />
                  </div>

                  <div className="align-label-and-field">
                    <div id="my-radio-group" className="label">I am a:</div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label className="label-radio">
                        <Field type="radio" name="role" value="PU" />
                        Public User
                      </label>
                      <label className="label-radio">
                        <Field type="radio" name="role" value="P" />
                        Publisher
                      </label>
                      <label className="label-radio">
                        <Field type="radio" name="role" value="SO" />
                        Shop owner
                      </label>
                    </div>
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
                    <span className="btn-text">Signup</span>
                  </Button>
                </div>
                <div className="end-quote">Shop your favourite books, all in one place</div>
              </div>

            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default Register;