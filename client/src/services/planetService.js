import axios from "axios";

const mockPlanets = [
  {
    id: 1,
    nom: "Alpha",
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
    nom: "Beta",
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
  {
    id: 3,
    nom: "Gamma",
    hasOwner: true,
    resources: {
      energy: 200,
      money: 300,
      material: 400,
    },
    ships: 10,
    position: {
      coordX: 5,
      coordY: 6,
    },
  },
  {
    id: 4,
    nom: "Delta",
    hasOwner: false,
    resources: {
      energy: 25,
      money: 75,
      material: 125,
    },
    ships: 0,
    position: {
      coordX: 7,
      coordY: 8,
    },
  },
  {
    id: 5,
    nom: "Epsilon",
    hasOwner: true,
    resources: {
      energy: 300,
      money: 400,
      material: 500,
    },
    ships: 15,
    position: {
      coordX: 9,
      coordY: 10,
    },
  },
  {
    id: 6,
    nom: "Zeta",
    hasOwner: false,
    resources: {
      energy: 60,
      money: 120,
      material: 180,
    },
    ships: 0,
    position: {
      coordX: 11,
      coordY: 12,
    },
  },
  {
    id: 7,
    nom: "Eta",
    hasOwner: true,
    resources: {
      energy: 400,
      money: 500,
      material: 600,
    },
    ships: 20,
    position: {
      coordX: 13,
      coordY: 14,
    },
  },
  {
    id: 8,
    nom: "Theta",
    hasOwner: false,
    resources: {
      energy: 70,
      money: 140,
      material: 210,
    },
    ships: 0,
    position: {
      coordX: 15,
      coordY: 16,
    },
  },
  {
    id: 9,
    nom: "Iota",
    hasOwner: true,
    resources: {
      energy: 500,
      money: 600,
      material: 700,
    },
    ships: 25,
    position: {
      coordX: 17,
      coordY: 18,
    },
  },
  {
    id: 10,
    nom: "Kappa",
    hasOwner: false,
    resources: {
      energy: 80,
      money: 160,
      material: 240,
    },
    ships: 0,
    position: {
      coordX: 19,
      coordY: 20,
    },
  },
];

export const fetchPlanets = async () => {
  try {
    const response = await axios.get("http://localhost:8002/api/planet");
    return response.data;
  } catch (error) {
    console.error("Error fetching planets:", error);
    return mockPlanets; // en cas d'erreur de fetch alors ça renvoie mockPlanets
  }
};
