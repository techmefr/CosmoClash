import axios from "axios";

const mockPlanets = [
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
];

export const fetchPlanets = async () => {
  try {
    const response = await axios.get("http://localhost:8002/api/planet");
    return response.data;
  } catch (error) {
    console.error("Error fetching planets:", error);
    return mockPlanets; // Retour de mockPlanet en cas d'erreur de fetch
  }
};
