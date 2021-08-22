import React, { Component } from "react";
import { createNewUser } from "../../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import './Register.css';

const Register = () => {

  // Error Checking
  // const[error, setError] = null;
  // componentWillReceiveProps(nextProps){
  //     if (nextProps.errors){
  //         this.setState ({
  //             errors: nextProps.errors
  //         });

  //     }
  // }

  const onSubmit = (values) => {
    const newUser = {
      username: values.username,
      email: values.email,
      fullName: values.fullName,
      password: values.password,
      confirmPassword: values.confirmPassword,
      role: values.role
    };
    alert("sub " + JSON.stringify(newUser, null, 2));
    this.props.createNewUser(newUser, this.props.history);
  }

  const onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  return (
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
        // await new Promise((r) => setTimeout(r, 500));
        
        onSubmit(values);
      }
    }
    >
    <Form>
      <label>User Name</label>
      <Field id="username" name="username" placeholder="Jane" />

      <label>Email:</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@bookeroo.com"
        type="email"
      />

      <label>Full Name:</label>
      <Field id="fullName" name="fullName" placeholder="Jane Doe" />

      <label>Password:</label>
      <Field id="password" name="password" />

      <label>Confirm Password:</label>
      <Field id="confirmPassword" name="confirmPassword" />

      <div id="my-radio-group">I am a</div>
      <div role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="radio" name="role" value="P" />
          Publisher
        </label>
        <label>
          <Field type="radio" name="role" value="SO" />
          Shop owner
        </label>
        <label>
          <Field type="radio" name="role" value="A" />
          Admin
        </label>
      </div>
      
      <Button className="submitBtn" type="submit">Submit</Button>

    </Form>
  </Formik>
  );
}
export default Register;