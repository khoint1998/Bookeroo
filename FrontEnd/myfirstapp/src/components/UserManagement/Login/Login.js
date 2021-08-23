import React from "react";
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import './Login.css';
import axios from "axios";

const Login = () => {

  const loginAsUser = async (user) => {
    let req = await axios.post('http://localhost:8080/bookeroo/users/login', user)
        .catch(error => error.response.data);
        console.log(req.data);
    return req.data;
  }

  const onSubmit = (values) => {
    const newUser = {
      username: values.username,
      password: values.password,
    };
    loginAsUser(newUser);
  }

  return(
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
        <label>User Name</label>
        <Field id="username" name="username" placeholder="Jane" />

        <label>Password:</label>
        <Field id="password" name="password" />
        
        <Button className="loginBtn" type="submit">Login</Button>

      </Form>
    </Formik>
  );
               
}

export default Login;