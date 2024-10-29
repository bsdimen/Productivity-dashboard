
/**
 * `ProtectedRoute` is a higher-order component used to restrict access to specific routes
 * based on the user's authentication status. It leverages the `useAuth` hook to check if a user
 * is logged in and conditionally renders the specified `element` if the user is authenticated.
 * 
 * Props:
 * - `element` (ReactNode): The component or element to render if the user is authenticated.
 * 
 * Usage:
 * This component should be used within the app's routing configuration to protect routes that
 * require authentication. If the user is not authenticated, they will be redirected to the 
 * `/login` page.
 * 
 * Example:
 * ```jsx
 * <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
 * ```
 * 
 * Here, if a user who is not logged in tries to access `/dashboard`, they will be redirected 
 * to `/login`. If the user is authenticated, the `Dashboard` component will render.
 */

import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Services/authContextServ';

interface ProtectedRouteProps {
  element: ReactNode;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {

  // Get the current user from the auth context to check authentication status
  const { user } = useAuth();

  // If user is authenticated, render the element; otherwise, redirect to /login
  return user ? <>{element}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
