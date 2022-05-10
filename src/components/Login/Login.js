import React from "react";
import { Button, Form } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase"


const Login = () => {
  const {signInWithGoogle} = useFirebase();
 

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
        <h1 className="text-blue-800 font-bold">Login Please!</h1>
      <div className="w-6/12">
        <button onClick={signInWithGoogle} className="px-4 py-2 bg-cyan-900 text-white rounded font-bold my-5">sign in with google</button>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-semibold">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-semibold">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" style={{backgroundColor: '#991b1b', border: 'none', width: 100, fontWeight: 'bold'}} type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
