// TODO : Page d'accueil du joueur une fois connecté
import "./gamePage.css";

function GamePage() {
  return (
    <>
      <h2>Bienvenue $UserGrade $username</h2>
      <div className="dashboard-Ressource">
        <div className="dash-attack">
          <span>$userAlliance</span>
          <span>$userNbPlanet</span>
          <span>$userNbShips</span>
        </div>
        <div className="dash-ressource"></div>
        <span>$userEnergy</span>
        <span>$userMoney</span>
        <span>$userMaterial</span>
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
