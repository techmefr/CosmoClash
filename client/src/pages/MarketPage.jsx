import Starfield from "react-starfield";
import ElectricityIco from "../components/ui/svg/ElectricityIco";
import ShieldDefenseIco from "../components/ui/svg/ShieldDefenseIco";
import MineIco from "../components/ui/svg/MineIco";
import PlusIco from "../components/ui/svg/PlusIco";

export default function MarketPage() {
  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <Starfield
          starCount={20000}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
          backgroundColor="black"
        />

        <h3 className="text-white text-4xl font-bold m-8">ACHATS</h3>

        <div className="flex flex-col items-center justify-center font-roboto"></div>
        {/* liste de nos ressources */}
        <div className=" flex justify-start flex-col items-center bg-card w-96 rounded-lg h-auto text-white font-bold p-2 m-5">
          <p className="mb-2">Ressources</p>
          <div className="flex gap-10">
            <p className=" text-svg-color flex gap-2">
              <ElectricityIco width={30} height={30} fillColor={"white"} /> 200
            </p>
            <p className=" text-svg-color flex gap-2">
              <ShieldDefenseIco width={30} height={30} fillColor={"white"} /> 200
            </p>
            <p className=" text-svg-color flex gap-2">
              <MineIco size={30} fillColor={"white"}/> 200
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center font-roboto"></div>
        {/* à mapper pour afficher tous les items */}
        <div className=" flex justify-evenly items-center bg-card w-96 rounded-lg h-auto text-white font-bold p-2 m-5">
          <PlusIco width={60} height={60} />{" "}
          <div>
            <p>Finday</p>
            <p>
              Coût: <span className=" text-svg-color">- 200</span>
            </p>
            <p>
              Gain: <span className=" text-svg-color">+ 2</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
