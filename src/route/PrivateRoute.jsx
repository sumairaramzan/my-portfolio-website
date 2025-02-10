import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute component
const PrivateRoute = ({ element }) => {
  // Check if the user is authenticated (example using localStorage)
  const isAuthenticated = localStorage.getItem('authToken');

  // If authenticated, render the element, otherwise redirect to login page
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
