import { useEffect, useState } from "react";
import { fetchPlanets } from "../services/planetService";
import CustomCard from "../components/ui/CustomCard/CustomCard";
import "../components/ui/CustomCard/customCard.css";
import PlanetIcoRandom from "../components/ui/PlanetIcoRandom";
import "../pages/GamePage/gamePage.css";
import CustomButton from "../components/ui/CustomButton";

export default function PlanetPage() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const data = await fetchPlanets();
        setPlanets(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPlanets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!planets.length) {
    return <div>No planets found.</div>;
  }

  const handleCardClick = (planet) => {
    console.log("Card clicked:", planet);
    setSelectedPlanet(planet);
  };

  const handleAttackClick = () => {
    if (!selectedPlanet) {
      alert("Please select a planet to attack.");
      return;
    }

    const randomBattle = () => {
      return Math.random() > 0.5
        ? "You won the battle!"
        : "You lost the battle.";
    };

    const battleResult = randomBattle();
    alert(battleResult);
  };

  return (
    <>
      <div className="planet-page">
        <h1>Conquête</h1>
        <div className="cards">
          {planets.map((planet) => (
            <CustomCard
              key={planet.id}
              title={planet.nom}
              value={`Energy: ${planet.resources.energy}, Money: ${planet.resources.money}, Material: ${planet.resources.material}`}
              icon={PlanetIcoRandom}
              iconProps={{
                width: "100px",
                height: "100px",
                fillColor: "white",
              }}
              onClick={() => handleCardClick(planet)}
              className={selectedPlanet?.id === planet.id ? "selected" : ""}
            />
          ))}
        </div>
        <div className="flex flex-col items-center alliance_btn_action">
          <CustomButton
            id="btn-attack"
            customButtonName="ATTAQUER"
            className="mb-4 alliance_btn_action mx-auto"
            onClick={handleAttackClick}
          />
        </div>
      </div>
    </>
  );
}
