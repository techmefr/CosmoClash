// TODO : Page d'accueil du joueur une fois connecté
import "./gamePage.css";
import CollaborationIco from "../../components/ui/svg/CollaborationIco";
import RocketRessourceIco from "../../components/ui/svg/RocketRessourceIco";
import ElectricityRessourceIco from "../../components/ui/svg/ElectricityRessourceIco";
import MoneyResourceIco from "../../components/ui/svg/MoneyRessourceIco";
import CharcoalIco from "../../components/ui/svg/CharcoalIco";
import PlanetResourceIco from "../../components/ui/svg/PlanetRessourceIco";

function GamePage() {
  return (
    <>
      <h2>Bienvenue $UserGrade $username</h2>
      <div className="dashboard-Ressource">
        <div className="dash-planet card">
          <div>
            <CollaborationIco />
            <span>$userAlliance</span>
          </div>
          <div>
            <PlanetResourceIco />
            <span>$userNbPlanet</span>
          </div>
          <div>
            <RocketRessourceIco />
            <span>$userNbShips</span>
          </div>
        </div>
        <div className="dash-ressource"></div>
        <div>
          <ElectricityRessourceIco />
          <span>$userEnergy</span>
        </div>
        <div>
          <MoneyResourceIco />
          <span>$userMoney</span>
        </div>
        <div>
          <CharcoalIco />
          <span>$userMaterial</span>
        </div>
      </div>
      <div className="Historique">
        <form action="" className="container">
          <div className="input-container">
            <div className="input-content">
              <div className="input-dist">
                <span id="SubscribeTXT">Subscription</span>
                <div className="input-type"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default GamePage;
