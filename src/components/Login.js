import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <>
      <div>
        <div className="">
          <br></br>
        <h2 className="">Sign in to your account</h2>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
  
            <Button variant="primary" type="Submit">
              Log In
            </Button>
        </form>
      </div>
      <br></br>
        Don't have an account? <Link to="/signup">Sign up</Link>
    </>
  );
};

export default Login;