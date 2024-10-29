
/**
 * This file provides authentication context and hooks for managing and accessing
 * user authentication state across the app.
 *
 * Interfaces:
 * - `AuthProviderProps`: Specifies the props for `AuthProvider`, with a `children` prop
 *   representing the nested components that will have access to the authentication context.
 * - `AuthContextType`: Defines the structure of the authentication context, including:
 *   - `user` (user | null): The current authenticated user or null if not authenticated.
 *   - `setUser` ((user: user | null) => void): A function to update the `user` state.
 * 
 * Components:
 * - `AuthProvider`: Wraps part of the component tree to provide the authentication context.
 *   It manages the `user` state, which represents the current authenticated user.
 *
 * - `AuthContext`: The context created with `createContext` that stores the user state and
 *   `setUser` function, allowing components to access and modify authentication data.
 *
 * Hooks:
 * - `useAuth`: A custom hook to access the `AuthContext` values (`user` and `setUser`).
 *   It throws an error if used outside an `AuthProvider`, enforcing that only components
 *   within an `AuthProvider` can access the authentication context.
 *
 * Usage:
 * Wrap your component tree with `AuthProvider` to make the context available throughout the app.
 * Components can call `useAuth()` to access `user` and `setUser` as needed for authentication.
 * 
 *
 * // In any component within the AuthProvider
 * const { user, setUser } = useAuth();
 * ```
 */

import { createContext, useContext, useState, ReactNode } from 'react';
import { user } from "../TYPES/USER";


// Props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}
// Structure of the authentication context
interface AuthContextType {
  user: user | null;
  setUser: (user: user | null) => void;
}

// Create the authentication context with default value as null
const AuthContext = createContext<AuthContextType | null>(null);

// AuthProvider component to wrap app or parts of app requiring authentication context
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<user | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}


// Custom hook to access the AuthContext, ensuring usage within AuthProvider
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

