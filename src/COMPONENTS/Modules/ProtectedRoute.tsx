import React, { ReactNode } from 'react';
import { Navigate, RouteProps  } from 'react-router-dom';


interface ProtectedRouteProps  {
  element: ReactNode;
}

const isAuthenticated = () => !!localStorage.getItem('authToken');

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
  return isAuthenticated() ? <>{element}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
