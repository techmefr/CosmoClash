import PlusIco from "../../components/ui/svg/PlusIco";

export default function ExamplePage() {
  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <h2 className="text-white text-4xl font-bold m-8">
          Bienvenue
          {/* {userData.username} */}
        </h2>

        <div className="flex flex-col items-center justify-center font-roboto"></div>
        <div className="flex flex-col items-center justify-center font-roboto"></div>
        {/* à mapper pour afficher tous les items */}
        <div className=" flex justify-evenly items-center bg-card w-96 rounded-lg h-auto text-white font-bold p-2 m-5">
          <PlusIco />{" "}
          <div className="">
            <p>Finday</p>
            <p>
              Coût: <span className=" text-svg-color">- 200</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
