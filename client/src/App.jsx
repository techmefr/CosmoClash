import "./App.css";
// import GamePage from "./pages/GamePage/GamePage";
import NavBar from "./components/layout/NavBar/NavBar.jsx";
import Loading from "./components/navigation/Loading/Loading.jsx";

function App() {
  return (
    <>
      {/* <GamePage /> */}
      <NavBar />
      <Loading />
    </>
  );
}

export default App;
