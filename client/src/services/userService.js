import axios from "axios";

const userData = {
  username: "Benjamin",
  alliance_name: "CosmoCat",
  planets_count: 20,
  ships_count: 100,
  energy: 200,
  money: 200,
  material: 200,
  speed: 1,
  attack: 1,
  defense: 1,
};

const fetchUserData = async () => {
  try {
    const data = (await axios.get("http://localhost:8002/api/users")).data;
    // Met à jour userData avec les données reçues
    Object.assign(userData, data);
    return { ...userData };
  } catch (err) {
    console.error("Fetch error:", err);
    // Retourne les données locales en cas d'erreur
    return { ...userData };
  }
};

const buyShip = async () => {
  if (userData.energy >= 1 && userData.money >= 1 && userData.material >= 1) {
    userData.energy -= 1;
    userData.money -= 1;
    userData.material -= 1;
    userData.ships_count += 1;
    return { ...userData };
  } else {
    return null; // Indique qu'il n'y a pas assez de ressources
  }
};

export default {
  fetchUserData,
  buyShip,
};
