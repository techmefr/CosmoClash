import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

export const Navigation = () => {


  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/community" element={<CommunityGuidelines />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/planet" element={<PlanetPage />} />
        <Route path="/legal" element={<PolicyPage />} />
        <Route path="/alliance" element={<SearchAlliance />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/tool" element={<ToolPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

    </Routes>

    </BrowserRouter>
  )

}