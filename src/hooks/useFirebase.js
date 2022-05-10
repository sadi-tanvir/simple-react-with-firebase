import { useEffect, useState } from "react";
import { signInWithPopup,getAuth,GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const useFirebase = () => {
  const [user, setUser] = useState();
  
  // sign in with google
  const signInWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
    .then(result => {
        console.log(result.user);
        setUser(result.user)
    }).catch(error => {
        console.error(error);
    })
  }

  
  useEffect(() => {
    onAuthStateChanged(auth, user => {
        setUser(user)
    })
  }, []);

  return {
      user,
      setUser,
      signInWithGoogle
  }
};

export default useFirebase;
