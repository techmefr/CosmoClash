import "../forms/Forms.css";

import logo from "../../assets/logo.png";

import Starfield from "react-starfield";

export default function Login() {
  return (
    <>
      <div className=" flex flex-col items-center h-svh">
        <Starfield
          starCount={20000}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
          backgroundColor="black"
        />
        <img src={logo} alt="" className=" flex w-1/3 h-auto" />
        <div className=" m-10">
          <form action="" className="container">
            <div className="input-container">
              <div className="input-content">
                <div className="input-dist">
                  <span className=" text-blue-form text-xl">Connexion</span>
                  <div className="input-type">
                    <input
                      placeholder="Adresse email"
                      required
                      type="text"
                      className="input-is"
                    />
                    <input
                      placeholder="Mot de passe"
                      required
                      type="password"
                      className="input-is"
                    />
                  </div>
                  <button className=" text-blue-form m-2">
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
