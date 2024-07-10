import axios from "axios";

const fetchUserData = async () => {
  try {
    return (await axios.get("http://localhost:8002/api/users")).data;
  } catch (err) {
    console.error("Fetch error:", err);
    // En cas d'erreur, voici les données en brut
    return {
      username: "Benjamin",
      alliance_name: "CosmoCat",
      planets_count: 20,
      ships_count: 100,
      energy: 3567,
      money: 4567,
      material: 7891,
    };
  }
};

export default fetchUserData;
