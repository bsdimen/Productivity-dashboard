import { createContext, useContext, useState, ReactNode } from 'react';
import { user } from "../TYPES/USER";
import { LoginProps } from "../TYPES/USER";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  user: user | null;
  setUser: (user: user | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<user | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

