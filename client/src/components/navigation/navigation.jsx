import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ChatPage from '../../pages/ChatPage';
import CommunityGuidelines from '../../pages/CommunityGuidelines';
import ContactPage from '../../pages/ContactPage';
import DashboardPage from '../../pages/DashboardPage';
import GamePage from '../../pages/GamePage/GamePage';
import MarketPage from '../../pages/MarketPage';
import PlanetPage from '../../pages/PlanetPage';
import PolicyPage from '../../pages/PolicyPage';
import ProfilePage from '../../pages/ProfilePage';
import NavBar from '../layout/NavBar/NavBar';
import SearchAlliance from '../../pages/SearchAlliancePage/SearchAlliancePage';
import ToolPage from '../../pages/ToolPage/ToolPage';
import Register from '../forms/Register';
import Login from '../forms/Login';
import { useContext } from 'react';
import { AuthContext } from '../../App';

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const routes = [
    { path: "*", Component: HomePage, isPublic: true },
    { path: "/", Component: HomePage, isPublic: true },
    { path: "/register", Component: Register, isPublic: true },
    { path: "/login", Component: Login, isPublic: true },
    { path: "/about", Component: AboutPage, isPublic: false },
    { path: "/chat", Component: ChatPage, isPublic: false },
    { path: "/community", Component: CommunityGuidelines, isPublic: false },
    { path: "/contact", Component: ContactPage, isPublic: false },
    { path: "/dashboard", Component: DashboardPage, isPublic: false },
    { path: "/game", Component: GamePage, isPublic: false },
    { path: "/market", Component: MarketPage, isPublic: false },
    { path: "/planet", Component: PlanetPage, isPublic: false },
    { path: "/legal", Component: PolicyPage, isPublic: false },
    { path: "/alliance", Component: SearchAlliance, isPublic: false },
    { path: "/profil", Component: ProfilePage, isPublic: false },
    { path: "/tool", Component: ToolPage, isPublic: false },
  ];

  return (
    <BrowserRouter>
      {isAuthenticated && <NavBar />}
      <Routes>
        {routes.map(({ path, Component, isPublic }, index) => (
          isPublic ? (
            <Route key={index} path={path} element={<Component />} />
          ) : (
            <Route key={index} path={path} element={isAuthenticated ? <Component /> : <Navigate to="/" />} />
          )
        ))}
      </Routes>
    </BrowserRouter>
  );
};