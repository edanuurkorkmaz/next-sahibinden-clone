"use client";
import { createContext, useContext, useState } from "react";
import { strapi } from "@/lib/strapi";

const AuthContext = createContext();

export default function AuthProvider({ children, token }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const logout = () => {
    strapi.logout();
    setIsAuthenticated(false);
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
