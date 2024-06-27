import "./App.css";
import NavBar from "./components/layout/NavBar/NavBar.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./components/navigation/Loading/Loading.jsx";

function App() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", (state) => {
      setIsLoading(state === "loading");
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <NavBar />
      {isLoading && <Loading />}
      <Outlet />
    </>
  );
}

export default App;
