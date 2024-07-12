import { useContext, useEffect, useState } from "react";
import CustomCard from "../components/ui/CustomCard/CustomCard";
import { PlanetContext } from "../hook/PlanetContext";
import ElectricityIco from "../components/ui/svg/ElectricityIco";
import MoneyBagIco from "../components/ui/svg/MoneyBagIco";
import MineIco from "../components/ui/svg/MineIco";
import PlanetIcoRandom from "../components/ui/PlanetIcoRandom";
import fetchPlanetData from "../services/planetService";
import "./gamePage.css";
import CommunauteIco from "../../components/ui/svg/CollaborationIco";
import RocketIco from "../../components/ui/svg/RocketIco";

export default function ChoosePage() {
  const [planetData, setPlanetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlanetData = async () => {
      try {
        const data = await fetchPlanetData();
        setPlanetData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPlanetData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!planetData) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="cards">
      <h2>Bienvenue {userData.username}</h2>
      {dataFields.map((field, index) => (
        <CustomCard
          key={index}
          title={field.title}
          value={planetData[field.key]}
          icon={field.icon}
          iconProps={field.iconProps}
        />
      ))}
    </div>
  );
}
