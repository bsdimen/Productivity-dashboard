import React from 'react';
import { Navigate } from 'react-router-dom';


const isAuthenticated = () => !!localStorage.getItem('authToken');

const ProtectedRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
