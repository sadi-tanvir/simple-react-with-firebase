import React from "react";
import { Card,Button } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";

const Home = () => {
    const {user} = useFirebase()
  return (
    <div className="w-full flex flex-col justify-center items-center mt-36">
    <div className="shadow-md hover:shadow-lg">
      <Card className="text-center">
        <div className='flex justify-center items-center bg-white border-none'>
            <img className="img-fluid rounded-full w-20 -mt-10 shadow-sm" src={user?.photoURL} alt="" />
        </div>
        <Card.Body>
          <Card.Title>{user?.displayName}</Card.Title>
          <Card.Text>
            email: {user?.email}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </div>
    </div>
  );
};

export default Home;
