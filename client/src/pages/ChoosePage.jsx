import { useContext } from "react";
import CustomCard from "../components/ui/CustomCard/CustomCard";
import { PlanetContext } from "../hook/PlanetContext/";
import ElectricityIco from "../components/ui/svg/ElectricityIco";
import MoneyBagIco from "../components/ui/svg/MoneyBagIco";
import MineIco from "../components/ui/svg/MineIco";

function ChoosePage() {
  const { planetsData, loading, error } = useContext(PlanetContext);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>Erreur de chargement des données : {error.message}</p>;
  }

  return (
    <div className="choose-page">
      {planetsData.map((planet) => (
        <CustomCard key={planet.id} title={planet.nom}>
          <div>
            <ElectricityIco /> Énergie: {planet.resources.energy}
          </div>
          <div>
            <MoneyBagIco /> Monnaie: {planet.resources.money}
          </div>
          <div>
            <MineIco /> Matériel: {planet.resources.material}
          </div>
        </CustomCard>
      ))}
    </div>
  );
}

export default ChoosePage;
