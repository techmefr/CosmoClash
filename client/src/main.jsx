//import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Dashboard from "./pages/DashboardPage";
//import Planet from "./pages/PlanetPage";
//import Market from "./pages/MarketPage";
//import SearchAlliance from "./pages/SearchAlliancePage/SearchAlliancePage";
//import ToolPage from "./pages/ToolPage/ToolPage";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "game",
//         element: <Dashboard />,
//       },
//       {
//         path: "planet",
//         element: <Planet />,
//       },
//       {
//         path: "market",
//         element: <Market />,
//       },
//       {
//         path: "alliance",
//         element: <SearchAlliance />,
//       },
//       {
//         path: "tool",
//         element: <ToolPage />,
//       },
//     ],
//   },
// ]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
