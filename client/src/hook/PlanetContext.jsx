import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchPlanets } from "../services/planetService";

export const PlanetContext = createContext();

export const PlanetProvider = ({ children }) => {
  const [planetsData, setPlanetsData] = useState([
    {
      id: 1,
      hasOwner: true,
      resources: {
        energy: 100,
        money: 200,
        material: 300,
      },
      ships: 5,
      position: {
        coordX: 1,
        coordY: 2,
      },
    },
    {
      id: 2,
      hasOwner: false,
      resources: {
        energy: 50,
        money: 100,
        material: 150,
      },
      ships: 0,
      position: {
        coordX: 3,
        coordY: 4,
      },
    },
  ]);
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
