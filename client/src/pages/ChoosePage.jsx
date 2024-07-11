import { useEffect, useState } from "react";
import CustomCard from "./CustomCard";

function ChoosePage() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/api/planet")
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((error) => console.error("Error fetching planets:", error));
  }, []);

  return (
    <div className="choose-page">
      {planets.map((planet) => (
        <CustomCard
          key={planet.id}
          title={planet.name}
          value={`Énergie: ${planet.energy}, Monnaie: ${planet.currency}, Matériel: ${planet.material}`}
        />
      ))}
    </div>
  );
}

export default ChoosePage;
