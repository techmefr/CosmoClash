import "./navBar.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../ui/svg/HomeIco";
import CollaborationIcon from "../../ui/svg/CollaborationIco";
import GeolocalisationIcon from "../../ui/svg/Geolocalisation";
import MoneyBagIcon from "../../ui/svg/MoneyBagIco";
import ServiceToolIco from "../../ui/svg/ServiceToolIco";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/game" className="nav-item">
        <div className="nav-content">
          <HomeIcon
            className="nav-icon"
            width={24}
            height={24}
            fillColor="#FFFFFF"
          />
          <span className="nav-text">Dashboard</span>
        </div>
      </Link>
      <Link to="/planet" className="nav-item">
        <div className="nav-content">
          <GeolocalisationIcon
            className="nav-icon"
            width={24}
            height={24}
            fillColor="#FFFFFF"
          />
          <span className="nav-text">Planètes</span>
        </div>
      </Link>
      <Link to="/market" className="nav-item">
        <div className="nav-content">
          <MoneyBagIcon
            className="nav-icon"
            width={24}
            height={24}
            fillColor="#FFFFFF"
          />
          <span className="nav-text">Achat</span>
        </div>
      </Link>
      <Link to="/alliance" className="nav-item">
        <div className="nav-content">
          <CollaborationIcon
            className="nav-icon"
            width={24}
            height={24}
            fillColor="#FFFFFF"
          />
          <span className="nav-text">Alliance</span>
        </div>
      </Link>
      <Link to="/tool" className="nav-item">
        <div className="nav-content">
          <ServiceToolIco
            className="nav-icon"
            width={24}
            height={24}
            fillColor="#FFFFFF"
          />
          <span className="nav-text">Réglages</span>
        </div>
      </Link>
    </nav>
  );
}

export default NavBar;
