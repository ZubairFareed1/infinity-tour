import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the SignIn page if the user is not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
