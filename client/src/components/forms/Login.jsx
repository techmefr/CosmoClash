import  { useState, useContext } from "react";
import "../forms/Forms.css";
import logo from "../../assets/logo.png";
import Starfield from "react-starfield";
import { AuthContext } from "../../App.jsx";
import { Link } from "react-router-dom";
import CustomButton from "../ui/CustomButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    }

    fetch('https://localhost:8002/login', headers)
  .then(response => response.json())
  .then(json => {
    if(json?.token) {
      localStorage.setItem('token', JSON.stringify(json?.token));
      setIsAuthenticated(true);
    }
  })
  .catch(error => {
    console.error(error);
  });   

  };

  return (
    <>
      <div className="flex flex-col items-center h-svh">
        <Starfield
          starCount={20000}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
          backgroundColor="black"
        />
        <img src={logo} alt="" className="flex w-1/3 h-auto" />
        <div className="m-10">
          <form action="" className="container" onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="input-content">
                <div className="input-dist">
                  <span className="text-blue-form text-xl">Connexion</span>
                  <div className="input-type">
                    <input
                      placeholder="Adresse email"
                      required
                      type="text"
                      className="input-is"
                      value={email}
                      onChange={(e) => handleChange(e, setEmail)}
                    />
                    <input
                      placeholder="Mot de passe"
                      required
                      type="password"
                      className="input-is"
                      value={password}
                      onChange={(e) => handleChange(e, setPassword)}
                    />
                  </div>
                  <button className="text-blue-form m-2" type="submit">
                    Je me connecte
                  </button>
                  <Link to="/register"> <CustomButton customButtonName="S'ENREGISTRER" /></Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </>
      );
}