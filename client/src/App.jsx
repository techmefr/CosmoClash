import { useState, useCallback, useEffect } from "react";
import { Navigation } from "./components/navigation/navigation.jsx";
import { createContext } from 'react';

export const AuthContext = createContext();

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const token = window.localStorage.getItem('token');

  const authenticate = useCallback((token) => {
    if (!token) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    authenticate(token);
  }, [token, authenticate, isAuthenticated]);

  return (
     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Navigation />
    </AuthContext.Provider>
  );
}
export default App;
