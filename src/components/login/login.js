import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./login.css"
function Login() {
  const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const [login, setLogin] = useState({
    user_name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setError] = useState({
    nameError: "",
    emailError: "",
    mobileError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const formChanges = (event) => {
    if (event.target.name === "user_name") {
      // set values
      setLogin({ ...login, user_name: event.target.value });
      //set Error messages
      setError({
        ...errors,
        nameError: !event.target.value
          ? "User Name is required"
          : event.target.value.length < 4
          ? "User Name Must be more than 4 letters"
          : "",
      });
    } else if (event.target.name === "email") {
      // set values
      setLogin({ ...login, email: event.target.value });
      //set Error messages
      setError({
        ...errors,
        emailError: !event.target.value
          ? "Email is required"
          : email_pattern.test(event.target.value)
          ? "email not valid"
          : "",
      });
    } else if (event.target.name === "mobile") {
      // set values
      setLogin({ ...login, mobile: event.target.value });
      //set Error messages
      setError({
        ...errors,
        mobileError: !event.target.value
          ? "Mobile is required"
          : event.target.value.length < 11
          ? "Mobile Must be more than 11 letters"
          : "",
      });
    } else if (event.target.name === "password") {
      // set values
      setLogin({ ...login, password: event.target.value });
      //set Error messages
      setError({
        ...errors,
        passwordError: !event.target.value
          ? "Password is required"
          : event.target.value.length < 8
          ? "Password Must be more than 8 Characters"
          : "",
      });
    } else if (event.target.name === "confirm_password") {
      // set values
      setLogin({ ...login, confirm_password: event.target.value });
      //set Error messages
      setError({
        ...errors,
        confirmPasswordError:
          event.target.value !== login.password ? "Password is incoreect" : "",
      });
    }
    console.log(errors);
  };
  const submit = (event) => {};
  return (
    <>
    <div className="container-form shadow">

    
    <h1 className="m-4">Login Form</h1>
      <Form className="container form">
        <Form.Group className="mb-3" controlId="formGroupUser">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            className={`${errors.nameError ? "border-danger" : ""}`}
            type="text"
            placeholder="Enter User Name"
            name="user_name"
            value={login.user_name}
            onChange={(e) => {
              formChanges(e);
            }}
            onClick={(e) => {
                formChanges(e);
              }}
          />
          <small className="text-danger">{errors.nameError}</small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={`${errors.emailError ? "border-danger" : ""}`}
            type="email"
            placeholder="Enter Email"
            name="email"
            value={login.nameError}
            onChange={(e) => {
              formChanges(e);
            }}
          />
          <small className="text-danger">{errors.emailError}</small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            className={`${errors.mobileError ? "border-danger" : ""}`}
            type="text"
            placeholder="Enter Mobile"
            name="mobile"
            value={login.mobile}
            onChange={(e) => {
              formChanges(e);
            }}
          />
          <small className="text-danger">{errors.mobileError}</small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={`${errors.passwordError ? "border-danger" : ""}`}
            type="password"
            placeholder="Password"
            name="password"
            value={login.password}
            onChange={(e) => {
              formChanges(e);
            }}
          />
          <small className="text-danger">{errors.passwordError}</small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            className={`${errors.confirmPasswordError ? "border-danger" : ""}`}
            type="password"
            placeholder="Password"
            name="confirm_password"
            value={login.confirm_password}
            onChange={(e) => {
              formChanges(e);
            }}
          />
          <small className="text-danger">{errors.confirmPasswordError}</small>
        </Form.Group>
        <Button
          variant="primary"
          onClick={(e) => {
            submit(e);
          }}
          disabled={
            (errors.nameError ||errors.emailError || errors.mobileError || errors.passwordError || errors.confirmPasswordError)
        }
        >
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
}

export default Login;
