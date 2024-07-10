import { useEffect, useState } from "react";
import fetchUserData from "../../services/userService";
import CustomCard from "../../components/ui/CustomCard/CustomCard";
import "../../components/ui/CustomCard/customCard.css";
import "./gamePage.css";
import CommunauteIco from "../../components/ui/svg/CollaborationIco";
import PlanetIco from "../../components/ui/svg/PlanetIco";
import RocketIco from "../../components/ui/svg/RocketIco";

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
    {
      title: "Alliance",
      key: "alliance_name",
      icon: CommunauteIco,
      iconProps: {
        width: "100px",
        height: "100px",
        fillColor: "#FFFFFF",
      },
    },
    {
      title: "Nombre de planètes",
      key: "planets_count",
      icon: PlanetIco,
      iconProps: {
        width: "100px",
        height: "100px",
        fillColor: "#FFFFFF",
      },
    },
    {
      title: "Nombre de vaisseaux",
      key: "ships_count",
      icon: RocketIco,
      iconProps: {
        width: "100px",
        height: "100px",
        fillColor: "#FFFFFF",
      },
    },
    {
      title: "Énergie",
      key: "energy",
      icon: CommunauteIco,
      iconProps: {
        width: "100px",
        height: "100px",
        fillColor: "#FFFFFF",
      },
    },
    {
      title: "Monnaie",
      key: "money",
      icon: CommunauteIco,
      iconProps: {
        width: "100px",
        height: "100px",
        fillColor: "#FFFFFF",
      },
    },
    {
      title: "Matériel",
      key: "material",
      icon: CommunauteIco,
      iconProps: {
        width: "100px",
        height: "100px",
        fillColor: "#FFFFFF",
      },
    },
  ];

  return (
    <div className="cards">
      <h2>Bienvenue {userData.username}</h2>
      {dataFields.map((field, index) => (
        <CustomCard
          key={index}
          title={field.title}
          value={userData[field.key]}
          icon={field.icon}
          iconProps={field.iconProps}
        />
      ))}
    </div>
  );
}
