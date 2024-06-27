import "../forms/Forms.css";

import logo from "../../assets/logo.png";

import Starfield from "react-starfield";

export default function Register() {
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
          <form action="" className="container">
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
                    />
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
                  <button>Je crée mon compte</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
