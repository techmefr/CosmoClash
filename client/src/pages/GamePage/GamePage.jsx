import { useEffect, useState } from "react";
import fetchUserData from "../../services/userService";
import CustomCard from "../../components/ui/CustomCard/CustomCard";
import "../../components/ui/CustomCard/customCard.css";
import "./gamePage.css";

export default function GamePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }

  const dataFields = [
    { title: "Alliance", key: "alliance_name" },
    { title: "Nombre de planètes", key: "planets_count" },
    { title: "Nombre de vaisseaux", key: "ships_count" },
    { title: "Énergie", key: "energy" },
    { title: "Monnaie", key: "money" },
    { title: "Matériel", key: "material" },
  ];

  return (
    <div className="cards">
      <h2>Bienvenue {userData.username}</h2>
      {dataFields.map((field, index) => (
        <CustomCard
          key={index}
          title={field.title}
          value={userData[field.key]}
        />
      ))}
    </div>
  );
}
