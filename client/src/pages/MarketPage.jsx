import Starfield from "react-starfield";

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
      </div>
    </>
  );
}
