import Starfield from "react-starfield";
import CustomButton from "../../components/ui/CustomButton";
import "./SearchAlliancePage";
//import { useEffect, useState } from "react";


function SearchAlliance() {
  // const [alliances, setAlliances] = useState([])

  // let token = localStorage.getItem('token');

  // useEffect(() => {
  //   getAllAliances()
  // }, [])

  // const getAllAliances = () => {
  //   //e.preventDefault();
  //   const headers = {
  //     method: 'GET',
  //     headers: {
  //       'authorization': `Bearer ${JSON.parse(token)}`,
  //     }
  //   }

  // //   fetch('https://localhost:8002/api/alliances', headers)
  // // .then(response => response.json())
  // // .then(json => setAlliances(json?.data))
  // // .catch(error => {
  // //   console.error('There has been a problem with your fetch operation:', error);
  // // });   

  // };
  return(
    <>
    <div className="flex items-center justify-center flex-col search-alliance-container">
      <Starfield
        starCount={20000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />

      <div>
      </div>

      <div className="flex flex-col items-center justify-center mt-auto p-4" >
      {/* <span className=" text-xl " >Alliance</span> */}
        <CustomButton customButtonName= "CREER UNE ALLIANCE" className= "mb-4" />
        <CustomButton customButtonName= "REJOINDRE" className= "mb-4"/>
      </div>

      {/* {alliances?.map((alliance, index) =>  */}
      {/* <h1 key={index}>{alliance?.name}</h1> */}
      {/* )} */}
    
    </div>
    
  </>
  )
}

export default SearchAlliance;