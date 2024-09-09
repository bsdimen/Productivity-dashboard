import React, { ReactNode } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';


interface ProtectedRouteProps {
  element: ReactNode;
}

const isAuthenticated = () => !!localStorage.getItem('login');

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  return isAuthenticated() ? <>{element}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
