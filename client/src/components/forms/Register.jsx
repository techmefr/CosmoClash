import "../forms/Forms.css";

import logo from "../../assets/logo.png";

import Starfield from "react-starfield";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 
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
      body: JSON.stringify({username,  email, password })
    }

    fetch('https://localhost:8002/register', headers)
  .then(response => {
    if(response.status === 201){
      console.log("user created succefuly")
      setMessage("votre compte est cree avec succes")
    }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
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
        <span>{message}</span>
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
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
