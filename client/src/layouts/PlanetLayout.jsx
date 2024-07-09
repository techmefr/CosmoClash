import '@/layouts/PlanetLayout.css';
import NavBar from "@/components/layout/NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";

function PlanetLayout() {
    return (
        <>
            <NavBar />
            <div className="planets-container-all">
                <div className="planet-container">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
export default PlanetLayout;