import './planet.component.css'
import { CardComponent } from "@/components/planets/index.jsx";

function PlanetComponents({planets}) {
    return <div className="planet-container">
        {
            planets.map(
                planet => (
                    <CardComponent
                        key={ planet.id }
                        type={ planet.type }
                        energy={ planet.energy }
                        money={ planet.money }
                        material={ planet.material }
                        coordX={ planet.coordX }
                        coordY={ planet.coordY }
                    />
                )
            )
        }
    </div>
}

export default PlanetComponents;