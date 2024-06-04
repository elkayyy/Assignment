import { Outlet, Navigate } from "react-router-dom";
import { validateToken } from "./ValidateToken";
import React, { useState, useEffect } from 'react';

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const checkToken = async () => {
      if (token) {
        const valid = await validateToken(token);
        setIsAuthenticated(valid);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkToken();
  }, [token]);
  if (isAuthenticated === null) {
    
    return null;

  }
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;

};

export default ProtectedRoutes;
