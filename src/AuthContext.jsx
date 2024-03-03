import  { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const login = () => {
    // Logic for login
    setAuth(true);
  };

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  );
};
