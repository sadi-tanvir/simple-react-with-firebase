import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  console.log(`i am from header`, user);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link className="no-underline text-red-800 ml-5 font-bold" to="/">
              react-firebase-integration
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="no-underline text-red-800 font-semibold" to="/">
                Home
              </Link>
              <Link className="no-underline text-red-800 font-semibold ml-5" to="/blog">
                Blogs
              </Link>
              {user?.uid ? (
                <Link
                  onClick={handleSignOut}
                  className="no-underline text-red-800 ml-5 font-semibold"
                  to="/login"
                >
                  signout
                </Link>
              ) : (
                <>
                  <Link
                    className="no-underline text-red-800 ml-5 font-semibold"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="no-underline text-red-800 ml-5 font-semibold"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </Nav>
            {user?.displayName && (
              <span
                title={user?.displayName}
                className="bg-cyan-800 ml-5 font-semibold text-white px-3 py-2 rounded"
              >
                {user.displayName}
              </span>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
