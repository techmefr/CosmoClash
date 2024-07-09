import PlanetLayout from "@/layouts/PlanetLayout.jsx";
import {
    SendersComponent,
    PlanetComponent,
    TitleComponent,
    ShipsComponents
} from "@/components/planets/index.jsx";
import useNbShips from "@/hooks/useNbShips.jsx";
import Starfield from "react-starfield";

function Planet() {
    const { nbShips, nbMaxShips, planets, addNumber, subNumber, submit } = useNbShips();
    return (
        <PlanetLayout>

            <Starfield
                starCount={20000}
                starColor={[255, 255, 255]}
                speedFactor={0.1}
                backgroundColor="black"
            />
            <TitleComponent />
            <ShipsComponents
                number_rocker={ nbMaxShips }
            />
            <PlanetComponent
                planets={ planets }
            />
            <SendersComponent
                nbShips={ nbShips }
                submit={() => submit}
                addNumber={() => addNumber}
                subNumber={() => subNumber}
            />
        </PlanetLayout>
    );
}

export default Planet;
