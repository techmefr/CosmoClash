import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import fetchUserData from "../services/userService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: "Benjamin",
    alliance_name: "CosmoCat",
    planets_count: 20,
    ships_count: 100,
    energy: 3567,
    money: 4567,
    material: 7891,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
