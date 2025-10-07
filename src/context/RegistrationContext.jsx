// src/context/RegistrationContext.jsx
import { createContext, useState, useEffect } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  // load from localStorage on first render
  const [formData, setFormData] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : {};
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  // keep localStorage in sync for user data
  useEffect(() => {
    if (formData?.email) {
      localStorage.setItem("user", JSON.stringify(formData));
    } else {
      localStorage.removeItem("user");
    }
  }, [formData]);

  // keep localStorage in sync for token
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // handy functions for login / logout
  const login = (userData, authToken) => {
    setFormData(userData);
    setToken(authToken);
  };

  const logout = () => {
    setFormData({});
    setToken(null);
  };

  return (
    <RegistrationContext.Provider value={{ formData, setFormData, token, login, logout }}>
      {children}
    </RegistrationContext.Provider>
  );
};
