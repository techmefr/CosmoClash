import "../forms/Forms.css";
import logo from "../../assets/logo.png";
import Starfield from "react-starfield";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../ui/CustomButton";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const role_id = 3;
 
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
      body: JSON.stringify({username,  email, password, role_id })
    }

    fetch('https://localhost:8002/register', headers)
  .then(response => response.json())
  .catch(error => {
    console.error(error);
  });   

  };
  return (
    <>
      <div className="register">
        <Starfield
          starCount={20000}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
          backgroundColor="black"
        />
        <img src={logo} alt="" className="registerIMG" />
        <div className=" m-10">
          <form action="" className="container"  onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="input-content">
                <div className="input-dist">
                  <span>S&apos;enregistrer</span>
                  <div className="input-type">
                    <input
                      placeholder="Username"
                      required
                      type="text"
                      className="input-is"
                      value={username}
                      onChange={(e) => handleChange(e, setUsername)}
                    />
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
                  <button type="submit">Je crée mon compte</button>
                  <Link to="/login"><CustomButton customButtonName="SE CONNECTER" /></Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  </>
  );
}