import { useState, useEffect } from "react";
import ElectricityIco from "../components/ui/svg/ElectricityIco";
import ShieldDefenseIco from "../components/ui/svg/ShieldDefenseIco";
import MineIco from "../components/ui/svg/MineIco";
import PlusIco from "../components/ui/svg/PlusIco";
import RocketIco from "../components/ui/svg/RocketIco";
import MoneyBagIco from "../components/ui/svg/MoneyBagIco";
import SpeedMeterIco from "../components/ui/svg/SpeedMeterIco";
import CibleIco from "../components/ui/svg/CibleIco";
import fetchUserData from "../services/userService";

export default function MarketPage() {
  const [resources, setResources] = useState({
    energy: 0,
    money: 0,
    material: 0,
  });
  const [ships, setShips] = useState({ speed: 0, attack: 0, defense: 0 });
  const [shipsCount, setShipsCount] = useState(0);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      setResources({
        energy: data.energy,
        money: data.money,
        material: data.material,
      });
      setShips({
        speed: data.speed,
        attack: data.attack,
        defense: data.defense,
      });
      setShipsCount(data.ships_count);
    };

    getUserData();
  }, []);

  const handleBuyShip = () => {
    if (
      resources.energy >= 1 &&
      resources.money >= 1 &&
      resources.material >= 1
    ) {
      setResources({
        energy: resources.energy - 1,
        money: resources.money - 1,
        material: resources.material - 1,
      });
      setShipsCount(shipsCount + 1);
    } else {
      alert("Pas assez de ressources pour acheter un vaisseau");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h3 className="text-white text-4xl font-bold m-8">ACHATS</h3>

        <div className="flex flex-col items-center justify-center font-roboto"></div>
        {/* liste de nos ressources */}
        <div className="flex justify-start flex-col items-center bg-card w-96 rounded-lg h-auto text-white font-bold p-2 m-5">
          <p className="mb-2">Ressources</p>
          <div className="flex gap-10">
            <p className="text-svg-color flex gap-2">
              <ElectricityIco width={30} height={30} fillColor="white" />{" "}
              {resources.energy}
            </p>
            <p className="text-svg-color flex gap-2">
              <MoneyBagIco width={30} height={30} fillColor="white" />{" "}
              {resources.money}
            </p>
            <p className="text-svg-color flex gap-2">
              <MineIco width={30} height={30} fillColor="white" />{" "}
              {resources.material}
            </p>
          </div>
        </div>
        <div className="flex justify-start flex-col items-center bg-card w-96 rounded-lg h-auto text-white font-bold p-2 m-5">
          <p className="mb-2">Vaisseaux</p>
          <div className="flex gap-10">
            <p className="text-svg-color flex gap-2">
              <SpeedMeterIco width={30} height={30} fillColor="white" />{" "}
              {ships.speed}
            </p>
            <p className="text-svg-color flex gap-2">
              <CibleIco width={30} height={30} fillColor="white" />{" "}
              {ships.attack}
            </p>
            <p className="text-svg-color flex gap-2">
              <ShieldDefenseIco width={30} height={30} fillColor="white" />{" "}
              {ships.defense}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center font-roboto"></div>
        {/* à mapper pour afficher tous les items */}
        <div className="flex justify-evenly items-center bg-card w-96 rounded-lg h-auto text-white font-bold p-2 m-5">
          <PlusIco
            width={60}
            height={60}
            onClick={handleBuyShip}
            style={{ cursor: "pointer" }}
          />
          <div id="buy-ship">
            <p>Acheter des vaisseaux</p>
            <div className="flex">
              <p className="flex items-center gap-1">
                Coût:{" "}
                <span className="text-svg-color flex items-center gap-1">
                  -1 <ElectricityIco width={20} height={20} fillColor="white" />
                  -1 <MoneyBagIco width={20} height={20} fillColor="white" />
                  -1 <MineIco width={20} height={20} fillColor="white" />
                </span>
              </p>
            </div>
            <div className="flex">
              <p className="flex items-center gap-1">
                Gain:{" "}
                <span className="text-svg-color flex items-center gap-1">
                  +1 <RocketIco width={20} height={20} fillColor="white" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center bg-card w-96 rounded-lg h-auto text-white font-bold p-2 m-5">
          <PlusIco width={60} height={60} />
          <div id="buy-speed">
            <p>Améliorer la vitesse des vaisseaux</p>
            <div className="flex">
              <p className="flex items-center gap-1">
                Coût:{" "}
                <span className="text-svg-color flex items-center gap-1">
                  -1 <ElectricityIco width={20} height={20} fillColor="white" />
                </span>
              </p>
            </div>
            <div className="flex">
              <p className="flex items-center gap-1">
                Gain:{" "}
                <span className="text-svg-color flex items-center gap-1">
                  +1 <SpeedMeterIco width={20} height={20} fillColor="white" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          id="buy-attack"
          className="flex justify-evenly items-center bg-card w-96 rounded-lg h-auto text-white font-bold p-2 m-5"
        >
          <PlusIco width={60} height={60} />
          <div>
            <p>Améliorer l&apos;attaque des vaisseaux</p>
            <div className="flex">
              <p className="flex items-center gap-1">
                Coût:{" "}
                <span className="text-svg-color flex items-center gap-1">
                  -1 <MoneyBagIco width={20} height={20} fillColor="white" /> -1
                </span>
              </p>
            </div>
            <div className="flex">
              <p className="flex items-center gap-1">
                Gain:{" "}
                <span className="text-svg-color flex items-center gap-1">
                  +1 <CibleIco width={20} height={20} fillColor="white" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          id="buy-defense"
          className="flex justify-evenly items-center bg-card w-96 rounded-lg h-auto text-white font-bold p-2 m-5"
        >
          <PlusIco width={60} height={60} />
          <div>
            <p>Améliorer la défense des vaisseaux</p>
            <div className="flex">
              <p className="flex items-center gap-1">
                Coût:{" "}
                <span className="text-svg-color flex items-center gap-1">
                  -1 <MineIco width={20} height={20} fillColor="white" />
                </span>
              </p>
            </div>
            <div className="flex">
              <p className="flex items-center gap-1">
                Gain:{" "}
                <span className="text-svg-color flex items-center gap-1">
                  +1{" "}
                  <ShieldDefenseIco width={20} height={20} fillColor="white" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
