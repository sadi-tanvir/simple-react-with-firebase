import { getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';




let auth = getAuth();

const RequireAuth = ({ children }) => {
  let location = useLocation(auth);
  if (!auth.currentUser) {
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
    return children;
};

export default RequireAuth;