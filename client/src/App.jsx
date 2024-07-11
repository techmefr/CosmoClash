import { useState, useCallback, useEffect } from "react";
import { Navigation } from "./components/navigation/navigation.jsx";
import { createContext } from "react";
import Starfield from "react-starfield";

export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = window.localStorage.getItem("token");

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
      <Starfield
        starCount={20000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />
    </AuthContext.Provider>
  );
}
export default App;
