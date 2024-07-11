import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchPlanets } from "../services/planetService";

export const PlanetContext = createContext();

export const PlanetProvider = ({ children }) => {
  const [planetsData, setPlanetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlanets();
        setPlanetsData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PlanetContext.Provider value={{ planetsData, loading, error }}>
      {children}
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
