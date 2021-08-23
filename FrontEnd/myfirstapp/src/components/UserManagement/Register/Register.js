import React from "react";
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import './Register.css';
import axios from "axios";

const Register = () => {

  const creatUser = async (newUser) => {
    let req = await axios.post('http://localhost:8080/bookeroo/users/register', newUser)
        .catch(error => error.response.data);
        console.log(req.data);
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