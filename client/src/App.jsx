import "./App.css";
import NavBar from "./components/layout/NavBar/NavBar.jsx";
import Loading from "./components/navigation/Loading/Loading.jsx";
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <NavBar />
      {isLoading && <Loading />}
      <Outlet />
    </>
  );
}

export default App;
