
import { createContext, useState, useEffect } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {

  const [formData, setFormData] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : {};
  });

  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken ? JSON.parse(savedToken) : null;
  });

 
  useEffect(() => {
    if (formData?.email) {
      localStorage.setItem("user", JSON.stringify(formData));
    } else {
      localStorage.removeItem("user");
    }
  }, [formData]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    const loginTime = localStorage.getItem("loginTime");
    const savedToken = localStorage.getItem("token");

    if (!loginTime || !savedToken) return;

  const now = Date.now();
  const sessionLimit = 48 * 60 * 60 * 1000;

  if (now - loginTime > sessionLimit) {
    logout();
    localStorage.removeItem("loginTime");
    console.log("Session expired - user logged out automatically")

  }
  }, []);

  const login = (userData, authToken) => {
    setFormData(userData);
    setToken(authToken);
    localStorage.setItem("loginTime", Date.now)
    console.log(userData);
  };

  const logout = () => {
    setFormData({});
    setToken(null);
    localStorage.removeItem("loginTime")
  };

  return (
    <RegistrationContext.Provider value={{ formData, setFormData, token, login, logout }}>
      {children}
    </RegistrationContext.Provider>
  );
};
