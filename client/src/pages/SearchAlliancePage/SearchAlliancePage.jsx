/* eslint-disable react/prop-types */
import Starfield from "react-starfield";
import CustomButton from "../../components/ui/CustomButton";
import "./SearchAlliancePage";
import { useEffect, useState } from "react";
//import PlutoIco from "../../components/ui/svg/PlutoIco";
//import GalaxyIco from "../../components/ui/svg/GalaxyIco";
//import JupiterIco from "../../components/ui/svg/JupiterreIso";
import MarsIco from "../../components/ui/svg/MarsIco";


const AllianceList = ({alliance}) => {
  return (
    <>
      <div className="icon_alliace">
      <MarsIco
            className="nav-icon"
            width={64}
            height={64}
            fillColor="#fff"
          />
      </div>
      <div className="info_alliace">
      <h1>{alliance?.name}</h1>
      <h4>Nombre de planetes: <span className="info_value">{alliance?.planet_count}</span> </h4>
      <h4>Nombre de jours: <span className="info_value">{alliance?.player_count}</span> </h4>
      </div>
    </>
  )
} 


function SearchAlliance() {
  const [alliances, setAlliances] = useState([])
  const [alliance, setAlliance] = useState(null)

  let token = localStorage.getItem('token');

  if (token) {
    token = JSON.parse(token);
  } else {
    token = null;
  }

  useEffect(() => {
    getAllAliances()
  }, [])

  const getAllAliances = () => {
    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      }
    }

   return fetch('https://localhost:8002/api/alliances/getNbPlayerAndPlanet', headers)
  .then(response => response.json())
  .then(json => setAlliances(json?.data))
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });   

  };

  const rejoinAlliance = async (alliance) => {
    if(alliance){
      document.getElementById('alertBox').style.display = 'flex';

    }
  }

  const closeAlert = () => {
    document.getElementById('closeBtn').addEventListener('click', function() {
      document.getElementById('alertBox').style.display = 'none';
  });
  }
 

  return(
    <>
    <div className="flex items-center justify-center flex-col search-alliance-container">
      <Starfield
        starCount={20000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />

      <div className="alliance_title " >Alliances</div> 
      {alliances?.map((allian, index) =>  
      <div key={index} className={"container_alliance " + ((alliance && allian?.name === alliance?.name) ? " container_alliance_selected" : "")} onClick={() => setAlliance(allian)}> 
        <AllianceList alliance={allian} />
      </div>
       )}

      <div className="flex flex-col alliance_btn_action" >
        <CustomButton customButtonName= "CREER UNE ALLIANCE" className= "mb-4" />
        <div onClick={() => rejoinAlliance(alliance)}>
        <CustomButton customButtonName= "REJOINDRE" className= "mb-4"/>
        </div>
      </div>
    
    </div>

    <div id="alertBox" className="alert-box">
        <div className="alert-content">
            <span id="alertMessage">{`Bienvenue sur: ${alliance?.name}`}</span>
            <button id="closeBtn" onClick={() => closeAlert()}>OK</button>
        </div>
    </div>
    
  </>
  )
}

export default SearchAlliance;