import PlanetLayout from "@/layouts/PlanetLayout.jsx";
import {
    SendersComponent,
    PlanetComponent,
    TitleComponent,
    ShipsComponents
} from "@/components/planets/index.jsx";
import useNbShips from "@/hooks/useNbShips.jsx";

function Planet() {
    const { nbShips, nbMaxShips, planets, addNumber, subNumber, submit } = useNbShips();
    return (
        <PlanetLayout>
            <TitleComponent />
            <ShipsComponents
                number_rocker={ nbMaxShips }
            />
            <PlanetComponent
                planets={ planets }
            />
            <SendersComponent
                nbShips={ nbShips }
                submit={() => submit()}
                addNumber={() => addNumber()}
                subNumber={() => subNumber()}
            />
        </PlanetLayout>
    );
}

export default Planet;
