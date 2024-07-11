import { useEffect, useState } from "react";
import fetchUserData from "../../services/userService";
import CustomCard from "../../components/ui/CustomCard/CustomCard";
import "../../components/ui/CustomCard/customCard.css";
import "./gamePage.css";
import CommunauteIco from "../../components/ui/svg/CollaborationIco";
import PlanetIcoRandom from "../../components/ui/PlanetIcoRandom";
import RocketIco from "../../components/ui/svg/RocketIco";
import ElectricityIco from "../../components/ui/svg/ElectricityIco";
import MoneyBagIco from "../../components/ui/svg/MoneyBagIco";
import MineIco from "../../components/ui/svg/MineIco";

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
      icon: PlanetIcoRandom,
      iconProps: {
        width: "100px",
        height: "100px",
      },
    },
    {
      title: "Nombre de vaisseaux",
      key: "ships_count",
      icon: RocketIco,
      iconProps: {
        width: "80px",
        height: "80px",
        fillColor: "#FFFFFF",
      },
    },
    {
      title: "Énergie",
      key: "energy",
      icon: ElectricityIco,
      iconProps: {
        width: "100px",
        height: "100px",
        fillColor: "#FFFFFF",
      },
    },
    {
      title: "Monnaie",
      key: "money",
      icon: MoneyBagIco,
      iconProps: {
        width: "100px",
        height: "100px",
        fillColor: "#FFFFFF",
      },
    },
    {
      title: "Matériel",
      key: "material",
      icon: MineIco,
      iconProps: {
        width: "200px",
        height: "200px",
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
