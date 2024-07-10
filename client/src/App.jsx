import { Navigation } from "./components/navigation/navigation.jsx";
import Starfield from "react-starfield";

function App() {
  return (
    <>
      <Navigation />
      <Starfield
        starCount={20000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />
    </>
  );
}

export default App;
