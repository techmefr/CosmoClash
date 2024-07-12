import { useEffect, useState } from "react";
import { planetService } from "@/constants/service.jsx";

const useNbShips = () => {
    const [nbMaxShips, setNbMaxShips] = useState(200);
    const [planets, setPlanets] = useState([]);
    const [nbShips, setNbShips] = useState(
        0
    );
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' ;
    useEffect(() => {
        planetService
            .getMaxNbShips(1,
                {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer' + ' ' + token
                }
            )
            .then((data) => setNbMaxShips(data.data.number_ship))
            .catch(err => console.error(err.message))
    }, []);
    useEffect(() => {
        planetService.all({
            'Content-type': 'application/json',
            Authorization: 'Bearer' + ' ' + token
        })
            .then((data) => setPlanets(data))
            .catch(err => console.log(err));
    }, []);
    const addNumber = () => setNbShips(
        nbShips !== nbMaxShips ?
            nbShips + 1 :
            nbShips
    );
    const subNumber = () => setNbShips(
        nbShips > 0 ?
            nbShips - 1 :
            0
    );
    const submit = () => {
        console.log('Ships: ', nbShips);
    }
    return ({ nbMaxShips, setNbMaxShips, nbShips, planets, addNumber, subNumber, submit })
};

export default useNbShips;