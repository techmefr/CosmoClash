import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/DashboardPage";
import Planet from "./pages/PlanetPage";
import Market from "./pages/MarketPage";
import SearchAlliance from "./pages/SearchAlliancePage";
import ToolPage from "./pages/ToolPage/ToolPage";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "game",
        element: <Dashboard />,
      },
      {
        path: "market",
        element: <Market />,
      },
      {
        path: "alliance",
        element: <SearchAlliance />,
      },
      {
        path: "tool",
        element: <ToolPage />,
      },
    ],

  },
    {
        path: "/planet",
        element: <Planet />,
    },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
