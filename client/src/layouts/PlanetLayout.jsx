import '@/layouts/PlanetLayout.css';
import NavBar from "@/components/layout/NavBar/NavBar.jsx";

function PlanetLayout({children}) {
    return (
        <>
            <NavBar />
            <div className="planets-container-all">
                <div className="planet-container">
                    { children }
                </div>
            </div>
        </>
    );
}
export default PlanetLayout;