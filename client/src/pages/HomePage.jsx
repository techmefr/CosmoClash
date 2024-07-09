import logo from ".././assets/logo.png";
import Starfield from "react-starfield";
import CustomButton from "../components/ui/CustomButton";

import "./style/HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homePage">
      <Starfield
        starCount={20000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />
      <img src={logo} alt="j" className="homePageIMG" />
      <div className="homePageCustomBTN">
        <Link to="/register"> <CustomButton customButtonName="S'ENREGISTRER" /></Link>
        <Link to="/login"><CustomButton customButtonName="SE CONNECTER" /></Link>
      </div>
    </div>
  );
}
