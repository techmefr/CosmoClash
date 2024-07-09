import  { useState } from "react";
import "../forms/Forms.css";
import logo from "../../assets/logo.png";
import Starfield from "react-starfield";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
     localStorage.setItem('token', JSON.stringify(json?.token));
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
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
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
