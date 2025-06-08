"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children, token }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
