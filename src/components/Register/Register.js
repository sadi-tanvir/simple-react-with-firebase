import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ModalBody from "../re-usable-components/Modal";

const Register = () => {
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <h1 className="text-red-800 font-bold">Register Please!</h1>
      <div className="w-6/12">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="font-semibold">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

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
          <Button
            variant="primary"
            style={{
              backgroundColor: "#991b1b",
              border: "none",
              width: 100,
              fontWeight: "bold",
            }}
            type="submit"
          >
            Register
          </Button>
        </Form>

        {/* forgot password */}
        <div className="mt-8">
          <span
            onClick={handleShow}
            className="mt-3 text-blue-700 font-semibold cursor-pointer"
            href="#"
          >
            forgot password?
          </span>
          <ModalBody
            show={show}
            setShow={setShow}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
