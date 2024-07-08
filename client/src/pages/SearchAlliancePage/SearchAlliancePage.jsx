// TODO : Page pour chercher toutes les alliances et retourner leurs infos
import Starfield from "react-starfield";
import CustomButton from "../../components/ui/CustomButton";
import "./SearchAlliancePage";


function SearchAlliance() {
  return(
    <>
    <div className="flex items-center justify-center flex-col search-alliance-container">
      <Starfield
        starCount={20000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />

      <div></div>

      <div className="flex flex-col items-center justify-center mt-auto p-4" >
        <CustomButton customButtonName= "CREER UNE ALLIANCE" className= "mb-4" />
        <CustomButton customButtonName= "REJOINDRE" className= "mb-4"/>
      </div>
    
    </div>
    
  </>
  )
}

export default SearchAlliance;